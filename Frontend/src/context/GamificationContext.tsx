import { createContext, useContext, useState } from 'react';

const GamificationContext = createContext();

export const useGamification = () => useContext(GamificationContext);

export const GamificationProvider = ({ children }) => {
    const [xp, setXp] = useState(0);
    const [lives, setLives] = useState(3);
    const [streak, setStreak] = useState(0);
    const [level, setLevel] = useState(1); // "Script Kiddie" -> "White Hat"

    const addXp = (amount: number) => {
        setXp((prev) => prev + amount);
    };

    const loseLife = () => {
        setLives((prev) => Math.max(0, prev - 1));
    };

    const addLife = () => {
        setLives((prev) => prev + 1);
    };

    return (
        <GamificationContext.Provider
            value={{
                xp,
                lives,
                streak,
                level,
                addXp,
                loseLife,
                addLife,
            }}
        >
            {children}
        </GamificationContext.Provider>
    );
};
