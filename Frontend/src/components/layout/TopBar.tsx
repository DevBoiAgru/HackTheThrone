import { Heart, Zap, Hexagon } from 'lucide-react';
import { useGamification } from '../../context/GamificationContext';
import styles from './TopBar.module.css';

const TopBar = () => {
    const { lives, xp, streak } = useGamification();

    return (
        <header className={styles.topbar}>
            <div className={styles.statsContainer}>
                {/* Lives */}
                <div className={styles.statItem}>
                    <Heart
                        className={styles.icon}
                        fill={lives > 0 ? "var(--accent-red)" : "none"}
                        color="var(--accent-red)"
                    />
                    <span className={styles.value}>{lives}</span>
                </div>

                {/* Streak */}
                <div className={styles.statItem}>
                    <Zap
                        className={styles.icon}
                        fill="var(--primary)"
                        color="var(--primary)"
                    />
                    <span className={styles.value}>{streak}</span>
                </div>

                {/* XP */}
                <div className={styles.statItem}>
                    <Hexagon
                        className={styles.icon}
                        fill="rgba(0, 225, 255, 0.2)"
                        color="var(--accent-blue)"
                    />
                    <span className={styles.value}>{xp} XP</span>
                </div>
            </div>
        </header>
    );
};

export default TopBar;
