import { useParams, useNavigate } from 'react-router-dom';
import { chapters } from '../data/chapters';
import MissionPlayer from '../components/quiz/MissionPlayer';

const LessonPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const chapter = chapters.find((c) => c.id === Number(id));

    if (!chapter) {
        return (
            <div className="container" style={{ textAlign: 'center', marginTop: '100px' }}>
                <h1>404 - Mission Not Found</h1>
                <button onClick={() => navigate('/')}>Return to Base</button>
            </div>
        );
    }

    return (
        <div className="container" style={{ paddingTop: '40px' }}>
            <MissionPlayer chapter={chapter} />
        </div>
    );
};

export default LessonPage;
