import Skeleton from '../ui/Skeleton';
import styles from './QuizView.module.css';

const MissionSkeleton = () => {
    return (
        <div className={styles.quizContainer} style={{ textAlign: 'center', padding: '2rem' }}>
            <Skeleton width="80%" height={40} style={{ margin: '0 auto 2rem' }} />

            <div style={{ marginBottom: '2rem' }}>
                <Skeleton width="100%" height={24} style={{ marginBottom: '1rem' }} />
                <Skeleton width="90%" height={24} style={{ marginBottom: '1rem' }} />
                <Skeleton width="95%" height={24} style={{ marginBottom: '1rem' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '3rem' }}>
                <Skeleton height={60} />
                <Skeleton height={60} />
                <Skeleton height={60} />
                <Skeleton height={60} />
            </div>

            <div style={{ marginTop: '4rem' }}>
                <Skeleton width={120} height={48} style={{ margin: '0 auto' }} />
            </div>
        </div>
    );
};

export default MissionSkeleton;
