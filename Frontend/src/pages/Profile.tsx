import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useGamification } from '../context/GamificationContext';
import { hashicon } from '@emeraldpay/hashicon';
import type { UserProgress } from '../types/QuizTypes';
import { apiFetch } from '../utils/Utils';
import styles from './Profile.module.css';
import { Hexagon, Heart, User } from 'lucide-react';
import { clsx } from 'clsx';
import Skeleton from '../components/ui/Skeleton';

const Profile = () => {
    const { xp, lives } = useGamification();
    const username = localStorage.getItem('username') || 'Anonymous';

    const [solvedQuestions, setSolvedQuestions] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const avatarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (avatarRef.current) {
            const icon = hashicon(username, 120);
            avatarRef.current.innerHTML = '';
            avatarRef.current.appendChild(icon);
        }
    }, [username]);

    // Fetch user data
    useEffect(() => {
        setIsLoading(true);
        const fetchUser = async () => {
            const response = await apiFetch<UserProgress>(`/questions/user/progress`);
            if (response) {
                setSolvedQuestions(response.completed_questions.length);
            }
            setIsLoading(false);
        };
        fetchUser();
    }, []);

    return (
        <div className={styles.container}>
            <motion.div
                className={styles.profileCard}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className={styles.header}>
                    <div className={styles.avatarWrapper} ref={avatarRef}>
                    </div>
                    <h1 className={clsx(styles.username, "glow-text")}>{username.toUpperCase()}</h1>
                </div>

                <div className={styles.statsGrid}>
                    <motion.div
                        className={styles.statItem}
                        whileHover={{ scale: 1.05 }}
                    >
                        <Hexagon className={styles.statIcon} color="var(--accent-blue)" />
                        <span className={styles.statValue}>{xp}</span>
                        <span className={styles.statLabel}>Total XP</span>
                    </motion.div>

                    <motion.div
                        className={styles.statItem}
                        whileHover={{ scale: 1.05 }}
                    >
                        <Heart className={styles.statIcon} color="#f44336" />
                        <span className={styles.statValue}>{lives}</span>
                        <span className={styles.statLabel}>Lives</span>
                    </motion.div>
                </div>

                <div className={styles.infoSection}>
                    <h2 className={styles.infoTitle}>
                        <User size={24} color="var(--accent-blue)" />
                        About
                    </h2>
                    <div className={styles.infoCard}>
                        {isLoading ? (
                            <div className={styles.statItem}>
                                <Skeleton key={0} />
                            </div>
                        ) : (
                            <div className={styles.infoRow}>
                                <span className={styles.label}>Number of questions solved</span>
                                <span className={styles.value}>{solvedQuestions}</span>
                            </div>
                        )}
                    </div>
                </div>
            </motion.div >
        </div >
    );
};

export default Profile;
