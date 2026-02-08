import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight, AlertTriangle } from 'lucide-react';
import { clsx } from 'clsx';
import styles from './QuizView.module.css';
import { QuestionData } from '../../types/QuizTypes';


interface QuizSlideProps {
    questionData: QuestionData;
    onAnswerSubmit: (answer: string) => Promise<{ isCorrect: boolean }>;
}

const QuizSlide = ({ questionData, onAnswerSubmit }: QuizSlideProps) => {
    console.log('QuizSlide rendered - Question:', questionData.question_number)

    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [answerState, setAnswerState] = useState<'correct' | 'incorrect' | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        console.log('Question changed - resetting state')
        setSelectedOption(null);
        setAnswerState(null);
        setIsSubmitting(false);
    }, [questionData.question_number]);

    const handleOptionClick = (option: string) => {
        if (answerState || isSubmitting) return
        console.log('Option selected:', option)
        setSelectedOption(option);
    };

    const handleCheck = async () => {
        if (!selectedOption || isSubmitting) return

        console.log('Check answer clicked - Selected:', selectedOption, 'Correct:', questionData.correct_answer)

        setIsSubmitting(true);

        try {
            const result = await onAnswerSubmit(selectedOption);
            console.log('Result received:', result)

            if (result.isCorrect) {
                console.log('Correct answer')
                setAnswerState('correct');
            } else {
                console.log('Incorrect answer')
                setAnswerState('incorrect');
            }
        } catch (err) {
            console.error('Error submitting:', err)
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleRetry = () => {
        console.log('Retry clicked')
        setAnswerState(null);
        setSelectedOption(null);
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className={styles.quizContainer}
        >
            <div className={styles.questionCard}>
                <div style={{ fontSize: '0.9rem', color: '#888', marginBottom: '0.5rem' }}>
                    {questionData.section_title} • {questionData.xp_reward} XP
                </div>
                <h2>{questionData.content}</h2>
            </div>

            <div className={styles.optionsGrid}>
                {questionData.options?.map((option, index) => {
                    let stateClass = '';

                    if (answerState && option === selectedOption) {
                        stateClass = answerState === 'correct' ? styles.correct : styles.incorrect;
                    } else if (answerState && option === questionData.correct_answer) {
                        stateClass = styles.correct;
                    } else if (selectedOption === option) {
                        stateClass = styles.selected;
                    }

                    return (
                        <button
                            key={index}
                            className={clsx(styles.optionBtn, stateClass)}
                            onClick={() => handleOptionClick(option)}
                            disabled={!!answerState || isSubmitting}
                        >
                            {option}
                            {stateClass === styles.correct && <Check size={20} />}
                            {stateClass === styles.incorrect && <X size={20} />}
                        </button>
                    );
                })}
            </div>

            <div className={styles.footer}>
                {!answerState ? (
                    <button
                        className={styles.checkBtn}
                        onClick={handleCheck}
                        disabled={!selectedOption || isSubmitting}
                    >
                        {isSubmitting ? 'CHECKING...' : 'CHECK ANSWER'}
                    </button>
                ) : answerState === 'incorrect' ? (
                    <button
                        className={clsx(styles.checkBtn, styles.incorrect)}
                        onClick={handleRetry}
                    >
                        RETRY
                        <ArrowRight size={20} />
                    </button>
                ) : (
                    <div style={{ textAlign: 'center', color: '#4CAF50', fontSize: '1.2rem', fontWeight: 'bold' }}>
                        Correct! Loading next...
                    </div>
                )}
            </div>

            {answerState === 'incorrect' && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={styles.feedbackError}
                >
                    <AlertTriangle size={20} />
                    <span>Incorrect answer</span>
                    {questionData.correct_answer && (
                        <div style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
                            Correct answer: <strong>{questionData.correct_answer}</strong>
                        </div>
                    )}
                </motion.div>
            )}
        </motion.div>
    );
};

export default QuizSlide;