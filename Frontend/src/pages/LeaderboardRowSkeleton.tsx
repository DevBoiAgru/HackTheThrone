import Skeleton from '../components/ui/Skeleton';
import styles from './Leaderboard.module.css';

const LeaderboardRowSkeleton = () => {
    return (
        <li className={styles.entry}>
            <div className={styles.rank}>
                <Skeleton width={20} height={20} />
            </div>
            <div className={styles.avatar}>
                <Skeleton variant="circular" width={24} height={24} />
            </div>
            <div className={styles.username}>
                <Skeleton width={120} height={20} />
            </div>
            <div className={styles.xp}>
                <Skeleton width={60} height={20} />
            </div>
        </li>
    );
};

export default LeaderboardRowSkeleton;
