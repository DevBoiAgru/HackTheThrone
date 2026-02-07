import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowRight, AlertTriangle } from 'lucide-react';
import { clsx } from 'clsx';
import styles from './QuizView.module.css';
import type { Slide } from '../../data/chapters';

interface QuizSlideProps {
    slide: Slide;
    onCorrect: () => void;
    onIncorrect: () => void;
    onNext: () => void;
}

const QuizSlide = ({ slide, onCorrect, onIncorrect, onNext }: QuizSlideProps) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [answerState, setAnswerState] = useState<'correct' | 'incorrect' | null>(null);

    // Reset state when slide changes
    useEffect(() => {
        setSelectedOption(null);
        setAnswerState(null);
    }, [slide.id]);

    const handleOptionClick = (optionId: string) => {
        if (answerState) return;
        setSelectedOption(optionId);
    };

    const handleCheck = () => {
        if (!selectedOption || !slide.options) return;

        const correctOption = slide.options.find(o => o.correct);
        if (selectedOption === correctOption?.id) {
            setAnswerState('correct');
            onCorrect();
        } else {
            setAnswerState('incorrect');
            onIncorrect();
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className={styles.quizContainer}
        >
            <div className={styles.questionCard}>
                <h2>{slide.question}</h2>
            </div>

            <div className={styles.optionsGrid}>
                {slide.options!.map((option) => {
                    let stateClass = '';
                    if (answerState && option.id === selectedOption) {
                        stateClass = answerState === 'correct' ? styles.correct : styles.incorrect;
                    } else if (answerState === 'correct' && option.correct) {
                        stateClass = styles.correct;
                    } else if (selectedOption === option.id) {
                        stateClass = styles.selected;
                    }

                    return (
                        <button
                            key={option.id}
                            className={clsx(styles.optionBtn, stateClass)}
                            onClick={() => handleOptionClick(option.id)}
                            disabled={!!answerState}
                        >
                            {option.text}
                            {stateClass === styles.correct && <Check size={20} />}
                            {stateClass === styles.incorrect && <X size={20} />}
                        </button>
                    )
                })}
            </div>

            <div className={styles.footer}>
                {!answerState ? (
                    <button
                        className={styles.checkBtn}
                        onClick={handleCheck}
                        disabled={!selectedOption}
                    >
                        CHECK ANSWER
                    </button>
                ) : (
                    <button
                        className={clsx(styles.checkBtn, styles[answerState])}
                        onClick={() => {
                            if (answerState === 'incorrect') {
                                setAnswerState(null);
                                setSelectedOption(null);
                            } else {
                                onNext();
                            }
                        }}
                    >
                        {answerState === 'correct' ? 'CONTINUE' : 'RETRY'}
                        <ArrowRight size={20} />
                    </button>
                )}
            </div>

            {answerState === 'incorrect' && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={styles.feedbackError}
                >
                    <AlertTriangle size={20} />
                    <span>ACCESS DENIED - Incorrect answer</span>
                </motion.div>
            )}
        </motion.div>
    );
};

export default QuizSlide;
