type ChapterStatus = 'completed' | 'failed' | 'locked' | 'available';

export type Slide = {
    id: string;
    type: 'theory' | 'quiz';
    title?: string;
    text?: string;
    question?: string;
    options?: {
        id: string;
        text: string;
        correct?: boolean;
    }[];
}

export type Chapter = {
    id: number;
    title: string;
    description: string;
    brief: string;
    status: ChapterStatus;
    position: { x: number; y: number };
    content: Slide[];
}

export const chapters: Chapter[] = [
    {
        id: 0,
        title: 'Welcome to the Hive',
        description: 'Basics of Cybersecurity',
        brief: 'Welcome to HackBee, recruit. You are about to embark on a journey to master the art of cybersecurity. Let us begin.',
        status: 'available',
        position: { x: 50, y: 0 },
        content: [
            {
                id: 's1',
                type: 'theory',
                title: 'What is Cybersecurity?',
                text: 'Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users; or interrupting normal business processes.'
            },
            {
                id: 's2',
                type: 'quiz',
                question: 'What is the primary goal of cybersecurity?',
                options: [
                    { id: '1', text: 'To learn how to code' },
                    { id: '2', text: 'To protect digital systems and data', correct: true },
                    { id: '3', text: 'To build faster computers' }
                ]
            },
            {
                id: 's3',
                type: 'quiz',
                question: 'What happens when a system is not secure?',
                options: [
                    { id: '1', text: 'Data might be stolen', correct: true },
                    { id: '2', text: 'Data will be safer' },
                    { id: '3', text: 'The system will work better' }
                ]
            }
        ]
    },
    {
        id: 1,
        title: 'Password Panic',
        description: 'Strong locks > Bad habits',
        brief: 'Hackers loooove lazy passwords. Always make sure you create a strong one! Let\'s learn why.',
        status: 'locked',
        position: { x: 30, y: 150 },
        content: [
            {
                id: 's1',
                type: 'theory',
                title: 'Why Passwords Matter',
                text: 'Passwords are often the first line of defense. Weak or reused passwords make it easy for attackers to break in by just guessing or digging through leaked data.'
            },
            {
                id: 's2',
                type: 'theory',
                title: 'What Makes a Strong Password',
                text: 'A strong password is long, unique, and random. Mixing letters, numbers, and symbols makes it even stronger.'
            },
            {
                id: 's3',
                type: 'quiz',
                question: 'Which password is the strongest?',
                options: [
                    { id: 'a', text: 'password123' },
                    { id: 'b', text: 'T7$P@55W0rd!kL9!zQ2', correct: true },
                    { id: 'c', text: 'the strongest password' }
                ]
            },
            {
                id: 's4',
                type: 'quiz',
                question: 'Why is password reuse dangerous?',
                options: [
                    { id: 'a', text: 'One password leak can unlock many accounts', correct: true },
                    { id: 'b', text: 'It makes logins faster' },
                    { id: 'c', text: 'Remembering a single password is easier' }
                ]
            }
        ]
    },
    {
        id: 2,
        title: 'Going phishing',
        description: 'Don\'t get baited!',
        status: 'locked',
        position: { x: 70, y: 300 },
        brief: 'The inbox is a dangerous place. Some messages might be traps. Let\'s learn how to spot them before they bite.',
        content: [
            {
                id: 's1',
                type: 'theory',
                title: 'What Is Phishing?',
                text: 'Phishing is an attack where the attacker pretends to be a trusted source to steal information like passwords, OTPs, or card details. The target is not the computer, its you!'
            },
            {
                id: 's2',
                type: 'theory',
                title: 'Common phishing channels',
                text: 'Phishing doesn\'t only happen via email. It can arrive through SMS (smishing), phone calls (vishing), social media DMs, or fake websites. It is important to stay vigilant.'
            },
            {
                id: 's3',
                type: 'theory',
                title: 'Red flags for phishing',
                text: 'Phishing emails and messages often have create a sense of urgency, contain spelling mistakes, have strange sender addresses, contain unexpected attachments, and have links that don\'t match the real website. Always be suspicious of messages which contain such red flags.'
            },
            {
                id: 's4',
                type: 'quiz',
                question: 'What is Phishing?',
                options: [
                    { id: 'a', text: 'Creating a weak password' },
                    { id: 'c', text: 'Impersonating a trusted source to steal information', correct: true },
                    { id: 'b', text: 'Trying all possible password combinations' }
                ]
            },
            {
                id: 's5',
                type: 'quiz',
                question: 'What do Phishing attacks mainly exploit?',
                options: [
                    { id: 'c', text: 'Human trust', correct: true },
                    { id: 'a', text: 'Weak passwords' },
                    { id: 'b', text: 'Outdated hardware' },
                ]
            },
            {
                id: 's6',
                type: 'quiz',
                question: 'An email says "Your account will be locked in 10 minutes. Click on this link to verify." What\'s the red flag here?',
                options: [
                    { id: 'a', text: 'Use of email' },
                    { id: 'b', text: 'Correct spelling' },
                    { id: 'c', text: 'Sense of urgency', correct: true }
                ]
            },
            {
                id: 's7',
                type: 'quiz',
                question: 'Which URL looks suspicious?',
                options: [
                    { id: 'a', text: 'https://mail.google.com' },
                    { id: 'c', text: 'https://google-login.security-check.com', correct: true },
                    { id: 'b', text: 'https://accounts.google.com' },
                ]
            }
        ]
    },
    {
        id: 3,
        title: 'Malware Mayhem',
        description: 'Pesky pest programs',
        status: 'locked',
        position: { x: 50, y: 450 },
        brief: 'Not all bugs are harmless. Some eat your data.',
        content: []
    }
];
