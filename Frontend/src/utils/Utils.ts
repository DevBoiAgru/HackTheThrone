import { url } from "../data/constant";

/**
 * Standardized API fetch helper
 */
export async function apiFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T | null> {
  const token = localStorage.getItem('access_token');

  const headers = {
    'Content-Type': 'application/json',
    ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
    ...options.headers,
  };

  try {
    const response = await fetch(`${url}${endpoint}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      console.error(`API Error [${response.status}] ${endpoint}`);
      return null;
    }

    return await response.json();
  } catch (error) {
    console.error(`Fetch Exception ${endpoint}:`, error);
    return null;
  }
}

/**
 * Types and Geometry Utilities
 */
export function ShuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

type Position = { x: number; y: number }
interface PositionedNode { position: Position }

export function positionOnVerticalSineWave<T extends PositionedNode>(
  nodes: T[],
  options: { amplitude?: number; verticalGap?: number; startY?: number; phaseOffset?: number } = {}
): T[] {
  const { amplitude = 80, verticalGap = 130, startY = 50, phaseOffset = 0 } = options;

  return nodes.map((node, index) => {
    const theta = index * Math.PI + Math.PI / 2 + phaseOffset;
    return {
      ...node,
      position: {
        x: amplitude * Math.sin(theta),
        y: startY + index * verticalGap
      }
    };
  });
}

/**
 * Progress & Stat Interfaces
 */
export interface UserProgress {
  highest_completed: number;
  xp: number;
  lives: number;
  completed_questions?: number[];
}