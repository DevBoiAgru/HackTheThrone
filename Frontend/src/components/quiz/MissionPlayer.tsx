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


interface MissionPlayerProps {
    chapterID: number
    startQuestionNo: number
    onComplete: () => void
    onExit: () => void
    onProgressUpdate?: () => void  // NEW PROP - Optional callback to update parent
}

const MissionPlayer = ({ chapterID, startQuestionNo, onComplete, onExit, onProgressUpdate }: MissionPlayerProps) => {
    console.log('MissionPlayer mounted - Chapter:', chapterID, 'Start:', startQuestionNo)

    const { addXp, loseLife, lives } = useGamification();

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

    const fetchQuestion = async (qNo: number) => {
        console.log('Fetching question:', qNo)
        setLoading(true);
        setError('');

        try {
            const data = await apiFetch<QuestionData>(`/questions/${qNo}`);

            if (!data) {
                console.error('No data returned for question:', qNo)
                setError('Question not available yet. Complete previous questions first.');
                return;
            }

            console.log('Question loaded:', data)
            setQuestionData(data);
        } catch (err) {
            console.error('Error in fetchQuestion:', err);
            setError('Failed to load question.');
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

            console.log('Awarding XP:', xpAwarded)
            addXp(xpAwarded)

            console.log('Fetching updated progress...')
            const progressData = await apiFetch<UserProgress>('/questions/user/progress')
            console.log('Updated progress:', progressData)

            // Call parent callback to update map nodes
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

        if (!questionData) {
            console.error('No question data')
            return { isCorrect: false }
        }

        console.log('Correct answer from question data:', questionData.correct_answer)

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
                console.error('Validation returned null/undefined')
                return { isCorrect: false }
            }

            console.log('Parsing correctness...')

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
                if (onProgressUpdate) {
                    console.log('Calling progress update callback')
                    onProgressUpdate()
                }

                if (!chapter) {
                    console.log('No chapter, returning')
                    return { isCorrect: true }
                }

                if (currentQuestionNo >= chapter.quest_end) {
                    console.log('Last question - chapter complete')
                    setIsCompleted(true)
                } else {
                    const nextQ = currentQuestionNo + 1
                    console.log('Moving to next:', nextQ)
                    setCurrentQuestionNo(nextQ)
                }

            } else {
                console.log('ANSWER IS INCORRECT - Losing life')
                loseLife()
                console.log('Life lost')
            }

            console.log('Returning result:', { isCorrect })
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

    if (lives === 0) {
        return (
            <div className={styles.quizContainer} style={{ textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <h1>SYSTEM FAILURE</h1>
                    <p>You ran out of lives.</p>
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
                    <p>{error}</p>
                    <button className={styles.checkBtn} onClick={onExit} style={{ marginTop: '2rem' }}>
                        Return to Map
                    </button>
                </motion.div>
            </div>
        );
    }

    if (loading || !questionData) {
        return (
            <div className={styles.quizContainer} style={{ textAlign: 'center' }}>
                <h2>Loading...</h2>
            </div>
        );
    }

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
                    left: '285px',
                    background: 'rgba(0,0,0,0.5)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 1000,
                    color: 'white'
                }}
                title="Exit to Map"
            >
                <X size={24} />
            </button>

            <div className={styles.progress}>
                <div
                    className={styles.progressBar}
                    style={{ width: `${progressPercent}%` }}
                />
            </div>

            <AnimatePresence mode="wait">
                {questionData.isQuestion ? (
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