// Shared types for the quiz system to ensure consistency across components
// Aligned with the API documentation in API.md

export type QuestionData = {
    question_number: number;
    section_title: string;
    topic_title: string;
    content: string;
    isQuestion: boolean;
    options?: string[];
    xp_reward: number;
    /**
     * we NEVER send the correct answer to the client, only the client sends
     * it's answer to validate
     */
    correct_answer: null;
};

export type ValidationResult = {
    status: 'success' | 'wrong';
    xp_awarded: number;
    new_xp: number;
    lives_remaining: number;
    message: string;
};

export type UserProgress = {
    user_id: number;
    xp: number;
    lives: number;
    completed_questions: number[];
};
