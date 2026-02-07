import LevelNode from '../components/map/LevelNode';
import { chapters } from '../data/chapters';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleNodeClick = (chapter: { id: any; }) => {
        navigate(`/lesson/${chapter.id}`); // Navigate to lesson/quiz
    };

    return (
        <div className="container" style={{ paddingBottom: '100px', paddingTop: '40px' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                <h1 className="glow-text" style={{ fontSize: '3rem', marginBottom: '10px' }}>MISSION MAP</h1>
                <p style={{ color: 'var(--text-muted)' }}>Choose your next target...</p>
            </div>

            <div style={{ position: 'relative', height: '600px', maxWidth: '600px', margin: '0 auto' }}>
                {/* Connection Paths */}
                <svg
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {chapters.map((chapter, index) => {
                        if (index === chapters.length - 1) return null;
                        const next = chapters[index + 1];
                        return (
                            <line
                                key={`path-${chapter.id}-${next.id}`}
                                x1={`${chapter.position.x}%`}
                                y1={chapter.position.y + 40} // Center of hex roughly (top + half height)
                                x2={`${next.position.x}%`}
                                y2={next.position.y + 40}
                                stroke="var(--bg-element)"
                                strokeWidth="4"
                                strokeDasharray="8 8"
                            />
                        );
                    })}
                </svg>

                {/* Nodes */}
                {chapters.map((chapter) => (
                    <LevelNode
                        key={chapter.id}
                        chapter={chapter}
                        onClick={handleNodeClick}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
