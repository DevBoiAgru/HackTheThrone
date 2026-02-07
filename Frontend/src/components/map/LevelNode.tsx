import { Hexagon, Lock, Check, Star } from 'lucide-react';
import styles from './LevelNode.module.css';
import { clsx } from 'clsx';
import { motion } from 'framer-motion';
import type { Chapter } from '../../data/chapters';

const LevelNode = ({ chapter, onClick }: { chapter: Chapter; onClick: (chapter: Chapter) => void }) => {
    const { status, position } = chapter;

    const isLocked = status === 'locked';
    const isCompleted = status === 'completed';
    const isAvailable = status === 'available';

    return (
        <motion.div
            className={clsx(styles.nodeContainer, styles[status])}
            style={{ left: `${position.x}%`, top: `${position.y}px` }}
            initial={{ x: "-50%" }}
            whileHover={!isLocked ? { scale: 1.05 } : {}}
            whileTap={!isLocked ? { scale: 0.95 } : {}}
            onClick={() => !isLocked && onClick(chapter)}
        >
            <div className={styles.iconWrapper}>
                <Hexagon
                    size={80}
                    className={styles.hexBg}
                    strokeWidth={1.5}
                />
                <div className={styles.content}>
                    {isLocked && <Lock size={24} />}
                    {isCompleted && <Check size={32} strokeWidth={3} />}
                    {isAvailable && <Star size={32} fill="var(--bg-dark)" />}
                </div>
            </div>

            <div className={styles.label}>
                <span className={styles.title}>{chapter.title}</span>
            </div>
        </motion.div>
    );
};

export default LevelNode;
