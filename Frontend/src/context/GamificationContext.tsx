import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from 'react';
import { apiFetch, UserProgress } from '../utils/Utils';

type GamificationContextType = {
  xp: number;
  lives: number;
  addXp: (amount: number) => void;
  setXp: (value: number) => void;
  loseLife: () => void;
  addLife: () => void;
  setLives: (value: number) => void;
  refreshStats: () => Promise<void>;
};

const GamificationContext = createContext<GamificationContextType | undefined>(undefined);

export const useGamification = () => {
  const context = useContext(GamificationContext);
  if (!context) {
    throw new Error('useGamification must be used inside GamificationProvider');
  }
  return context;
};

export const GamificationProvider = ({ children }: { children: ReactNode }) => {
  const [xp, setXp] = useState<number>(() => {
    const stored = localStorage.getItem('xp');
    return stored ? Number(stored) : 0;
  });

  const [lives, setLives] = useState<number>(() => {
    const stored = localStorage.getItem('lives');
    return stored ? Number(stored) : 0;
  });

  useEffect(() => {
    localStorage.setItem('xp', String(xp));
    localStorage.setItem('lives', String(lives));
  }, [xp, lives]);

  const refreshStats = useCallback(async () => {
    const token = localStorage.getItem('access_token');
    if (!token) return;

    try {
      console.log('Refreshing stats from backend...');
      const data = await apiFetch<UserProgress>('/questions/user/progress');

      if (data) {
        console.log('Stats refreshed:', data);
        if (data.xp !== undefined) setXp(data.xp);
        if (data.lives !== undefined) setLives(data.lives);
      }
    } catch (error) {
      console.error('Failed to refresh stats:', error);
    }
  }, []);

  useEffect(() => {
    refreshStats();
  }, [refreshStats]);

  const addXp = (amount: number) => {
    setXp(prev => prev + amount);
  };

  const loseLife = () => {
    setLives(prev => Math.max(0, prev - 1));
  };

  const addLife = () => {
    setLives(prev => prev + 1);
  };

  return (
    <GamificationContext.Provider
      value={{
        xp,
        lives,
        addXp,
        setXp,
        loseLife,
        addLife,
        setLives,
        refreshStats,
      }}
    >
      {children}
    </GamificationContext.Provider>
  );
};
