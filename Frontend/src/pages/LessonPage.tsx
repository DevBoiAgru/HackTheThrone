import { useEffect, useState } from 'react'
import LevelNode from '../components/map/LevelNode'
import MissionPlayer from '../components/quiz/MissionPlayer'
import { Chapters } from '../data/chapters'
import { useParams } from 'react-router-dom'
import { positionOnVerticalSineWave, apiFetch, UserProgress } from '../utils/Utils'
import LessonMapSkeleton from '../components/map/LessonMapSkeleton'

const SVG_WIDTH = 100
const BOTTOM_PADDING = 120

type QuestionNode = {
  questionNumber: number
  position: { x: number; y: number }
  status: 'locked' | 'available' | 'completed'
}

const LessonPage = () => {
  const { chapterID } = useParams()
  const [questionNodes, setQuestionNodes] = useState<QuestionNode[]>([])
  const [loading, setLoading] = useState(true)
  const [userProgress, setUserProgress] = useState<number>(0)
  const [activeMission, setActiveMission] = useState<number | null>(null)

  const chapter = Chapters.find(c => c.id === Number(chapterID))

  const nodePositionOptions = {
    amplitude: 20,
    verticalGap: 110,
    startY: 50,
    frequency: 0.2,
    phaseOffset: 0
  }

  useEffect(() => {
    console.log('LessonPage mounted - Chapter:', chapterID)
    initializeNodes()
  }, [chapter])

  // Auto-refresh nodes every 3 seconds when on map view (not in mission)
  useEffect(() => {
    if (activeMission === null && chapter) {
      console.log('Setting up auto-refresh interval')
      const interval = setInterval(() => {
        console.log('Auto-refreshing nodes...')
        initializeNodes()
      }, 3000)

      return () => {
        console.log('Clearing auto-refresh interval')
        clearInterval(interval)
      }
    }
  }, [activeMission, chapter])

  const initializeNodes = async () => {
    if (!chapter) {
      console.error('No chapter found')
      return
    }

    try {
      setLoading(true)
      console.log('Initializing nodes for chapter:', chapter.id)

      console.log('Fetching user progress...')
      let highestCompleted = 0

      try {
        const progressData = await apiFetch<UserProgress>('/questions/user/progress')
        console.log('Progress data:', progressData)

        // Check for completed_questions array
        if (progressData?.completed_questions && Array.isArray(progressData.completed_questions)) {
          highestCompleted = progressData.completed_questions.length > 0
            ? Math.max(...progressData.completed_questions)
            : 0
          console.log('Completed questions:', progressData.completed_questions)
        } else {
          highestCompleted = progressData?.highest_completed || 0
        }

        console.log('Highest completed:', highestCompleted)
      } catch (err) {
        console.error('Failed to fetch progress:', err)
        highestCompleted = 0
      }

      setUserProgress(highestCompleted)

      console.log('Creating nodes...')
      const totalQuestions = chapter.quest_end - chapter.quest_start + 1

      const nodes: QuestionNode[] = Array.from(
        { length: totalQuestions },
        (_, index) => {
          const questionNumber = chapter.quest_start + index

          let status: 'locked' | 'available' | 'completed'
          if (questionNumber <= highestCompleted) {
            status = 'completed'
          } else if (questionNumber === highestCompleted + 1) {
            status = 'available'
          } else {
            status = 'locked'
          }

          return {
            questionNumber,
            position: { x: 0, y: 0 },
            status
          }
        }
      )

      // Position nodes on vertical sine wave
      const positioned = positionOnVerticalSineWave(nodes, nodePositionOptions)

      console.log('Nodes updated:', positioned.length)
      setQuestionNodes(positioned)

    } catch (error) {
      console.error('Error initializing nodes:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleNodeClick = (questionNumber: number) => {
    console.log('Node clicked - Opening question:', questionNumber)

    const node = questionNodes.find(n => n.questionNumber === questionNumber)

    if (node?.status === 'locked') {
      console.log('Node is locked')
      return
    }

    setActiveMission(questionNumber)
  }

  const handleMissionComplete = async () => {
    console.log('Mission completed - Refreshing map')
    await initializeNodes()
    setActiveMission(null)
  }

  const handleMissionExit = async () => {
    console.log('Mission exited - Refreshing map')
    await initializeNodes()
    setActiveMission(null)
  }

  if (!chapter) {
    return (
      <div className="container" style={{ textAlign: 'center', paddingTop: 100 }}>
        <h1>ERROR: PAGE NOT FOUND</h1>
        <p>Chapter not found</p>
      </div>
    )
  }

  // Loading state now handled inline within the map area

  if (activeMission !== null) {
    console.log('Rendering MissionPlayer for question:', activeMission)
    return (
      <MissionPlayer
        chapterID={Number(chapterID)}
        startQuestionNo={activeMission}
        onComplete={handleMissionComplete}
        onExit={handleMissionExit}
        onProgressUpdate={initializeNodes}
      />
    )
  }

  const maxY = questionNodes.length > 0
    ? Math.max(...questionNodes.map(n => n.position.y))
    : 0
  const SVG_HEIGHT = maxY + BOTTOM_PADDING

  const completedCount = questionNodes.filter(n => n.status === 'completed').length
  const totalCount = questionNodes.length

  return (
    <div className="container" style={{ paddingTop: 40, paddingBottom: 120 }}>
      <div style={{ textAlign: 'center', marginBottom: 60 }}>
        <h1 className="glow-text" style={{ fontSize: '3rem' }}>
          {chapter.title.toUpperCase()}
        </h1>
        <p style={{ color: 'var(--text-muted)' }}>
          {chapter.description}
        </p>
        <p style={{ color: 'var(--text-muted)', marginTop: 10 }}>
          Progress: {completedCount} / {totalCount} completed
        </p>
        <p style={{ fontSize: '0.8rem', color: '#666', marginTop: 5 }}>
          Highest completed: Question #{userProgress}
        </p>
      </div>

      <div
        style={{
          position: 'relative',
          height: SVG_HEIGHT,
          maxWidth: 600,
          margin: '0 auto'
        }}
      >
        {loading && questionNodes.length === 0 ? (
          <LessonMapSkeleton />
        ) : (
          <>
            <svg
              viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
              preserveAspectRatio="xMidYMin meet"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
                pointerEvents: 'none'
              }}
            >
              {questionNodes.map((node, i) => {
                if (i === questionNodes.length - 1) return null
                const next = questionNodes[i + 1]

                return (
                  <line
                    key={`line-${node.questionNumber}`}
                    x1={2.5 * nodePositionOptions.amplitude + 6.5 * node.position.x}
                    y1={0.75 * nodePositionOptions.startY + node.position.y}
                    x2={2.5 * nodePositionOptions.amplitude + 6.5 * next.position.x}
                    y2={0.75 * nodePositionOptions.startY + next.position.y}
                    stroke="rgba(255,255,255,0.25)"
                    strokeWidth="2"
                    strokeDasharray="6 6"
                    strokeLinecap="round"
                  />
                )
              })}
            </svg>

            {questionNodes.map((node) => (
              <LevelNode
                key={node.questionNumber}
                questionNumber={node.questionNumber}
                position={node.position}
                status={node.status}
                onClick={handleNodeClick}
              />
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default LessonPage