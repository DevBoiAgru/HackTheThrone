import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGamification } from '../../context/GamificationContext';
import { X } from 'lucide-react';
import styles from './QuizView.module.css';
import TheorySlide from './TheorySlide';
import QuizSlide from './QuizSlide';
import { Chapters } from '../../data/chapters';
import { apiFetch, UserProgress } from '../../utils/Utils';
import { QuestionData, ValidationResult } from '../../types/QuizTypes';
import MissionSkeleton from './MissionSkeleton';


interface MissionPlayerProps {
    chapterID: number
    startQuestionNo: number
    onComplete: () => void
    onExit: () => void
    onProgressUpdate?: () => void
}

const MissionPlayer = ({ chapterID, startQuestionNo, onComplete, onExit, onProgressUpdate }: MissionPlayerProps) => {
    console.log('MissionPlayer mounted - Chapter:', chapterID, 'Start:', startQuestionNo)

    const { addXp, lives, syncWithBackend } = useGamification() as any;

    const [currentQuestionNo, setCurrentQuestionNo] = useState(startQuestionNo);
    const [questionData, setQuestionData] = useState<QuestionData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');
    const [isCompleted, setIsCompleted] = useState(false);

    const chapter = Chapters.find(c => c.id === chapterID);

    useEffect(() => {
        console.log('Question number changed to:', currentQuestionNo)
        fetchQuestion(currentQuestionNo);
    }, [currentQuestionNo]);

    // Check lives on mount and after each question
    useEffect(() => {
        console.log('Current lives:', lives)
        if (lives <= 0) {
            console.log('No lives remaining - showing game over')
        }
    }, [lives]);

    const fetchQuestion = async (qNo: number) => {
        console.log('Fetching question:', qNo)
        setLoading(true);
        setError('');

        try {
            const data = await apiFetch<QuestionData>(`/questions/${qNo}`);

            if (!data) {
                console.error('No data returned for question:', qNo)
                setError('This question is locked. Complete previous questions first.');
                return;
            }

            console.log('Question loaded:', data)
            setQuestionData(data);
        } catch (err: any) {
            console.error('Error in fetchQuestion:', err);
            
            // Check if it's a 403 error
            if (err.message && (err.message.includes('403') || err.message.includes('locked'))) {
                setError('🔒 This question is locked. Complete previous questions first.');
            } else {
                setError('Failed to load question.');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleTheoryComplete = async () => {
        console.log('Theory complete - Question:', currentQuestionNo)

        if (!questionData) {
            console.error('No question data')
            alert('Error: No question data.')
            return
        }

        try {
            console.log('Validating theory...')
            const validationResult = await apiFetch<ValidationResult>('/questions/validate', {
                method: 'POST',
                body: JSON.stringify({
                    question_number: currentQuestionNo,
                    answer: ""
                })
            });

            if (!validationResult) {
                console.error('Validation failed')
                alert('Failed to mark theory as complete.')
                return
            }

            console.log('Theory validated:', validationResult)

            const isSuccess = validationResult.status === 'success' ||
                (validationResult.message && validationResult.message.toLowerCase().includes('completed'))

            if (!isSuccess) {
                console.error('Theory validation not successful')
                alert('Failed to complete theory.')
                return
            }

            const xpAwarded =
                validationResult.xp_awarded ||
                (validationResult as any).xp ||
                (validationResult as any).points ||
                questionData.xp_reward
            
            console.log('Awarding XP for theory:', xpAwarded)
            addXp(xpAwarded)
            
            if (onProgressUpdate) {
                console.log('Calling progress update callback')
                onProgressUpdate()
            }

            if (!chapter) return

            if (currentQuestionNo >= chapter.quest_end) {
                console.log('Chapter complete')
                setIsCompleted(true)
            } else {
                const nextQ = currentQuestionNo + 1
                console.log('Moving to next question:', nextQ)
                setCurrentQuestionNo(nextQ)
            }

        } catch (err) {
            console.error('Error in handleTheoryComplete:', err)
            alert('An error occurred.')
        }
    };

    const handleAnswerSubmit = async (selectedAnswer: string) => {
        console.log('=== ANSWER SUBMIT START ===')
        console.log('Question number:', currentQuestionNo)
        console.log('Selected answer:', selectedAnswer)

        console.log('Current lives before submit:', lives)
        

        if (!questionData) {
            console.error('No question data')
            return { isCorrect: false }
        }

        try {
            console.log('Calling validateAnswer...')
            const validationResult = await apiFetch<ValidationResult>('/questions/validate', {
                method: 'POST',
                body: JSON.stringify({
                    question_number: currentQuestionNo,
                    answer: selectedAnswer
                })
            });

            console.log('=== VALIDATION RESULT RECEIVED ===')
            console.log('Result object:', validationResult)

            if (!validationResult) {
                console.error('Validation returned null')
                return { isCorrect: false }
            }

            console.log('Parsing correctness...')

            // Determine if answer is correct
            let isCorrect = false

            if (validationResult.message) {
                isCorrect = validationResult.status === 'success'
            }

            console.log('=== FINAL RESULT ===')
            console.log('isCorrect:', isCorrect)
            console.log('==================')

            if (isCorrect) {
                console.log('ANSWER IS CORRECT - Proceeding...')

                const xpAwarded =
                    validationResult.xp_awarded ||
                    (validationResult as any).xp ||
                    (validationResult as any).points ||
                    questionData.xp_reward

                console.log('XP to award:', xpAwarded)
                addXp(xpAwarded)
                console.log('XP awarded')

                console.log('Fetching progress...')
                const progressData = await apiFetch<UserProgress>('/questions/user/progress')
                console.log('Progress:', progressData)

                // Call parent callback to update map nodes
                const message = validationResult.message.toLowerCase()
                console.log('Backend message:', message)
                
                if (message.includes('correct answer') || message.includes('correct!')) {
                    isCorrect = true
                } else if (message.includes('incorrect') || message.includes('wrong')) {
                    isCorrect = false
                }
            }
            
            // Additional check for status
            if (validationResult.status === 'success') {
                isCorrect = true
            }
            
            console.log('=== IS CORRECT:', isCorrect, '===')

            if (isCorrect) {
                console.log('✓ CORRECT ANSWER')
                
                // ONLY give XP for correct answers
                const xpAwarded = 
                    validationResult.xp_awarded || validationResult.lives_remaining || validationResult.new_xp ||questionData.xp_reward
                
                console.log('Adding XP:', xpAwarded)
                addXp(xpAwarded)
                
                // Sync with backend to ensure lives are current
                console.log('Syncing with backend after correct answer...')
                await syncWithBackend()
                
                if (onProgressUpdate) {
                    onProgressUpdate()
                }

                if (!chapter) {
                    return { isCorrect: true }
                }

                if (currentQuestionNo >= chapter.quest_end) {
                    console.log('Chapter complete')
                    setIsCompleted(true)
                } else {
                    const nextQ = currentQuestionNo + 1
                    console.log('Moving to next question:', nextQ)
                    setCurrentQuestionNo(nextQ)
                }

            } else {
                console.log('✗ WRONG ANSWER')
                
                // DO NOT give XP for wrong answers
                console.log('No XP awarded for wrong answer')
                
                // Sync with backend to get updated lives
                console.log('Syncing lives from backend after wrong answer...')
                await syncWithBackend()
                
                // Check lives after sync
                console.log('Lives after sync:', lives)
                
                // The QuizSlide component will show retry button
                // User stays on same question
            }

            return { isCorrect }

        } catch (err) {
            console.error('Exception in handleAnswerSubmit:', err)
            return { isCorrect: false }
        }
    };

    const handleFinish = () => {
        console.log('Chapter completed - awarding bonus XP')
        addXp(100);
        onComplete();
    };

    // Check lives BEFORE showing game over
    if (lives <= 0) {
        return (
            <div className={styles.quizContainer} style={{ textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <h1 style={{ color: '#f44336', marginBottom: '1rem' }}>GAME OVER</h1>
                    <p>You ran out of lives.</p>
                    <p style={{ fontSize: '3rem', margin: '2rem 0' }}>💀</p>
                    <p style={{ marginBottom: '2rem' }}>Lives: {lives}</p>
                    <button className={styles.checkBtn} onClick={onExit}>
                        Return to Map
                    </button>
                </motion.div>
            </div>
        );
    }

    if (isCompleted) {
        return (
            <div className={styles.quizContainer} style={{ textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
                >
                    <h1>MISSION ACCOMPLISHED</h1>
                    <p>CHAPTER COMPLETE</p>
                    <p>BONUS XP: +100</p>
                    <button className={styles.checkBtn} onClick={handleFinish}>
                        Continue
                    </button>
                </motion.div>
            </div>
        );
    }

    if (error && !loading) {
        return (
            <div className={styles.quizContainer} style={{ textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <h2 style={{ color: '#f44336', marginBottom: '1rem' }}>Access Denied</h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>{error}</p>
                    <button className={styles.checkBtn} onClick={onExit} style={{ marginTop: '2rem' }}>
                        Return to Map
                    </button>
                </motion.div>
            </div>
        );
    }

    // Loading state now handled inline within the content area

    const totalQuestions = chapter ? chapter.quest_end - chapter.quest_start + 1 : 1;
    const currentIndex = chapter ? currentQuestionNo - chapter.quest_start : 0;
    const progressPercent = Math.max(((currentIndex) / (totalQuestions - 1)) * 100, 1);

    return (
        <div className={styles.missionWrapper}>
            <button
                onClick={onExit}
                style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'rgba(0,0,0,0.5)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 1000,
                    color: 'white',
                    transition: 'all 0.2s'
                }}
                title="Exit to Map"
            >
                <X size={24} />
            </button>

            {/* Lives Display */}
            <div style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                background: 'rgba(0,0,0,0.7)',
                padding: '10px 20px',
                borderRadius: '10px',
                border: '1px solid rgba(255,255,255,0.2)',
                zIndex: 1000
            }}>
                <span style={{ 
                    fontSize: '1.2rem', 
                    color: lives <= 2 ? '#f44336' : '#fff',
                    fontWeight: 'bold'
                }}>
                    ❤️ {lives}
                </span>
            </div>

            <div className={styles.progress}>
                <div
                    className={styles.progressBar}
                    style={{ width: `${progressPercent}%` }}
                />
            </div>

            <AnimatePresence mode="wait">
                {loading || !questionData ? (
                    <MissionSkeleton key="loading-mission" />
                ) : questionData.isQuestion ? (
                    <QuizSlide
                        key={questionData.question_number}
                        questionData={questionData}
                        onAnswerSubmit={handleAnswerSubmit}
                    />
                ) : (
                    <TheorySlide
                        key={questionData.question_number}
                        questionData={questionData}
                        onTheoryComplete={handleTheoryComplete}
                    />
                )}
            </AnimatePresence>
        </div>
    );
};

export default MissionPlayer;