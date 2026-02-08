import { Chapters } from '../data/chapters';
import { useNavigate } from 'react-router-dom';
import styles from './home.module.css'
import { url } from '../data/constant';
import { getRandomFact,cybersecurityFacts } from '../data/chapters';
// import { div, section } from 'framer-motion/client';

import { Terminal } from 'lucide-react';
import { useState } from 'react';

const Home = () => {
    const [Number, setNumber] = useState(0)
    const navigate = useNavigate();

    const handlesectionClick = (chapter: { id: any; }) => {
        navigate(`/lesson/${chapter.id}`); // Navigate to lesson/quiz
        setNumber(chapter.id)
    };

    const handlepracticebtn = () => {
        navigate(`/practice`);
    }

    return (
        <div className={styles.container}>
        <div className={styles.sectionswrapper}>
            {Chapters.map((sections) => (
            <div
                key={sections.id}
                onClick={() => handlesectionClick(sections)}
                className={styles.card}>
                <h2 className={styles.title}>{sections.title}</h2>
                {/* <div className={styles.brief}>{sections.brief}</div> */}
                <div className={styles.description}>{sections.description}</div>
            </div>

            <div className={styles.rightPanel}  >
                <div className={styles.fact}>
                    <h1>Fact of the day!</h1>
                    <span>
                        The internet didn’t make humans smarter or dumber. It just forced ancient
                        survival instincts to run at broadband speed, with pop-ups.
                    </span>
                    <span className={styles.factbottom}>
                        we will be having a fact each day!!
                    </span>
                </div>

                <div className={styles.practice}>
                    <h1>Wanna increase your XP in a fastest way?</h1>
                    <div>Try the practice section !!!!</div>
                    <button onClick={handlepracticebtn}>
                        <Terminal size={24} />
                        Practice
                    </button>
                </div>

                <div className={styles.info}>
                    <h1>Your info</h1>
                    <span>Lives remaining: <strong>3</strong></span>
                    <span>Your XP: <strong>999</strong></span>
                    <span>Leaderboard rank: <strong>99</strong></span>
                </div>
            </div>
        </div>
    );
};


export default Home;