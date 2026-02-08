import Skeleton from '../ui/Skeleton';

const LessonMapSkeleton = () => {
    // We represent the wave with 8 nodes
    const skeletonNodes = Array.from({ length: 8 });
    const verticalGap = 110;
    const startY = 50;
    const amplitude = 20;

    return (
        <div
            style={{
                position: 'relative',
                height: 1000,
                maxWidth: 600,
                margin: '0 auto'
            }}
        >
            {skeletonNodes.map((_, i) => {
                const y = startY + i * verticalGap;
                const x = amplitude * Math.sin(0.2 * i);

                return (
                    <div
                        key={i}
                        style={{
                            position: 'absolute',
                            left: `calc(50% + ${x * 6.5}px)`,
                            top: y,
                            transform: 'translate(-50%, -50%)',
                            zIndex: 1
                        }}
                    >
                        <Skeleton variant="circular" width={80} height={80} />
                    </div>
                );
            })}
        </div>
    );
};

export default LessonMapSkeleton;
