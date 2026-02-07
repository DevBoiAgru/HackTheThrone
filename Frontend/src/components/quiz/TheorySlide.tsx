import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import styles from './LessonView.module.css'; // Reusing LessonView styles for consistency
import type { Slide } from '../../data/chapters';

interface TheorySlideProps {
    slide: Slide;
    onNext: () => void;
}

const TheorySlide = ({ slide, onNext }: TheorySlideProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className={styles.lessonContainer}
        >
            <div className={styles.header}>
                <h1 className={styles.title}>{slide.title}</h1>
            </div>

            <div className={styles.contentCard}>
                <h2>Mission Briefing</h2>
                <div className={styles.textContent}>
                    {slide.text}
                </div>
            </div>

            <button className={styles.completeBtn} onClick={onNext}>
                <span>Continue</span>
                <ArrowRight size={20} />
            </button>
        </motion.div>
    );
};

export default TheorySlide;
