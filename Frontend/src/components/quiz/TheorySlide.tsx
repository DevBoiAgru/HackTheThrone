import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './LessonView.module.css';
import { QuestionData } from '../../types/QuizTypes';


interface TheorySlideProps {
    questionData: QuestionData;
    onTheoryComplete: () => Promise<void>;
}

const TheorySlide = ({ questionData, onTheoryComplete }: TheorySlideProps) => {
    console.log('TheorySlide rendered - Question:', questionData.question_number)

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleContinue = async () => {
        console.log('Continue clicked - Question:', questionData.question_number)

        setIsSubmitting(true);

        try {
            await onTheoryComplete();
        } catch (err) {
            console.error('Error in handleContinue:', err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className={styles.lessonContainer}
        >
            <div className={styles.header}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{ fontSize: '3rem' }}>📖</div>
                    <div>
                        <div style={{ fontSize: '0.9rem', color: '#888' }}>
                            {questionData.section_title}
                        </div>
                        <h1 className={styles.title}>{questionData.topic_title}</h1>
                    </div>
                </div>
            </div>

            <div className={styles.contentCard}>
                <h2>Mission Briefing</h2>
                <div className={styles.textContent}>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#333' }}>
                        {questionData.content}
                    </p>
                </div>
                <div style={{
                    marginTop: '1.5rem',
                    padding: '1rem',
                    background: '#e8f5e9',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: '#2e7d32'
                }}>
                    <span style={{ fontSize: '1.5rem' }}>📖</span>
                    <span>+{questionData.xp_reward} XP for reading</span>
                </div>
            </div>

            <button
                className={styles.completeBtn}
                onClick={handleContinue}
                disabled={isSubmitting}
            >
                <span>{isSubmitting ? 'Processing...' : 'Continue'}</span>
                <ArrowRight size={20} />
            </button>
        </motion.div>
    );
};

export default TheorySlide;