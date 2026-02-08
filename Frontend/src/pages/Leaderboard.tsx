import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Hexagon } from 'lucide-react';
import { apiFetch } from '../utils/Utils';
import styles from './Leaderboard.module.css';
import { clsx } from 'clsx';
import LeaderboardRowSkeleton from './LeaderboardRowSkeleton';

interface LeaderboardEntry {
    username: string;
    xp: number;
}

const Leaderboard = () => {
    const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const currentUsername = localStorage.getItem('username');

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                setLoading(true);
                const data = await apiFetch<LeaderboardEntry[]>('/users/leaderboard');
                if (data) {
                    setEntries(data);
                } else {
                    setError('Failed to load leaderboard data.');
                }
            } catch (err) {
                console.error('Error fetching leaderboard:', err);
                setError('An unexpected error occurred.');
            } finally {
                setLoading(false);
            }
        };

        fetchLeaderboard();
    }, []);

    const getRankIcon = (index: number) => {
        switch (index) {
            case 0: return <Trophy className={styles.rank1} size={24} />;
            case 1: return <Medal className={styles.rank2} size={24} />;
            case 2: return <Medal className={styles.rank3} size={24} />;
            default: return null;
        }
    };

    // Loading state now handled inline within the list

    if (error) {
        return (
            <div className={styles.error}>
                <h1>Error</h1>
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <motion.h1
                    className={clsx(styles.title, "glow-text")}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                >
                    LEADERBOARD
                </motion.h1>
                <p className={styles.subtitle}>Best in the business</p>
            </header>

            <motion.div
                className={styles.leaderboardCard}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <ul className={styles.entryList}>
                    {loading ? (
                        Array.from({ length: 10 }).map((_, i) => (
                            <LeaderboardRowSkeleton key={i} />
                        ))
                    ) : (
                        entries.map((entry, index) => {
                            const isCurrentUser = entry.username === currentUsername;

                            return (
                                <motion.li
                                    key={entry.username}
                                    className={styles.entry}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.1 * index }}
                                >
                                    <div className={clsx(styles.rank, styles[`rank${index + 1}`])}>
                                        {index + 1}
                                    </div>

                                    <div className={styles.avatar}>
                                        {getRankIcon(index) || <span>👤</span>}
                                    </div>

                                    <div className={clsx(
                                        styles.username,
                                        isCurrentUser && styles.shinyUsername
                                    )}>
                                        {entry.username}
                                        {isCurrentUser && " (You)"}
                                    </div>

                                    <div className={styles.xp}>
                                        {entry.xp} XP
                                    </div>
                                    <Hexagon
                                        className={styles.icon}
                                        fill="rgba(0, 225, 255, 0.2)"
                                        color="var(--accent-blue)"
                                    />
                                </motion.li>
                            );
                        })
                    )}
                </ul>
            </motion.div>
        </div>
    );
};

export default Leaderboard;
