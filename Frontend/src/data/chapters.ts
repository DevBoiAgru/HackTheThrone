type ChapterStatus = 'completed' | 'failed' | 'locked' | 'available';
type TopicStatus = 'completed' | 'failed' | 'locked' | 'available';

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

export type Topic = {
    id: string;
    title: string;
    description: string;
    brief: string;
    status: TopicStatus;
    position: { x: number; y: number };
    content: Slide[];
}

export type Chapter={
    id : number
    title : string;
    quest_start : number;
    quest_end :number;
    description : string;
    status : ChapterStatus;
    content : Topic[];
}


    export const Chapters: Chapter[] = [
    {
        id: 1,
        title: "Digital Survival Instincts",
        quest_start :1,
        quest_end : 27,
        description:
        "Understand how to stay safe, aware, and in control in the digital world.",
        status: 'available',
        content: [
        {
            id: "t1",
            title: "What Digital Survival Actually Means",
            brief: "The internet is an environment, not just a tool.",
            description:
            "Digital survival instincts are learned habits for staying safe and in control online.",
            status: 'available',
            position: { x: 0, y: 50 },
            content: [
            {
                id: "t1s1",
                type: "theory",
                title: "Digital Survival",
                text:
                "The internet surrounds daily life like an environment. Digital survival instincts are learned habits that help you stay safe, protect identity, and think clearly instead of reacting emotionally. The goal is control, not quitting technology."
            },
            {
                id: "t1q1",
                type: "quiz",
                question: "What does digital survival instincts primarily refer to?",
                options: [
                { id: "a", text: "Advanced hacking techniques" },
                { id: "b", text: "Natural awareness to stay safe online", correct: true },
                { id: "c", text: "Programming skills" },
                { id: "d", text: "Social media popularity" }
                ]
            },
            {
                id: "t1q2",
                type: "quiz",
                question: "Why are digital survival instincts important today?",
                options: [
                { id: "a", text: "Because everyone uses the internet professionally" },
                { id: "b", text: "Because threats only affect companies" },
                { id: "c", text: "Because daily digital actions carry real risks", correct: true },
                { id: "d", text: "Because devices are cheaper" }
                ]
            }
            ]
        },

        {
            id: "t2",
            title: "Your Digital Identity Is You",
            brief: "Your identity exists in pieces online.",
            description:
            "Digital identity is made of accounts, data, and behavior patterns.",
            status: "locked",
            position: { x: -20, y: 180 },
            content: [
            {
                id: "t2s1",
                type: "theory",
                title: "Digital Identity",
                text:
                "Online identity is fragmented across email, phone numbers, passwords, browsing history, and behavior. When combined, these pieces form a powerful model that can be exploited if not protected."
            },
            {
                id: "t2q1",
                type: "quiz",
                question: "A digital identity is best described as:",
                options: [
                { id: "a", text: "A single username" },
                { id: "b", text: "Only social media profiles" },
                { id: "c", text: "A collection of data linked to a person", correct: true },
                { id: "d", text: "A government ID" }
                ]
            },
            {
                id: "t2q2",
                type: "quiz",
                question: "Why is personal data valuable to companies?",
                options: [
                { id: "a", text: "It increases bandwidth" },
                { id: "b", text: "It helps predict user behavior", correct: true },
                { id: "c", text: "It reduces software cost" },
                { id: "d", text: "It improves hardware" }
                ]
            }
            ]
        },

        {
            id: "t3",
            title: "Data Is the New Blood",
            brief: "Data predicts and shapes behavior.",
            description:
            "Free services often trade convenience for data.",
            status: "locked",
            position: { x: 20, y: 310 },
            content: [
            {
                id: "t3s1",
                type: "theory",
                title: "Data Economy",
                text:
                "Every click creates data. Companies use this data to predict, target, and influence behavior. The danger is invisible influence, not just collection."
            },
            {
                id: "t3q1",
                type: "quiz",
                question: "Why is a free online service rarely free?",
                options: [
                { id: "a", text: "Ads pay everything" },
                { id: "b", text: "Maintenance costs are zero" },
                { id: "c", text: "User data funds the service", correct: true },
                { id: "d", text: "Governments sponsor them" }
                ]
            },
            {
                id: "t3q2",
                type: "quiz",
                question: "Which data type is often underestimated but highly revealing?",
                options: [
                { id: "a", text: "Passwords" },
                { id: "b", text: "Metadata", correct: true },
                { id: "c", text: "Bank statements" },
                { id: "d", text: "Photos" }
                ]
            }
            ]
        },

        {
            id: "t4",
            title: "Threats in the Digital Jungle",
            brief: "Most attacks exploit trust and urgency.",
            description:
            "Threats often look harmless but target human behavior.",
            status: "locked",
            position: { x: -25, y: 440 },
            content: [
            {
                id: "t4s1",
                type: "theory",
                title: "Digital Threats",
                text:
                "Phishing, malware, and social engineering rely on fear, urgency, and trust. Attackers rarely hack systems; they convince users to open the door."
            },
            {
                id: "t4q1",
                type: "quiz",
                question: "Phishing attacks are mainly designed to:",
                options: [
                { id: "a", text: "Damage hardware" },
                { id: "b", text: "Steal personal information", correct: true },
                { id: "c", text: "Improve website ranking" },
                { id: "d", text: "Test network speed" }
                ]
            },
            {
                id: "t4q2",
                type: "quiz",
                question: "Social engineering attacks primarily target:",
                options: [
                { id: "a", text: "Servers" },
                { id: "b", text: "Databases" },
                { id: "c", text: "Human psychology", correct: true },
                { id: "d", text: "Firewalls" }
                ]
            }
            ]
        },

        {
            id: "t5",
            title: "Psychology Is the Weakest Firewall",
            brief: "Emotion is the attack vector.",
            description:
            "Attackers exploit fear, curiosity, and urgency.",
            status: "locked",
            position: { x: 25, y: 570 },
            content: [
            {
                id: "t5s1",
                type: "theory",
                title: "Human Factor",
                text:
                "Attackers exploit curiosity, fear, greed, and laziness. Algorithms do the same. Digital survival requires slowing down. Speed is the enemy."
            },
            {
                id: "t5q1",
                type: "quiz",
                question: "Which human trait is most commonly exploited in scams?",
                options: [
                { id: "a", text: "Intelligence" },
                { id: "b", text: "Curiosity and fear", correct: true },
                { id: "c", text: "Strength" },
                { id: "d", text: "Memory" }
                ]
            },
            {
                id: "t5q2",
                type: "quiz",
                question: "What is the safest reaction to suspicious content?",
                options: [
                { id: "a", text: "Click immediately" },
                { id: "b", text: "Ignore instinct" },
                { id: "c", text: "Pause and verify", correct: true },
                { id: "d", text: "Share with friends" }
                ]
            }
            ]
        },

        {
            id: "t6",
            title: "Passwords and Authentication",
            brief: "Weak habits cause most breaches.",
            description:
            "Strong passwords and 2FA reduce risk.",
            status: "locked",
            position: { x: -20, y: 700 },
            content: [
            {
                id: "t6s1",
                type: "theory",
                title: "Basic Defense",
                text:
                "Passwords protect access. Reusing passwords causes total collapse after one breach. Two-factor authentication adds a second barrier."
            },
            {
                id: "t6q1",
                type: "quiz",
                question: "Why is reusing passwords dangerous?",
                options: [
                { id: "a", text: "It slows login time" },
                { id: "b", text: "One breach can expose all accounts", correct: true },
                { id: "c", text: "It uses more storage" },
                { id: "d", text: "Browsers reject it" }
                ]
            },
            {
                id: "t6q2",
                type: "quiz",
                question: "Two-factor authentication improves security by:",
                options: [
                { id: "a", text: "Making passwords longer" },
                { id: "b", text: "Adding a second verification step", correct: true },
                { id: "c", text: "Removing passwords" },
                { id: "d", text: "Blocking all hackers" }
                ]
            }
            ]
        },

        {
            id: "t7",
            title: "Social Media and Oversharing",
            brief: "Attention is the product.",
            description:
            "Oversharing creates exploitable patterns.",
            status: "locked",
            position: { x: 20, y: 830 },
            content: [
            {
                id: "t7s1",
                type: "theory",
                title: "Social Platforms",
                text:
                "Social platforms maximize engagement, not safety. Oversharing helps scammers, strangers, and algorithms profile you."
            },
            {
                id: "t7q1",
                type: "quiz",
                question: "What makes oversharing dangerous?",
                options: [
                { id: "a", text: "It attracts spam" },
                { id: "b", text: "It creates exploitable patterns", correct: true },
                { id: "c", text: "It lowers engagement" },
                { id: "d", text: "It slows the app" }
                ]
            },
            {
                id: "t7q2",
                type: "quiz",
                question: "Which post is riskiest?",
                options: [
                { id: "a", text: "Sharing a meme" },
                { id: "b", text: "Posting a hobby" },
                { id: "c", text: "Posting live travel location", correct: true },
                { id: "d", text: "Sharing an opinion" }
                ]
            }
            ]
        },

        {
            id: "t8",
            title: "Misinformation and Thinking",
            brief: "Emotion spreads faster than truth.",
            description:
            "False content exploits fear and belief.",
            status: "locked",
            position: { x: -15, y: 960 },
            content: [
            {
                id: "t8s1",
                type: "theory",
                title: "Digital Thinking",
                text:
                "False information spreads based on emotion, not truth. Survival requires checking sources, comparing views, and recognizing manipulation."
            },
            {
                id: "t8q1",
                type: "quiz",
                question: "Why does misinformation spread easily?",
                options: [
                { id: "a", text: "It is always well-written" },
                { id: "b", text: "It triggers strong emotions", correct: true },
                { id: "c", text: "It uses better technology" },
                { id: "d", text: "It is government-backed" }
                ]
            }
            ]
        },

        {
            id: "t9",
            title: "Digital Footprints",
            brief: "The internet remembers.",
            description:
            "Online actions leave permanent traces.",
            status: "locked",
            position: { x: 15, y: 1090 },
            content: [
            {
                id: "t9s1",
                type: "theory",
                title: "Permanent Trails",
                text:
                "Every online action leaves traces that can be stored, copied, and resurfaced later. Post like future-you is watching."
            },
            {
                id: "t9q1",
                type: "quiz",
                question: "Why should digital footprints be considered permanent?",
                options: [
                { id: "a", text: "Screenshots expire" },
                { id: "b", text: "The internet forgets" },
                { id: "c", text: "Content can resurface later", correct: true },
                { id: "d", text: "Posts auto-delete" }
                ]
            }
            ]
        },

        {
            id: "t10",
            title: "Healthy Relationship with Technology",
            brief: "Survival includes mental health.",
            description:
            "Control technology instead of being controlled.",
            status: "locked",
            position: { x: 0, y: 1220 },
            content: [
            {
                id: "t10s1",
                type: "theory",
                title: "Digital Balance",
                text:
                "Digital survival includes controlling notifications, taking breaks, and using technology intentionally. Tech should enhance life, not replace it."
            },
            {
                id: "t10q1",
                type: "quiz",
                question: "Digital safety is mostly about:",
                options: [
                { id: "a", text: "Expensive software" },
                { id: "b", text: "Fear of technology" },
                { id: "c", text: "Awareness and habits", correct: true },
                { id: "d", text: "Advanced coding" }
                ]
            }
            ]
        }
        ]
    }
    ,
{
        id: 2,
        title: "Accounts, Passwords and Authentication",
        quest_start : 28,
        quest_end :48,
        description:
        "Understand what accounts really are, how authentication works, and where security actually fails.",
        status: "locked",
        content: [
        {
            id: "c2t1",
            title: "What an Account Really Is",
            brief: "An account is a contract, not just credentials.",
            description:
            "Accounts represent authority and identity, evaluated by confidence not certainty.",
            status: "available",
            position: { x: 0, y: 50 },
            content: [
            {
                id: "c2t1s1",
                type: "theory",
                title: "Accounts Explained",
                text:
                "An account is a contract between you and a system stating that actions performed through it are assumed to be yours. Systems evaluate confidence using identity claim, authentication proof, and authorization. They cannot judge intent, only evidence."
            },
            {
                id: "c2t1q1",
                type: "quiz",
                question: "What does an online account primarily represent?",
                options: [
                { id: "a", text: "A device" },
                { id: "b", text: "A person's digital identity on a service", correct: true },
                { id: "c", text: "A software license" },
                { id: "d", text: "A file storage area" }
                ]
            },
            {
                id: "c2t1q2",
                type: "quiz",
                question: "Authentication systems primarily aim to:",
                options: [
                { id: "a", text: "Identify users with certainty" },
                { id: "b", text: "Eliminate all attacks" },
                { id: "c", text: "Manage risk by increasing confidence", correct: true },
                { id: "d", text: "Track user behavior" }
                ]
            }
            ]
        },

        {
            id: "c2t2",
            title: "Passwords: Ancient and Flawed",
            brief: "Passwords survive because they are cheap and simple.",
            description:
            "Passwords are shared knowledge and fail at scale.",
            status: "locked",
            position: { x: -20, y: 180 },
            content: [
            {
                id: "c2t2s1",
                type: "theory",
                title: "Why Passwords Fail",
                text:
                "Passwords are guessable, reusable, phishable, and forgettable. Strength comes from search space, not visual complexity. Length and randomness matter more than symbols."
            },
            {
                id: "c2t2q1",
                type: "quiz",
                question: "Why do passwords still exist despite being insecure?",
                options: [
                { id: "a", text: "They are unbreakable" },
                { id: "b", text: "They are cheap, simple, and human-readable", correct: true },
                { id: "c", text: "They are the most secure method" },
                { id: "d", text: "They cannot be replaced" }
                ]
            },
            {
                id: "c2t2q2",
                type: "quiz",
                question: "What mainly determines password strength?",
                options: [
                { id: "a", text: "Use of symbols" },
                { id: "b", text: "Visual complexity" },
                { id: "c", text: "Search space size", correct: true },
                { id: "d", text: "Capital letters" }
                ]
            }
            ]
        },

        {
            id: "c2t3",
            title: "Password Storage",
            brief: "Systems never store real passwords.",
            description:
            "Hashes, salts, and slow algorithms protect stored credentials.",
            status: "locked",
            position: { x: 20, y: 310 },
            content: [
            {
                id: "c2t3s1",
                type: "theory",
                title: "Behind the Login",
                text:
                "Secure systems store password hashes, not plaintext. Hashing is one-way, slow by design, and salted to prevent precomputed attacks. Leaks usually expose hashes, not actual passwords."
            },
            {
                id: "c2t3q1",
                type: "quiz",
                question: "Why don't secure systems store actual passwords?",
                options: [
                { id: "a", text: "It takes too much space" },
                { id: "b", text: "Passwords change too often" },
                { id: "c", text: "Direct storage would expose all users if leaked", correct: true },
                { id: "d", text: "Passwords are hard to manage" }
                ]
            },
            {
                id: "c2t3q2",
                type: "quiz",
                question: "What is the role of a salt in hashing?",
                options: [
                { id: "a", text: "Make passwords memorable" },
                { id: "b", text: "Hide usernames" },
                { id: "c", text: "Prevent rainbow table attacks", correct: true },
                { id: "d", text: "Speed up hashing" }
                ]
            }
            ]
        },

        {
            id: "c2t4",
            title: "Authentication Factors",
            brief: "Proof matters more than passwords.",
            description:
            "Security improves when factors are independent.",
            status: "locked",
            position: { x: -25, y: 440 },
            content: [
            {
                id: "c2t4s1",
                type: "theory",
                title: "Three Proof Types",
                text:
                "Authentication relies on something you know, have, or are. True 2FA uses two different factor types. Hardware keys are strongest because they cannot be phished remotely."
            },
            {
                id: "c2t4q1",
                type: "quiz",
                question: "Which is an example of something you have?",
                options: [
                { id: "a", text: "Password" },
                { id: "b", text: "PIN" },
                { id: "c", text: "Fingerprint" },
                { id: "d", text: "Hardware security key", correct: true }
                ]
            },
            {
                id: "c2t4q2",
                type: "quiz",
                question: "Why is SMS-based 2FA considered weak?",
                options: [
                { id: "a", text: "Messages expire quickly" },
                { id: "b", text: "SMS is slow" },
                { id: "c", text: "SIM cards can be hijacked", correct: true },
                { id: "d", text: "Phones may not receive messages" }
                ]
            }
            ]
        },

        {
            id: "c2t5",
            title: "Authentication Apps",
            brief: "Time-based codes reduce exposure.",
            description:
            "TOTP codes expire quickly and work offline.",
            status: "locked",
            position: { x: 25, y: 570 },
            content: [
            {
                id: "c2t5s1",
                type: "theory",
                title: "Authenticator Apps",
                text:
                "Authenticator apps generate time-based one-time passwords using a shared secret and current time. Codes expire quickly, limiting usefulness if intercepted."
            },
            {
                id: "c2t5q1",
                type: "quiz",
                question: "How are TOTP codes generated?",
                options: [
                { id: "a", text: "From the user's password" },
                { id: "b", text: "From internet connectivity" },
                { id: "c", text: "From a shared secret and time", correct: true },
                { id: "d", text: "From phone number" }
                ]
            },
            {
                id: "c2t5q2",
                type: "quiz",
                question: "Why is device loss risky with authenticator apps?",
                options: [
                { id: "a", text: "Apps expire" },
                { id: "b", text: "Codes stop working" },
                { id: "c", text: "You may be locked out without backups", correct: true },
                { id: "d", text: "Passwords reset automatically" }
                ]
            }
            ]
        },

        {
            id: "c2t6",
            title: "Sessions and Tokens",
            brief: "Sessions prove authentication silently.",
            description:
            "Stolen tokens equal stolen identity.",
            status: "locked",
            position: { x: -20, y: 700 },
            content: [
            {
                id: "c2t6s1",
                type: "theory",
                title: "Session Security",
                text:
                "After login, session tokens prove authentication. If stolen, attackers can impersonate you without knowing your password until the session expires."
            },
            {
                id: "c2t6q1",
                type: "quiz",
                question: "Why is stealing a session cookie dangerous?",
                options: [
                { id: "a", text: "It reveals the password" },
                { id: "b", text: "It allows impersonation without credentials", correct: true },
                { id: "c", text: "It deletes the account" },
                { id: "d", text: "It infects the browser" }
                ]
            }
            ]
        },

        {
            id: "c2t7",
            title: "Account Recovery",
            brief: "Recovery paths define real security.",
            description:
            "Most takeovers abuse recovery systems.",
            status: "locked",
            position: { x: 20, y: 830 },
            content: [
            {
                id: "c2t7s1",
                type: "theory",
                title: "Weakest Link",
                text:
                "Account recovery often bypasses normal security. Security questions and outdated recovery emails allow attackers to take control quickly."
            },
            {
                id: "c2t7q1",
                type: "quiz",
                question: "Why is account recovery often the weakest link?",
                options: [
                { id: "a", text: "It is rarely used" },
                { id: "b", text: "It bypasses normal authentication", correct: true },
                { id: "c", text: "It uses old software" },
                { id: "d", text: "It requires internet access" }
                ]
            }
            ]
        },

        {
            id: "c2t8",
            title: "Zero Trust",
            brief: "Never trust, always verify.",
            description:
            "Authentication is continuous, not one-time.",
            status: "locked",
            position: { x: -15, y: 960 },
            content: [
            {
                id: "c2t8s1",
                type: "theory",
                title: "Modern Security",
                text:
                "Zero Trust assumes no environment is safe. Access is continuously evaluated based on context, behavior, and risk."
            },
            {
                id: "c2t8q1",
                type: "quiz",
                question: "What is the core idea behind Zero Trust?",
                options: [
                { id: "a", text: "Trust internal users" },
                { id: "b", text: "Block all access" },
                { id: "c", text: "Never assume trust; always verify", correct: true },
                { id: "d", text: "Remove authentication" }
                ]
            }
            ]
        }
        ]
    }
    ,
{
        id: 3,
        title: "Data and Privacy",
        quest_start : 49,
        quest_end : 69,
        description:
            "Understand how data is created, transformed, inferred, and used to shape behavior and power.",
        status: "locked",
        content: [
            {
            id: "c3t1",
            title: "Data as the Digital Building Block",
            brief: "Reality flattened into symbols.",
            description: "Data is valuable for prediction, not truth.",
            status: "available",
            position: { x: 0, y: 50 },
            content: [
                {
                id: "c3t1s1",
                type: "theory",
                title: "What Data Really Is",
                text:
                    "Data is reality converted into symbols machines can process. Systems value data for predictive usefulness, not human truth. Even incomplete or incorrect data can influence decisions."
                },
                {
                id: "c3t1q1",
                type: "quiz",
                question: "What is data at its most basic level?",
                options: [
                    { id: "a", text: "Objective truth" },
                    { id: "b", text: "Reality converted into symbols", correct: true },
                    { id: "c", text: "Verified human knowledge" },
                    { id: "d", text: "Ethical information" }
                ]
                },
                {
                id: "c3t1q2",
                type: "quiz",
                question: "Why do systems value imperfect data?",
                options: [
                    { id: "a", text: "Storage is cheap" },
                    { id: "b", text: "Humans can correct it" },
                    { id: "c", text: "Predictive usefulness matters more than accuracy", correct: true },
                    { id: "d", text: "Laws require retention" }
                ]
                }
            ]
            },

            {
            id: "c3t2",
            title: "The Data Lifecycle",
            brief: "Data moves and mutates.",
            description: "Meaning changes after collection.",
            status: "locked",
            position: { x: -20, y: 180 },
            content: [
                {
                id: "c3t2s1",
                type: "theory",
                title: "From You to the Model",
                text:
                    "Data flows through collection, aggregation, normalization, enrichment, modeling, deployment, and retention. After enrichment, data becomes something about you that you never approved."
                },
                {
                id: "c3t2q1",
                type: "quiz",
                question: "What is the first stage in the data lifecycle?",
                options: [
                    { id: "a", text: "Analysis" },
                    { id: "b", text: "Storage" },
                    { id: "c", text: "Collection", correct: true },
                    { id: "d", text: "Modeling" }
                ]
                },
                {
                id: "c3t2q2",
                type: "quiz",
                question: "Why does data persist after its original purpose?",
                options: [
                    { id: "a", text: "Deletion is impossible" },
                    { id: "b", text: "Storage is free" },
                    { id: "c", text: "Future predictive value is unknown", correct: true },
                    { id: "d", text: "Law requires it" }
                ]
                }
            ]
            },

            {
            id: "c3t3",
            title: "Types of Data",
            brief: "Some data you never see.",
            description: "Inferred data is the most dangerous.",
            status: "locked",
            position: { x: 20, y: 310 },
            content: [
                {
                id: "c3t3s1",
                type: "theory",
                title: "Direct, Behavioral, Inferred",
                text:
                    "Direct data is what you provide. Behavioral data is how you act. Inferred data is what systems predict about you. Inferred data is invisible, rarely correctable, and often treated as fact."
                },
                {
                id: "c3t3q1",
                type: "quiz",
                question: "Which data type is created without you providing it?",
                options: [
                    { id: "a", text: "Account credentials" },
                    { id: "b", text: "Uploaded documents" },
                    { id: "c", text: "Derived or inferred data", correct: true },
                    { id: "d", text: "Identification data" }
                ]
                },
                {
                id: "c3t3q2",
                type: "quiz",
                question: "Why is behavioral data more valuable than declarations?",
                options: [
                    { id: "a", text: "It is encrypted" },
                    { id: "b", text: "People lie but behavior leaks truth", correct: true },
                    { id: "c", text: "It is cheaper to collect" },
                    { id: "d", text: "It expires quickly" }
                ]
                }
            ]
            },

            {
            id: "c3t4",
            title: "Metadata",
            brief: "Context reveals more than content.",
            description: "Patterns expose relationships.",
            status: "locked",
            position: { x: -25, y: 440 },
            content: [
                {
                id: "c3t4s1",
                type: "theory",
                title: "Silent Informant",
                text:
                    "Metadata describes when, where, how, and with whom. Communication graphs reveal social structure and routines even without content."
                },
                {
                id: "c3t4q1",
                type: "quiz",
                question: "Why is metadata highly sensitive?",
                options: [
                    { id: "a", text: "It is hard to encrypt" },
                    { id: "b", text: "It reveals patterns and relationships", correct: true },
                    { id: "c", text: "It stores passwords" },
                    { id: "d", text: "It is public" }
                ]
                }
            ]
            },

            {
            id: "c3t5",
            title: "Tracking Technologies",
            brief: "Identity without names.",
            description: "Probability beats certainty.",
            status: "locked",
            position: { x: 25, y: 570 },
            content: [
                {
                id: "c3t5s1",
                type: "theory",
                title: "Beyond Cookies",
                text:
                    "Modern tracking uses fingerprinting, cross-device correlation, and network signals. Identity reappears when datasets intersect."
                },
                {
                id: "c3t5q1",
                type: "quiz",
                question: "Why is browser fingerprinting hard to block?",
                options: [
                    { id: "a", text: "It uses pop-ups" },
                    { id: "b", text: "It relies on unique device characteristics", correct: true },
                    { id: "c", text: "It requires permission" },
                    { id: "d", text: "It slows browsers" }
                ]
                }
            ]
            },

            {
            id: "c3t6",
            title: "Consent Failure",
            brief: "Agree or leave is coercion.",
            description: "Consent protects platforms, not users.",
            status: "locked",
            position: { x: -20, y: 700 },
            content: [
                {
                id: "c3t6s1",
                type: "theory",
                title: "Broken Consent",
                text:
                    "Consent systems overwhelm users with legal language and no alternatives. Clicking OK shifts liability without empowering users."
                },
                {
                id: "c3t6q1",
                type: "quiz",
                question: "Why is digital consent often a structural failure?",
                options: [
                    { id: "a", text: "Users ignore privacy" },
                    { id: "b", text: "Interfaces push agreement without comprehension", correct: true },
                    { id: "c", text: "Laws are perfect" },
                    { id: "d", text: "Users refuse to read" }
                ]
                }
            ]
            },

            {
            id: "c3t7",
            title: "Contextual Privacy",
            brief: "Privacy depends on situation.",
            description: "Context collapse causes harm.",
            status: "locked",
            position: { x: 20, y: 830 },
            content: [
                {
                id: "c3t7s1",
                type: "theory",
                title: "Context Matters",
                text:
                    "Privacy is contextual. Digital systems collapse context by reusing data across purposes, causing unintended exposure."
                },
                {
                id: "c3t7q1",
                type: "quiz",
                question: "What does contextual privacy mean?",
                options: [
                    { id: "a", text: "All data must be private" },
                    { id: "b", text: "Privacy depends on purpose and audience", correct: true },
                    { id: "c", text: "Privacy is identical everywhere" },
                    { id: "d", text: "Delete accounts to fix it" }
                ]
                }
            ]
            },

            {
            id: "c3t8",
            title: "Data Retention",
            brief: "Time increases risk.",
            description: "Old data creates new harm.",
            status: "locked",
            position: { x: -15, y: 960 },
            content: [
                {
                id: "c3t8s1",
                type: "theory",
                title: "Time as an Adversary",
                text:
                    "Stored data outlives purpose. What was harmless yesterday can be damaging tomorrow. Perfect security does not justify permanent storage."
                },
                {
                id: "c3t8q1",
                type: "quiz",
                question: "Why is long-term data retention risky?",
                options: [
                    { id: "a", text: "Older data is encrypted" },
                    { id: "b", text: "Data accumulates and increases attack surface", correct: true },
                    { id: "c", text: "It improves accuracy" },
                    { id: "d", text: "It speeds devices" }
                ]
                }
            ]
            },

            {
            id: "c3t9",
            title: "Privacy-Preserving Technologies",
            brief: "Mitigation, not salvation.",
            description: "Power imbalance remains.",
            status: "locked",
            position: { x: 15, y: 1090 },
            content: [
                {
                id: "c3t9s1",
                type: "theory",
                title: "Advanced Defenses",
                text:
                    "Differential privacy, federated learning, and encryption reduce harm but do not rebalance power. Privacy erosion is a governance problem."
                },
                {
                id: "c3t9q1",
                type: "quiz",
                question: "What is a limitation of privacy-preserving technologies?",
                options: [
                    { id: "a", text: "They are free" },
                    { id: "b", text: "They eliminate all risk" },
                    { id: "c", text: "They can reduce utility or be complex", correct: true },
                    { id: "d", text: "They remove passwords" }
                ]
                }
            ]
            }
        ]
        }
        ,
{
        id: 4,
        title: "Malware and Digital Threats",
        quest_start: 70,
        quest_end : 91,
        description:
            "Understand how digital threats work, how malware operates, and how trust is exploited at scale.",
        status: "locked",
        content: [
            {
            id: "c4t1",
            title: "What a Digital Threat Really Is",
            brief: "Threats compromise trust, not just systems.",
            description: "Control matters more than destruction.",
            status: "available",
            position: { x: 0, y: 50 },
            content: [
                {
                id: "c4t1s1",
                type: "theory",
                title: "Digital Threats Explained",
                text:
                    "A digital threat is any intentional use of technology to compromise confidentiality, integrity, availability, or control. If a system acts as if an attacker is you, it is compromised even if nothing is visibly broken."
                },
                {
                id: "c4t1q1",
                type: "quiz",
                question: "What defines a digital threat?",
                options: [
                    { id: "a", text: "Any virus that deletes files" },
                    { id: "b", text: "Anything that can harm systems, data, or users", correct: true },
                    { id: "c", text: "Only self-spreading malware" },
                    { id: "d", text: "Only phishing emails" }
                ]
                },
                {
                id: "c4t1q2",
                type: "quiz",
                question: "Why do digital threats remain relevant even on patched systems?",
                options: [
                    { id: "a", text: "Attackers are lazy" },
                    { id: "b", text: "They exploit unknown flaws and human behavior", correct: true },
                    { id: "c", text: "Antivirus is perfect" },
                    { id: "d", text: "Systems are slow" }
                ]
                }
            ]
            },

            {
            id: "c4t2",
            title: "The Malware Lifecycle",
            brief: "Malware is a process, not an event.",
            description: "Profit drives persistence.",
            status: "locked",
            position: { x: -20, y: 180 },
            content: [
                {
                id: "c4t2s1",
                type: "theory",
                title: "From Infection to Profit",
                text:
                    "Malware follows a lifecycle: delivery, execution, persistence, privilege escalation, command and control, payload execution, and monetization. The goal is sustainable access, not chaos."
                },
                {
                id: "c4t2q1",
                type: "quiz",
                question: "What is the first stage of the malware lifecycle?",
                options: [
                    { id: "a", text: "Profit extraction" },
                    { id: "b", text: "Infection or entry", correct: true },
                    { id: "c", text: "Exploitation" },
                    { id: "d", text: "Detection" }
                ]
                },
                {
                id: "c4t2q2",
                type: "quiz",
                question: "What is the main goal of the payload stage?",
                options: [
                    { id: "a", text: "Spread malware" },
                    { id: "b", text: "Execute theft, encryption, or spying", correct: true },
                    { id: "c", text: "Clean up traces" },
                    { id: "d", text: "Alert the user" }
                ]
                }
            ]
            },

            {
            id: "c4t3",
            title: "Attack Vectors",
            brief: "Users open the doors.",
            description: "Social engineering dominates.",
            status: "locked",
            position: { x: 20, y: 310 },
            content: [
                {
                id: "c4t3s1",
                type: "theory",
                title: "How Malware Gets In",
                text:
                    "Malware enters through email attachments, malicious links, fake updates, compromised sites, ads, and supply chains. Humans are the primary entry point."
                },
                {
                id: "c4t3q1",
                type: "quiz",
                question: "Which is a common malware attack vector?",
                options: [
                    { id: "a", text: "Email attachments and links", correct: true },
                    { id: "b", text: "Air conditioning" },
                    { id: "c", text: "Monitor brightness" },
                    { id: "d", text: "USB power cables" }
                ]
                },
                {
                id: "c4t3q2",
                type: "quiz",
                question: "Why is social engineering so effective?",
                options: [
                    { id: "a", text: "It encrypts malware" },
                    { id: "b", text: "It manipulates human behavior to bypass controls", correct: true },
                    { id: "c", text: "It targets hardware" },
                    { id: "d", text: "It slows malware spread" }
                ]
                }
            ]
            },

            {
            id: "c4t4",
            title: "Exploits and Vulnerabilities",
            brief: "Mistakes become weapons.",
            description: "Unpatched systems are time bombs.",
            status: "locked",
            position: { x: -25, y: 440 },
            content: [
                {
                id: "c4t4s1",
                type: "theory",
                title: "Breaking In",
                text:
                    "Vulnerabilities are flaws in software or configuration. Exploits weaponize them. Once inside, malware escalates privileges and moves laterally."
                },
                {
                id: "c4t4q1",
                type: "quiz",
                question: "What is an exploit?",
                options: [
                    { id: "a", text: "A security patch" },
                    { id: "b", text: "Code used to take advantage of a vulnerability", correct: true },
                    { id: "c", text: "A payload" },
                    { id: "d", text: "A scanner" }
                ]
                },
                {
                id: "c4t4q2",
                type: "quiz",
                question: "Why are zero-day vulnerabilities dangerous?",
                options: [
                    { id: "a", text: "They are harmless" },
                    { id: "b", text: "They are unknown and unpatched", correct: true },
                    { id: "c", text: "They only affect old systems" },
                    { id: "d", text: "They are encrypted" }
                ]
                }
            ]
            },

            {
            id: "c4t5",
            title: "Command and Control",
            brief: "Attackers pull the strings.",
            description: "Control persists remotely.",
            status: "locked",
            position: { x: 25, y: 570 },
            content: [
                {
                id: "c4t5s1",
                type: "theory",
                title: "C2 Channels",
                text:
                    "C2 servers allow attackers to control infected machines, update malware, and steal data. Modern C2 hides inside normal encrypted traffic."
                },
                {
                id: "c4t5q1",
                type: "quiz",
                question: "Why is disrupting C2 important?",
                options: [
                    { id: "a", text: "It deletes files" },
                    { id: "b", text: "It cuts off attacker control", correct: true },
                    { id: "c", text: "It prevents phishing" },
                    { id: "d", text: "It speeds networks" }
                ]
                }
            ]
            },

            {
            id: "c4t6",
            title: "Botnets and Scale",
            brief: "Small power multiplied.",
            description: "Scale makes attacks devastating.",
            status: "locked",
            position: { x: -20, y: 700 },
            content: [
                {
                id: "c4t6s1",
                type: "theory",
                title: "Distributed Abuse",
                text:
                    "Botnets are networks of compromised devices used for DDoS, spam, credential stuffing, and mining. IoT devices are prime targets."
                },
                {
                id: "c4t6q1",
                type: "quiz",
                question: "What is a botnet?",
                options: [
                    { id: "a", text: "A single malware instance" },
                    { id: "b", text: "A network of compromised devices", correct: true },
                    { id: "c", text: "A firewall" },
                    { id: "d", text: "An antivirus tool" }
                ]
                }
            ]
            },

            {
            id: "c4t7",
            title: "Supply Chain Attacks",
            brief: "Trust is the weapon.",
            description: "You install the malware yourself.",
            status: "locked",
            position: { x: 20, y: 830 },
            content: [
                {
                id: "c4t7s1",
                type: "theory",
                title: "Upstream Compromise",
                text:
                    "Supply chain attacks compromise trusted vendors or updates. Defense models fail because the malware arrives through legitimate channels."
                },
                {
                id: "c4t7q1",
                type: "quiz",
                question: "Why are supply chain attacks dangerous?",
                options: [
                    { id: "a", text: "They are easy to detect" },
                    { id: "b", text: "They exploit trusted software and spread widely", correct: true },
                    { id: "c", text: "They affect one user" },
                    { id: "d", text: "They require manual execution" }
                ]
                }
            ]
            },

            {
            id: "c4t8",
            title: "Detection Challenges",
            brief: "Malware hides well.",
            description: "No single tool is enough.",
            status: "locked",
            position: { x: -15, y: 960 },
            content: [
                {
                id: "c4t8s1",
                type: "theory",
                title: "Why Detection Fails",
                text:
                    "Modern malware uses polymorphism, encryption, delayed execution, and system tools to evade detection. Defense must be layered."
                },
                {
                id: "c4t8q1",
                type: "quiz",
                question: "What is polymorphic malware?",
                options: [
                    { id: "a", text: "Self-deleting malware" },
                    { id: "b", text: "Malware that changes code to evade detection", correct: true },
                    { id: "c", text: "IoT-only malware" },
                    { id: "d", text: "Open-source malware" }
                ]
                }
            ]
            },

            {
            id: "c4t9",
            title: "Human Cost",
            brief: "The damage is personal.",
            description: "Psychology is the final target.",
            status: "locked",
            position: { x: 15, y: 1090 },
            content: [
                {
                id: "c4t9s1",
                type: "theory",
                title: "Beyond Systems",
                text:
                    "Malware causes financial loss, stress, shame, and loss of trust. Attackers exploit emotional responses deliberately."
                },
                {
                id: "c4t9q1",
                type: "quiz",
                question: "Why is awareness training critical?",
                options: [
                    { id: "a", text: "It replaces antivirus" },
                    { id: "b", text: "It reduces success of phishing and manipulation", correct: true },
                    { id: "c", text: "It removes malware" },
                    { id: "d", text: "It speeds networks" }
                ]
                }
            ]
            }
        ]
}
,
{
        id: 5,
        title: "Safe Daily Digital Habits",
        quest_start : 92,
        quest_end :114,
        description:
            "Learn how consistent daily behavior reduces digital risk more effectively than tools alone.",
        status: "locked",
        content: [
            {
            id: "c5t1",
            title: "Why Daily Habits Matter More Than Tools",
            brief: "Habits protect decisions, tools protect systems.",
            description: "Attackers exploit fatigue, speed, and distraction.",
            status: "available",
            position: { x: 0, y: 50 },
            content: [
                {
                id: "c5t1s1",
                type: "theory",
                title: "Habits Before Tools",
                text:
                    "Most digital failures occur due to inconsistent habits, not missing tools. Habits slow down decisions when attackers rely on urgency, fatigue, and distraction."
                },
                {
                id: "c5t1q1",
                type: "quiz",
                question: "Why are daily digital habits often more effective than tools alone?",
                options: [
                    { id: "a", text: "Tools remove the need for judgment" },
                    { id: "b", text: "Habits reduce exposure before tools act", correct: true },
                    { id: "c", text: "Tools never fail" },
                    { id: "d", text: "Habits replace encryption" }
                ]
                },
                {
                id: "c5t1q2",
                type: "quiz",
                question: "Why do attackers prefer habit-based weaknesses?",
                options: [
                    { id: "a", text: "They are harder to exploit" },
                    { id: "b", text: "Humans are predictable under pressure", correct: true },
                    { id: "c", text: "Tools block all attacks" },
                    { id: "d", text: "Habits are encrypted" }
                ]
                }
            ]
            },

            {
            id: "c5t2",
            title: "Email and Messaging Discipline",
            brief: "Familiarity lowers caution.",
            description: "Urgency and trust are exploited.",
            status: "locked",
            position: { x: -20, y: 180 },
            content: [
                {
                id: "c5t2s1",
                type: "theory",
                title: "Primary Attack Surface",
                text:
                    "Email and messaging platforms blend urgency, authority, and familiarity. Verifying requests through a second channel reduces phishing success."
                },
                {
                id: "c5t2q1",
                type: "quiz",
                question: "Why is email still a primary attack vector?",
                options: [
                    { id: "a", text: "It is encrypted" },
                    { id: "b", text: "It blends urgency, trust, and familiarity", correct: true },
                    { id: "c", text: "It is slow" },
                    { id: "d", text: "It blocks malware" }
                ]
                },
                {
                id: "c5t2q2",
                type: "quiz",
                question: "What habit reduces phishing success the most?",
                options: [
                    { id: "a", text: "Clicking quickly" },
                    { id: "b", text: "Verifying via a second channel", correct: true },
                    { id: "c", text: "Saving passwords in email" },
                    { id: "d", text: "Ignoring alerts" }
                ]
                }
            ]
            },

            {
            id: "c5t3",
            title: "Password and Login Behavior",
            brief: "Security is maintenance, not setup.",
            description: "User behavior defines strength.",
            status: "locked",
            position: { x: 20, y: 310 },
            content: [
                {
                id: "c5t3s1",
                type: "theory",
                title: "Daily Authentication Habits",
                text:
                    "Strong systems fail if users reuse passwords, ignore alerts, or stay logged in on shared devices. Login prompts are security checkpoints."
                },
                {
                id: "c5t3q1",
                type: "quiz",
                question: "Which habit most reduces account compromise risk?",
                options: [
                    { id: "a", text: "Reusing strong passwords" },
                    { id: "b", text: "Unique passwords per account", correct: true },
                    { id: "c", text: "Daily password changes" },
                    { id: "d", text: "Writing passwords down" }
                ]
                },
                {
                id: "c5t3q2",
                type: "quiz",
                question: "Why should login alerts never be ignored?",
                options: [
                    { id: "a", text: "They are always false" },
                    { id: "b", text: "They may signal early compromise", correct: true },
                    { id: "c", text: "They slow systems" },
                    { id: "d", text: "They increase spam" }
                ]
                }
            ]
            },

            {
            id: "c5t4",
            title: "Device Hygiene",
            brief: "Treat devices like homes.",
            description: "Neglect accumulates risk.",
            status: "locked",
            position: { x: -25, y: 440 },
            content: [
                {
                id: "c5t4s1",
                type: "theory",
                title: "Daily Device Care",
                text:
                    "Lock screens, remove unused apps, install updates, and avoid pirated software. Updates fix known weaknesses, not features."
                },
                {
                id: "c5t4q1",
                type: "quiz",
                question: "Why are unused apps a risk?",
                options: [
                    { id: "a", text: "They consume storage" },
                    { id: "b", text: "They may have unpatched vulnerabilities", correct: true },
                    { id: "c", text: "They slow typing" },
                    { id: "d", text: "They encrypt files" }
                ]
                }
            ]
            },

            {
            id: "c5t5",
            title: "Network Awareness",
            brief: "Public networks reduce control.",
            description: "Visibility is limited.",
            status: "locked",
            position: { x: 25, y: 570 },
            content: [
                {
                id: "c5t5s1",
                type: "theory",
                title: "Network Habits",
                text:
                    "Public Wi-Fi can intercept traffic. Avoid sensitive logins, prefer mobile data, verify HTTPS, and disable auto-connect."
                },
                {
                id: "c5t5q1",
                type: "quiz",
                question: "Why is public Wi-Fi risky?",
                options: [
                    { id: "a", text: "It is slow" },
                    { id: "b", text: "Traffic can be intercepted or manipulated", correct: true },
                    { id: "c", text: "It deletes cookies" },
                    { id: "d", text: "It blocks encryption" }
                ]
                }
            ]
            },

            {
            id: "c5t6",
            title: "Backups as Habit",
            brief: "Insurance against disaster.",
            description: "Preparation beats reaction.",
            status: "locked",
            position: { x: -20, y: 700 },
            content: [
                {
                id: "c5t6s1",
                type: "theory",
                title: "Backup Discipline",
                text:
                    "Regular automated backups with multiple copies turn ransomware and failure into inconvenience."
                },
                {
                id: "c5t6q1",
                type: "quiz",
                question: "Why do backups reduce ransomware impact?",
                options: [
                    { id: "a", text: "They attract attackers" },
                    { id: "b", text: "They eliminate ransom leverage", correct: true },
                    { id: "c", text: "They spread malware" },
                    { id: "d", text: "They slow systems" }
                ]
                }
            ]
            },

            {
            id: "c5t7",
            title: "Browsing and Content Habits",
            brief: "Your browser is the front door.",
            description: "Impulsivity increases risk.",
            status: "locked",
            position: { x: 20, y: 830 },
            content: [
                {
                id: "c5t7s1",
                type: "theory",
                title: "Safe Consumption",
                text:
                    "Check domains, avoid suspicious pop-ups, limit extensions, and evaluate sources. Emotional spikes reduce awareness."
                },
                {
                id: "c5t7q1",
                type: "quiz",
                question: "Why are pirated or free-content sites risky?",
                options: [
                    { id: "a", text: "They are illegal only" },
                    { id: "b", text: "They often bundle malware or malicious ads", correct: true },
                    { id: "c", text: "They lack encryption" },
                    { id: "d", text: "They load slowly" }
                ]
                }
            ]
            },

            {
            id: "c5t8",
            title: "Physical Environment Awareness",
            brief: "Physical access bypasses defenses.",
            description: "Context matters.",
            status: "locked",
            position: { x: -15, y: 960 },
            content: [
                {
                id: "c5t8s1",
                type: "theory",
                title: "Physical Risk",
                text:
                    "Shoulder surfing, unattended devices, and unknown USBs bypass digital controls. Lock devices and secure them physically."
                },
                {
                id: "c5t8q1",
                type: "quiz",
                question: "What is shoulder surfing?",
                options: [
                    { id: "a", text: "Network attack" },
                    { id: "b", text: "Observing screens or keyboards", correct: true },
                    { id: "c", text: "Phishing method" },
                    { id: "d", text: "Malware technique" }
                ]
                }
            ]
            },

            {
            id: "c5t9",
            title: "Account Monitoring",
            brief: "Early signs limit damage.",
            description: "Silence is not safety.",
            status: "locked",
            position: { x: 15, y: 1090 },
            content: [
                {
                id: "c5t9s1",
                type: "theory",
                title: "Watch the Signals",
                text:
                    "Unusual emails, password reset alerts, and login warnings often precede major compromise. Speed matters."
                },
                {
                id: "c5t9q1",
                type: "quiz",
                question: "Why is account monitoring critical?",
                options: [
                    { id: "a", text: "Accounts are static" },
                    { id: "b", text: "Early signs appear before major damage", correct: true },
                    { id: "c", text: "Alerts are useless" },
                    { id: "d", text: "It replaces passwords" }
                ]
                }
            ]
            },

            {
            id: "c5t10",
            title: "Long-Term Digital Health",
            brief: "Habits compound over time.",
            description: "Security should feel boring.",
            status: "locked",
            position: { x: 0, y: 1220 },
            content: [
                {
                id: "c5t10s1",
                type: "theory",
                title: "Quiet Discipline",
                text:
                    "Daily habits reduce attack surface, build intuition, and lower cognitive load. Security succeeds when it becomes routine."
                },
                {
                id: "c5t10q1",
                type: "quiz",
                question: "What is the ultimate goal of safe daily digital habits?",
                options: [
                    { id: "a", text: "Zero risk" },
                    { id: "b", text: "Resilience and reduced impact", correct: true },
                    { id: "c", text: "Tool dependence" },
                    { id: "d", text: "Complexity" }
                ]
                }
            ]
            }
        ]
        }
        ,
{
        id: 6,
        title: "Social Media and Online Behavior",
        quest_start :115,
        quest_end :133,
        description:
            "Understand how social platforms shape behavior, perception, identity, and risk.",
        status: "locked",
        content: [
            {
            id: "c6t1",
            title: "Social Media Is an Environment",
            brief: "Platforms condition behavior, not just content.",
            description: "Attention, emotion, and predictability are monetized.",
            status: "available",
            position: { x: 0, y: 50 },
            content: [
                {
                id: "c6t1s1",
                type: "theory",
                title: "Environment, Not a Tool",
                text:
                    "Social media platforms shape behavior continuously. Even passive exposure influences mood, beliefs, and reactions. Treating them as neutral tools ignores their conditioning effects."
                },
                {
                id: "c6t1q1",
                type: "quiz",
                question: "Why is social media better described as an environment than a tool?",
                options: [
                    { id: "a", text: "It performs one function" },
                    { id: "b", text: "It continuously shapes behavior and attention", correct: true },
                    { id: "c", text: "It stores files" },
                    { id: "d", text: "It is optional software" }
                ]
                },
                {
                id: "c6t1q2",
                type: "quiz",
                question: "Why is passive scrolling still influential?",
                options: [
                    { id: "a", text: "Content is random" },
                    { id: "b", text: "Exposure affects perception without interaction", correct: true },
                    { id: "c", text: "It improves memory" },
                    { id: "d", text: "It increases security" }
                ]
                }
            ]
            },

            {
            id: "c6t2",
            title: "Algorithmic Mediation of Reality",
            brief: "Your feed is a prediction engine.",
            description: "Engagement, not truth, is optimized.",
            status: "locked",
            position: { x: -20, y: 180 },
            content: [
                {
                id: "c6t2s1",
                type: "theory",
                title: "Filtered Reality",
                text:
                    "Algorithms prioritize content likely to keep you engaged. Over time, this narrows exposure, distorts perceived consensus, and creates echo chambers."
                },
                {
                id: "c6t2q1",
                type: "quiz",
                question: "What does algorithmic mediation mean?",
                options: [
                    { id: "a", text: "Humans select all content" },
                    { id: "b", text: "Algorithms filter and prioritize content", correct: true },
                    { id: "c", text: "Feeds are chronological" },
                    { id: "d", text: "Ads are hidden" }
                ]
                },
                {
                id: "c6t2q2",
                type: "quiz",
                question: "What survival instinct helps counter algorithmic feeds?",
                options: [
                    { id: "a", text: "Trust the feed" },
                    { id: "b", text: "Diversify information sources", correct: true },
                    { id: "c", text: "Scroll longer" },
                    { id: "d", text: "Disable updates" }
                ]
                }
            ]
            },

            {
            id: "c6t3",
            title: "Quantified Social Status",
            brief: "Numbers distort value.",
            description: "Metrics trigger comparison and insecurity.",
            status: "locked",
            position: { x: 20, y: 310 },
            content: [
                {
                id: "c6t3s1",
                type: "theory",
                title: "Metrics and Identity",
                text:
                    "Likes, shares, and followers act as social rewards. Visibility feels like value, even when it is not, leading to exaggeration and comparison."
                },
                {
                id: "c6t3q1",
                type: "quiz",
                question: "What is quantified social status?",
                options: [
                    { id: "a", text: "Income tracking" },
                    { id: "b", text: "Metrics like likes and followers", correct: true },
                    { id: "c", text: "Account verification" },
                    { id: "d", text: "Encrypted messaging" }
                ]
                },
                {
                id: "c6t3q2",
                type: "quiz",
                question: "What is a healthier interpretation of social metrics?",
                options: [
                    { id: "a", text: "Objective personal worth" },
                    { id: "b", text: "Signals of platform engagement", correct: true },
                    { id: "c", text: "Long-term value" },
                    { id: "d", text: "Security indicators" }
                ]
                }
            ]
            },

            {
            id: "c6t4",
            title: "Online Disinhibition",
            brief: "Distance reduces restraint.",
            description: "Oversharing and aggression increase.",
            status: "locked",
            position: { x: -25, y: 440 },
            content: [
                {
                id: "c6t4s1",
                type: "theory",
                title: "Disinhibition Effect",
                text:
                    "Anonymity and lack of immediate consequences cause people to behave more extremely online. Pausing before posting counters this."
                },
                {
                id: "c6t4q1",
                type: "quiz",
                question: "What is the online disinhibition effect?",
                options: [
                    { id: "a", text: "Faster typing" },
                    { id: "b", text: "Reduced restraint online", correct: true },
                    { id: "c", text: "Better communication" },
                    { id: "d", text: "Increased privacy" }
                ]
                }
            ]
            },

            {
            id: "c6t5",
            title: "Social Engineering via Platforms",
            brief: "Trust becomes infrastructure.",
            description: "Manipulation scales socially.",
            status: "locked",
            position: { x: 25, y: 570 },
            content: [
                {
                id: "c6t5s1",
                type: "theory",
                title: "Platform-Assisted Manipulation",
                text:
                    "Attackers exploit social graphs, familiarity, and urgency. Every interaction trains systems to influence you more effectively."
                },
                {
                id: "c6t5q1",
                type: "quiz",
                question: "Why are social platforms ideal for social engineering?",
                options: [
                    { id: "a", text: "They block malware" },
                    { id: "b", text: "They expose trust cues and social graphs", correct: true },
                    { id: "c", text: "They encrypt messages" },
                    { id: "d", text: "They limit visibility" }
                ]
                }
            ]
            },

            {
            id: "c6t6",
            title: "Conscious Consumption",
            brief: "Silence is feedback.",
            description: "You train your feed.",
            status: "locked",
            position: { x: -20, y: 700 },
            content: [
                {
                id: "c6t6s1",
                type: "theory",
                title: "Intentional Engagement",
                text:
                    "Avoid rage-clicking, mute instead of engaging, set time limits, and delay posting during emotional spikes."
                },
                {
                id: "c6t6q1",
                type: "quiz",
                question: "What does conscious consumption mean?",
                options: [
                    { id: "a", text: "Avoid all platforms" },
                    { id: "b", text: "Choose content intentionally", correct: true },
                    { id: "c", text: "Consume more content" },
                    { id: "d", text: "Trust algorithms" }
                ]
                }
            ]
            },

            {
            id: "c6t7",
            title: "Identity Protection",
            brief: "Online identity persists.",
            description: "Context changes, data remains.",
            status: "locked",
            position: { x: 20, y: 830 },
            content: [
                {
                id: "c6t7s1",
                type: "theory",
                title: "Protecting the Self",
                text:
                    "Avoid real-time location sharing, protect friends' privacy, and separate public and private identities."
                },
                {
                id: "c6t7q1",
                type: "quiz",
                question: "Why is oversharing a long-term risk?",
                options: [
                    { id: "a", text: "It uses storage" },
                    { id: "b", text: "Data persists and can be recontextualized", correct: true },
                    { id: "c", text: "It slows feeds" },
                    { id: "d", text: "It increases engagement" }
                ]
                }
            ]
            },

            {
            id: "c6t8",
            title: "Intentional Use",
            brief: "Stop dancing on command.",
            description: "Retain agency over behavior.",
            status: "locked",
            position: { x: -15, y: 960 },
            content: [
                {
                id: "c6t8s1",
                type: "theory",
                title: "Long-Term Strategy",
                text:
                    "Intentional use means aligning platform behavior with personal goals. Habits outlast features and policies."
                },
                {
                id: "c6t8q1",
                type: "quiz",
                question: "What is the ultimate goal of intentional social media use?",
                options: [
                    { id: "a", text: "Maximum visibility" },
                    { id: "b", text: "Retaining agency over attention and identity", correct: true },
                    { id: "c", text: "More followers" },
                    { id: "d", text: "Algorithmic approval" }
                ]
                }
            ]
            }
        ]
        }
        ,
{
  id: 7,
  title: "Mobile Security",
  quest_start:134,
  quest_end:151,
  description:
    "Understand why phones are high-risk identity hubs and how to control mobile threats through architecture awareness and daily habits.",
  status: "locked",
  content: [
    {
      id: "c7t1",
      title: "Why Mobile Security Is Uniquely Dangerous",
      brief: "Your phone is a passport with a battery.",
      description: "Mobile compromise cascades into total account takeover.",
      status: "available",
      position: { x: 0, y: 50 },
      content: [
        {
          id: "c7t1s1",
          type: "theory",
          title: "Identity Hub Risk",
          text:
            "Phones are always on, always connected, and always personal. They anchor email, 2FA, banking, and SIM identity. Losing control of a phone enables attackers to reset everything else."
        },
        {
          id: "c7t1q1",
          type: "quiz",
          question: "Why are mobile devices higher-risk than desktops?",
          options: [
            { id: "a", text: "They use weaker hardware" },
            { id: "b", text: "They combine identity, location, sensors, and authentication", correct: true },
            { id: "c", text: "They lack encryption" },
            { id: "d", text: "They don't receive updates" }
          ]
        },
        {
          id: "c7t1q2",
          type: "quiz",
          question: "What user behavior increases mobile risk most?",
          options: [
            { id: "a", text: "Short battery life" },
            { id: "b", text: "Treating phones as safe by default", correct: true },
            { id: "c", text: "Using apps" },
            { id: "d", text: "Touch input" }
          ]
        }
      ]
    },

    {
      id: "c7t2",
      title: "Mobile OS Architecture",
      brief: "Designed for hostile environments.",
      description: "Isolation limits blast radius.",
      status: "locked",
      position: { x: -20, y: 180 },
      content: [
        {
          id: "c7t2s1",
          type: "theory",
          title: "Why It Mostly Works",
          text:
            "Modern mobile OSs rely on sandboxing, permission models, and hardware-backed secure enclaves. Failures usually occur due to over-permissioned apps and consent fatigue."
        },
        {
          id: "c7t2q1",
          type: "quiz",
          question: "What does sandboxing prevent?",
          options: [
            { id: "a", text: "App installation" },
            { id: "b", text: "Apps accessing each other's data", correct: true },
            { id: "c", text: "Network access" },
            { id: "d", text: "App updates" }
          ]
        },
        {
          id: "c7t2q2",
          type: "quiz",
          question: "Where does the mobile security model break down?",
          options: [
            { id: "a", text: "Hardware failure" },
            { id: "b", text: "Over-permissioned apps and consent fatigue", correct: true },
            { id: "c", text: "Encryption strength" },
            { id: "d", text: "OS updates" }
          ]
        }
      ]
    },

    {
      id: "c7t3",
      title: "Mobile Malware",
      brief: "Same goals, subtler tactics.",
      description: "Surveillance and fraud dominate.",
      status: "locked",
      position: { x: 20, y: 310 },
      content: [
        {
          id: "c7t3s1",
          type: "theory",
          title: "Permission-Centric Attacks",
          text:
            "Mobile malware targets credentials, messages, sensors, and payments. Spyware, banking trojans, adware, and stalkerware rely on stealth and user trust."
        },
        {
          id: "c7t3q1",
          type: "quiz",
          question: "Why does mobile malware focus heavily on permissions?",
          options: [
            { id: "a", text: "Permissions are cosmetic" },
            { id: "b", text: "Permissions gate sensors, messages, and identity", correct: true },
            { id: "c", text: "They slow systems" },
            { id: "d", text: "They block updates" }
          ]
        }
      ]
    },

    {
      id: "c7t4",
      title: "App Stores and Permissions",
      brief: "Gatekeepers, not gods.",
      description: "Trust must be verified continuously.",
      status: "locked",
      position: { x: -25, y: 440 },
      content: [
        {
          id: "c7t4s1",
          type: "theory",
          title: "False Safety Nets",
          text:
            "Official app stores reduce risk but cannot prevent delayed malicious updates, SDK abuse, or supply-chain compromise. Permissions remain the real control layer."
        },
        {
          id: "c7t4q1",
          type: "quiz",
          question: "Why aren't app stores perfect protection?",
          options: [
            { id: "a", text: "They don't scan apps" },
            { id: "b", text: "Malicious behavior can be delayed or hidden", correct: true },
            { id: "c", text: "Apps aren't reviewed" },
            { id: "d", text: "Users can't report apps" }
          ]
        }
      ]
    },

    {
      id: "c7t5",
      title: "Sensors and Side Channels",
      brief: "Invisible data leakage.",
      description: "Low-risk signals combine into high risk.",
      status: "locked",
      position: { x: 25, y: 570 },
      content: [
        {
          id: "c7t5s1",
          type: "theory",
          title: "Hidden Attack Surface",
          text:
            "Motion, light, and proximity sensors can infer keystrokes, speech, and location without explicit permissions. Sensor fusion reconstructs lifestyle patterns."
        },
        {
          id: "c7t5q1",
          type: "quiz",
          question: "What is the real danger of sensor fusion?",
          options: [
            { id: "a", text: "Battery drain" },
            { id: "b", text: "Low-risk sensors combine into high-risk inference", correct: true },
            { id: "c", text: "OS crashes" },
            { id: "d", text: "UI lag" }
          ]
        }
      ]
    },

    {
      id: "c7t6",
      title: "Network and SIM Threats",
      brief: "Trusting networks too much.",
      description: "Carriers become part of your threat model.",
      status: "locked",
      position: { x: -20, y: 700 },
      content: [
        {
          id: "c7t6s1",
          type: "theory",
          title: "Mobile Network Risks",
          text:
            "Public Wi-Fi, IMSI catchers, and SIM-swap attacks bypass device security. SMS-based authentication collapses under telecom compromise."
        },
        {
          id: "c7t6q1",
          type: "quiz",
          question: "What is SIM swapping?",
          options: [
            { id: "a", text: "Phone repair" },
            { id: "b", text: "Number transferred to attacker-controlled SIM", correct: true },
            { id: "c", text: "Device cloning" },
            { id: "d", text: "Malware technique" }
          ]
        }
      ]
    },

    {
      id: "c7t7",
      title: "Lock Screens and Biometrics",
      brief: "Small settings, huge impact.",
      description: "Convenience taxes security.",
      status: "locked",
      position: { x: 20, y: 830 },
      content: [
        {
          id: "c7t7s1",
          type: "theory",
          title: "Conditional Protection",
          text:
            "Strong locks, short auto-lock timers, and hidden previews matter. Biometrics add convenience but rely on strong fallback PINs."
        },
        {
          id: "c7t7q1",
          type: "quiz",
          question: "Why are biometrics considered conditional security?",
          options: [
            { id: "a", text: "They expire" },
            { id: "b", text: "They rely on hardware and fallback methods", correct: true },
            { id: "c", text: "They are slow" },
            { id: "d", text: "They require internet" }
          ]
        }
      ]
    },

    {
      id: "c7t8",
      title: "Daily Mobile Security Habits",
      brief: "Intentional friction works.",
      description: "Consistency beats tools.",
      status: "locked",
      position: { x: -15, y: 960 },
      content: [
        {
          id: "c7t8s1",
          type: "theory",
          title: "Actionable Layer",
          text:
            "Strong PINs, regular permission reviews, disabling unused radios, avoiding SMS 2FA, and treating phone loss as an emergency reduce impact."
        },
        {
          id: "c7t8q1",
          type: "quiz",
          question: "What mindset best protects mobile security?",
          options: [
            { id: "a", text: "Paranoia" },
            { id: "b", text: "Assume exposure, minimize impact", correct: true },
            { id: "c", text: "Blind trust" },
            { id: "d", text: "Tool dependence" }
          ]
        }
      ]
    }
  ]
}
    ];


export const allQuestions :Slide[] = [
  // Chapter 1: Digital Survival Instincts
  {
    id: "q1",
    type: "quiz",
    question: "What does digital survival instincts primarily refer to?",
    options: [
      { id: "a", text: "Advanced hacking techniques" },
      { id: "b", text: "Natural awareness to stay safe online", correct: true },
      { id: "c", text: "Programming skills" },
      { id: "d", text: "Social media popularity" }
    ]
  },
  {
    id: "q2",
    type: "quiz",
    question: "Why are digital survival instincts important today?",
    options: [
      { id: "a", text: "Because everyone uses the internet professionally" },
      { id: "b", text: "Because threats only affect companies" },
      { id: "c", text: "Because daily digital actions carry real risks", correct: true },
      { id: "d", text: "Because devices are cheaper" }
    ]
  },
  {
    id: "q3",
    type: "quiz",
    question: "A digital identity is best described as:",
    options: [
      { id: "a", text: "A single username" },
      { id: "b", text: "Only social media profiles" },
      { id: "c", text: "A collection of data linked to a person", correct: true },
      { id: "d", text: "A government ID" }
    ]
  },
  {
    id: "q4",
    type: "quiz",
    question: "Why is personal data valuable to companies?",
    options: [
      { id: "a", text: "It increases bandwidth" },
      { id: "b", text: "It helps predict user behavior", correct: true },
      { id: "c", text: "It reduces software cost" },
      { id: "d", text: "It improves hardware" }
    ]
  },
  {
    id: "q5",
    type: "quiz",
    question: "Why is a free online service rarely free?",
    options: [
      { id: "a", text: "Ads pay everything" },
      { id: "b", text: "Maintenance costs are zero" },
      { id: "c", text: "User data funds the service", correct: true },
      { id: "d", text: "Governments sponsor them" }
    ]
  },
  {
    id: "q6",
    type: "quiz",
    question: "Which data type is often underestimated but highly revealing?",
    options: [
      { id: "a", text: "Passwords" },
      { id: "b", text: "Metadata", correct: true },
      { id: "c", text: "Bank statements" },
      { id: "d", text: "Photos" }
    ]
  },
  {
    id: "q7",
    type: "quiz",
    question: "Phishing attacks are mainly designed to:",
    options: [
      { id: "a", text: "Damage hardware" },
      { id: "b", text: "Steal personal information", correct: true },
      { id: "c", text: "Improve website ranking" },
      { id: "d", text: "Test network speed" }
    ]
  },
  {
    id: "q8",
    type: "quiz",
    question: "Social engineering attacks primarily target:",
    options: [
      { id: "a", text: "Servers" },
      { id: "b", text: "Databases" },
      { id: "c", text: "Human psychology", correct: true },
      { id: "d", text: "Firewalls" }
    ]
  },
  {
    id: "q9",
    type: "quiz",
    question: "Which human trait is most commonly exploited in scams?",
    options: [
      { id: "a", text: "Intelligence" },
      { id: "b", text: "Curiosity and fear", correct: true },
      { id: "c", text: "Strength" },
      { id: "d", text: "Memory" }
    ]
  },
  {
    id: "q10",
    type: "quiz",
    question: "What is the safest reaction to suspicious content?",
    options: [
      { id: "a", text: "Click immediately" },
      { id: "b", text: "Ignore instinct" },
      { id: "c", text: "Pause and verify", correct: true },
      { id: "d", text: "Share with friends" }
    ]
  },
  {
    id: "q11",
    type: "quiz",
    question: "Why is reusing passwords dangerous?",
    options: [
      { id: "a", text: "It slows login time" },
      { id: "b", text: "One breach can expose all accounts", correct: true },
      { id: "c", text: "It uses more storage" },
      { id: "d", text: "Browsers reject it" }
    ]
  },
  {
    id: "q12",
    type: "quiz",
    question: "Two-factor authentication improves security by:",
    options: [
      { id: "a", text: "Making passwords longer" },
      { id: "b", text: "Adding a second verification step", correct: true },
      { id: "c", text: "Removing passwords" },
      { id: "d", text: "Blocking all hackers" }
    ]
  },
  {
    id: "q13",
    type: "quiz",
    question: "What makes oversharing dangerous?",
    options: [
      { id: "a", text: "It attracts spam" },
      { id: "b", text: "It creates exploitable patterns", correct: true },
      { id: "c", text: "It lowers engagement" },
      { id: "d", text: "It slows the app" }
    ]
  },
  {
    id: "q14",
    type: "quiz",
    question: "Which post is riskiest?",
    options: [
      { id: "a", text: "Sharing a meme" },
      { id: "b", text: "Posting a hobby" },
      { id: "c", text: "Posting live travel location", correct: true },
      { id: "d", text: "Sharing an opinion" }
    ]
  },
  {
    id: "q15",
    type: "quiz",
    question: "Why does misinformation spread easily?",
    options: [
      { id: "a", text: "It is always well-written" },
      { id: "b", text: "It triggers strong emotions", correct: true },
      { id: "c", text: "It uses better technology" },
      { id: "d", text: "It is government-backed" }
    ]
  },
  {
    id: "q16",
    type: "quiz",
    question: "Why should digital footprints be considered permanent?",
    options: [
      { id: "a", text: "Screenshots expire" },
      { id: "b", text: "The internet forgets" },
      { id: "c", text: "Content can resurface later", correct: true },
      { id: "d", text: "Posts auto-delete" }
    ]
  },
  {
    id: "q17",
    type: "quiz",
    question: "Digital safety is mostly about:",
    options: [
      { id: "a", text: "Expensive software" },
      { id: "b", text: "Fear of technology" },
      { id: "c", text: "Awareness and habits", correct: true },
      { id: "d", text: "Advanced coding" }
    ]
  },

  // Chapter 2: Accounts, Passwords and Authentication
  {
    id: "q18",
    type: "quiz",
    question: "What does an online account primarily represent?",
    options: [
      { id: "a", text: "A device" },
      { id: "b", text: "A person's digital identity on a service", correct: true },
      { id: "c", text: "A software license" },
      { id: "d", text: "A file storage area" }
    ]
  },
  {
    id: "q19",
    type: "quiz",
    question: "Authentication systems primarily aim to:",
    options: [
      { id: "a", text: "Identify users with certainty" },
      { id: "b", text: "Eliminate all attacks" },
      { id: "c", text: "Manage risk by increasing confidence", correct: true },
      { id: "d", text: "Track user behavior" }
    ]
  },
  {
    id: "q20",
    type: "quiz",
    question: "Why do passwords still exist despite being insecure?",
    options: [
      { id: "a", text: "They are unbreakable" },
      { id: "b", text: "They are cheap, simple, and human-readable", correct: true },
      { id: "c", text: "They are the most secure method" },
      { id: "d", text: "They cannot be replaced" }
    ]
  },
  {
    id: "q21",
    type: "quiz",
    question: "What mainly determines password strength?",
    options: [
      { id: "a", text: "Use of symbols" },
      { id: "b", text: "Visual complexity" },
      { id: "c", text: "Search space size", correct: true },
      { id: "d", text: "Capital letters" }
    ]
  },
  {
    id: "q22",
    type: "quiz",
    question: "Why don't secure systems store actual passwords?",
    options: [
      { id: "a", text: "It takes too much space" },
      { id: "b", text: "Passwords change too often" },
      { id: "c", text: "Direct storage would expose all users if leaked", correct: true },
      { id: "d", text: "Passwords are hard to manage" }
    ]
  },
  {
    id: "q23",
    type: "quiz",
    question: "What is the role of a salt in hashing?",
    options: [
      { id: "a", text: "Make passwords memorable" },
      { id: "b", text: "Hide usernames" },
      { id: "c", text: "Prevent rainbow table attacks", correct: true },
      { id: "d", text: "Speed up hashing" }
    ]
  },
  {
    id: "q24",
    type: "quiz",
    question: "Which is an example of something you have?",
    options: [
      { id: "a", text: "Password" },
      { id: "b", text: "PIN" },
      { id: "c", text: "Fingerprint" },
      { id: "d", text: "Hardware security key", correct: true }
    ]
  },
  {
    id: "q25",
    type: "quiz",
    question: "Why is SMS-based 2FA considered weak?",
    options: [
      { id: "a", text: "Messages expire quickly" },
      { id: "b", text: "SMS is slow" },
      { id: "c", text: "SIM cards can be hijacked", correct: true },
      { id: "d", text: "Phones may not receive messages" }
    ]
  },
  {
    id: "q26",
    type: "quiz",
    question: "How are TOTP codes generated?",
    options: [
      { id: "a", text: "From the user's password" },
      { id: "b", text: "From internet connectivity" },
      { id: "c", text: "From a shared secret and time", correct: true },
      { id: "d", text: "From phone number" }
    ]
  },
  {
    id: "q27",
    type: "quiz",
    question: "Why is device loss risky with authenticator apps?",
    options: [
      { id: "a", text: "Apps expire" },
      { id: "b", text: "Codes stop working" },
      { id: "c", text: "You may be locked out without backups", correct: true },
      { id: "d", text: "Passwords reset automatically" }
    ]
  },
  {
    id: "q28",
    type: "quiz",
    question: "Why is stealing a session cookie dangerous?",
    options: [
      { id: "a", text: "It reveals the password" },
      { id: "b", text: "It allows impersonation without credentials", correct: true },
      { id: "c", text: "It deletes the account" },
      { id: "d", text: "It infects the browser" }
    ]
  },
  {
    id: "q29",
    type: "quiz",
    question: "Why is account recovery often the weakest link?",
    options: [
      { id: "a", text: "It is rarely used" },
      { id: "b", text: "It bypasses normal authentication", correct: true },
      { id: "c", text: "It uses old software" },
      { id: "d", text: "It requires internet access" }
    ]
  },
  {
    id: "q30",
    type: "quiz",
    question: "What is the core idea behind Zero Trust?",
    options: [
      { id: "a", text: "Trust internal users" },
      { id: "b", text: "Block all access" },
      { id: "c", text: "Never assume trust; always verify", correct: true },
      { id: "d", text: "Remove authentication" }
    ]
  },

  // Chapter 3: Data and Privacy
  {
    id: "q31",
    type: "quiz",
    question: "What is data at its most basic level?",
    options: [
      { id: "a", text: "Objective truth" },
      { id: "b", text: "Reality converted into symbols", correct: true },
      { id: "c", text: "Verified human knowledge" },
      { id: "d", text: "Ethical information" }
    ]
  },
  {
    id: "q32",
    type: "quiz",
    question: "Why do systems value imperfect data?",
    options: [
      { id: "a", text: "Storage is cheap" },
      { id: "b", text: "Humans can correct it" },
      { id: "c", text: "Predictive usefulness matters more than accuracy", correct: true },
      { id: "d", text: "Laws require retention" }
    ]
  },
  {
    id: "q33",
    type: "quiz",
    question: "What is the first stage in the data lifecycle?",
    options: [
      { id: "a", text: "Analysis" },
      { id: "b", text: "Storage" },
      { id: "c", text: "Collection", correct: true },
      { id: "d", text: "Modeling" }
    ]
  },
  {
    id: "q34",
    type: "quiz",
    question: "Why does data persist after its original purpose?",
    options: [
      { id: "a", text: "Deletion is impossible" },
      { id: "b", text: "Storage is free" },
      { id: "c", text: "Future predictive value is unknown", correct: true },
      { id: "d", text: "Law requires it" }
    ]
  },
  {
    id: "q35",
    type: "quiz",
    question: "Which data type is created without you providing it?",
    options: [
      { id: "a", text: "Account credentials" },
      { id: "b", text: "Uploaded documents" },
      { id: "c", text: "Derived or inferred data", correct: true },
      { id: "d", text: "Identification data" }
    ]
  },
  {
    id: "q36",
    type: "quiz",
    question: "Why is behavioral data more valuable than declarations?",
    options: [
      { id: "a", text: "It is encrypted" },
      { id: "b", text: "People lie but behavior leaks truth", correct: true },
      { id: "c", text: "It is cheaper to collect" },
      { id: "d", text: "It expires quickly" }
    ]
  },
  {
    id: "q37",
    type: "quiz",
    question: "Why is metadata highly sensitive?",
    options: [
      { id: "a", text: "It is hard to encrypt" },
      { id: "b", text: "It reveals patterns and relationships", correct: true },
      { id: "c", text: "It stores passwords" },
      { id: "d", text: "It is public" }
    ]
  },
  {
    id: "q38",
    type: "quiz",
    question: "Why is browser fingerprinting hard to block?",
    options: [
      { id: "a", text: "It uses pop-ups" },
      { id: "b", text: "It relies on unique device characteristics", correct: true },
      { id: "c", text: "It requires permission" },
      { id: "d", text: "It slows browsers" }
    ]
  },
  {
    id: "q39",
    type: "quiz",
    question: "Why is digital consent often a structural failure?",
    options: [
      { id: "a", text: "Users ignore privacy" },
      { id: "b", text: "Interfaces push agreement without comprehension", correct: true },
      { id: "c", text: "Laws are perfect" },
      { id: "d", text: "Users refuse to read" }
    ]
  },
  {
    id: "q40",
    type: "quiz",
    question: "What does contextual privacy mean?",
    options: [
      { id: "a", text: "All data must be private" },
      { id: "b", text: "Privacy depends on purpose and audience", correct: true },
      { id: "c", text: "Privacy is identical everywhere" },
      { id: "d", text: "Delete accounts to fix it" }
    ]
  },
  {
    id: "q41",
    type: "quiz",
    question: "Why is long-term data retention risky?",
    options: [
      { id: "a", text: "Older data is encrypted" },
      { id: "b", text: "Data accumulates and increases attack surface", correct: true },
      { id: "c", text: "It improves accuracy" },
      { id: "d", text: "It speeds devices" }
    ]
  },
  {
    id: "q42",
    type: "quiz",
    question: "What is a limitation of privacy-preserving technologies?",
    options: [
      { id: "a", text: "They are free" },
      { id: "b", text: "They eliminate all risk" },
      { id: "c", text: "They can reduce utility or be complex", correct: true },
      { id: "d", text: "They remove passwords" }
    ]
  },

  // Chapter 4: Malware and Digital Threats
  {
    id: "q43",
    type: "quiz",
    question: "What defines a digital threat?",
    options: [
      { id: "a", text: "Any virus that deletes files" },
      { id: "b", text: "Anything that can harm systems, data, or users", correct: true },
      { id: "c", text: "Only self-spreading malware" },
      { id: "d", text: "Only phishing emails" }
    ]
  },
  {
    id: "q44",
    type: "quiz",
    question: "Why do digital threats remain relevant even on patched systems?",
    options: [
      { id: "a", text: "Attackers are lazy" },
      { id: "b", text: "They exploit unknown flaws and human behavior", correct: true },
      { id: "c", text: "Antivirus is perfect" },
      { id: "d", text: "Systems are slow" }
    ]
  },
  {
    id: "q45",
    type: "quiz",
    question: "What is the first stage of the malware lifecycle?",
    options: [
      { id: "a", text: "Profit extraction" },
      { id: "b", text: "Infection or entry", correct: true },
      { id: "c", text: "Exploitation" },
      { id: "d", text: "Detection" }
    ]
  },
  {
    id: "q46",
    type: "quiz",
    question: "What is the main goal of the payload stage?",
    options: [
      { id: "a", text: "Spread malware" },
      { id: "b", text: "Execute theft, encryption, or spying", correct: true },
      { id: "c", text: "Clean up traces" },
      { id: "d", text: "Alert the user" }
    ]
  },
  {
    id: "q47",
    type: "quiz",
    question: "Which is a common malware attack vector?",
    options: [
      { id: "a", text: "Email attachments and links", correct: true },
      { id: "b", text: "Air conditioning" },
      { id: "c", text: "Monitor brightness" },
      { id: "d", text: "USB power cables" }
    ]
  },
  {
    id: "q48",
    type: "quiz",
    question: "Why is social engineering so effective?",
    options: [
      { id: "a", text: "It encrypts malware" },
      { id: "b", text: "It manipulates human behavior to bypass controls", correct: true },
      { id: "c", text: "It targets hardware" },
      { id: "d", text: "It slows malware spread" }
    ]
  },
  {
    id: "q49",
    type: "quiz",
    question: "What is an exploit?",
    options: [
      { id: "a", text: "A security patch" },
      { id: "b", text: "Code used to take advantage of a vulnerability", correct: true },
      { id: "c", text: "A payload" },
      { id: "d", text: "A scanner" }
    ]
  },
  {
    id: "q50",
    type: "quiz",
    question: "Why are zero-day vulnerabilities dangerous?",
    options: [
      { id: "a", text: "They are harmless" },
      { id: "b", text: "They are unknown and unpatched", correct: true },
      { id: "c", text: "They only affect old systems" },
      { id: "d", text: "They are encrypted" }
    ]
  },
  {
    id: "q51",
    type: "quiz",
    question: "Why is disrupting C2 important?",
    options: [
      { id: "a", text: "It deletes files" },
      { id: "b", text: "It cuts off attacker control", correct: true },
      { id: "c", text: "It prevents phishing" },
      { id: "d", text: "It speeds networks" }
    ]
  },
  {
    id: "q52",
    type: "quiz",
    question: "What is a botnet?",
    options: [
      { id: "a", text: "A single malware instance" },
      { id: "b", text: "A network of compromised devices", correct: true },
      { id: "c", text: "A firewall" },
      { id: "d", text: "An antivirus tool" }
    ]
  },
  {
    id: "q53",
    type: "quiz",
    question: "Why are supply chain attacks dangerous?",
    options: [
      { id: "a", text: "They are easy to detect" },
      { id: "b", text: "They exploit trusted software and spread widely", correct: true },
      { id: "c", text: "They affect one user" },
      { id: "d", text: "They require manual execution" }
    ]
  },
  {
    id: "q54",
    type: "quiz",
    question: "What is polymorphic malware?",
    options: [
      { id: "a", text: "Self-deleting malware" },
      { id: "b", text: "Malware that changes code to evade detection", correct: true },
      { id: "c", text: "IoT-only malware" },
      { id: "d", text: "Open-source malware" }
    ]
  },
  {
    id: "q55",
    type: "quiz",
    question: "Why is awareness training critical?",
    options: [
      { id: "a", text: "It replaces antivirus" },
      { id: "b", text: "It reduces success of phishing and manipulation", correct: true },
      { id: "c", text: "It removes malware" },
      { id: "d", text: "It speeds networks" }
    ]
  },

  // Chapter 5: Safe Daily Digital Habits
  {
    id: "q56",
    type: "quiz",
    question: "Why are daily digital habits often more effective than tools alone?",
    options: [
      { id: "a", text: "Tools remove the need for judgment" },
      { id: "b", text: "Habits reduce exposure before tools act", correct: true },
      { id: "c", text: "Tools never fail" },
      { id: "d", text: "Habits replace encryption" }
    ]
  },
  {
    id: "q57",
    type: "quiz",
    question: "Why do attackers prefer habit-based weaknesses?",
    options: [
      { id: "a", text: "They are harder to exploit" },
      { id: "b", text: "Humans are predictable under pressure", correct: true },
      { id: "c", text: "Tools block all attacks" },
      { id: "d", text: "Habits are encrypted" }
    ]
  },
  {
    id: "q58",
    type: "quiz",
    question: "Why is email still a primary attack vector?",
    options: [
      { id: "a", text: "It is encrypted" },
      { id: "b", text: "It blends urgency, trust, and familiarity", correct: true },
      { id: "c", text: "It is slow" },
      { id: "d", text: "It blocks malware" }
    ]
  },
  {
    id: "q59",
    type: "quiz",
    question: "What habit reduces phishing success the most?",
    options: [
      { id: "a", text: "Clicking quickly" },
      { id: "b", text: "Verifying via a second channel", correct: true },
      { id: "c", text: "Saving passwords in email" },
      { id: "d", text: "Ignoring alerts" }
    ]
  },
  {
    id: "q60",
    type: "quiz",
    question: "Which habit most reduces account compromise risk?",
    options: [
      { id: "a", text: "Reusing strong passwords" },
      { id: "b", text: "Unique passwords per account", correct: true },
      { id: "c", text: "Daily password changes" },
      { id: "d", text: "Writing passwords down" }
    ]
  },
  {
    id: "q61",
    type: "quiz",
    question: "Why should login alerts never be ignored?",
    options: [
      { id: "a", text: "They are always false" },
      { id: "b", text: "They may signal early compromise", correct: true },
      { id: "c", text: "They slow systems" },
      { id: "d", text: "They increase spam" }
    ]
  },
  {
    id: "q62",
    type: "quiz",
    question: "Why are unused apps a risk?",
    options: [
      { id: "a", text: "They consume storage" },
      { id: "b", text: "They may have unpatched vulnerabilities", correct: true },
      { id: "c", text: "They slow typing" },
      { id: "d", text: "They encrypt files" }
    ]
  },
  {
    id: "q63",
    type: "quiz",
    question: "Why is public Wi-Fi risky?",
    options: [
      { id: "a", text: "It is slow" },
      { id: "b", text: "Traffic can be intercepted or manipulated", correct: true },
      { id: "c", text: "It deletes cookies" },
      { id: "d", text: "It blocks encryption" }
    ]
  },
  {
    id: "q64",
    type: "quiz",
    question: "Why do backups reduce ransomware impact?",
    options: [
      { id: "a", text: "They attract attackers" },
      { id: "b", text: "They eliminate ransom leverage", correct: true },
      { id: "c", text: "They spread malware" },
      { id: "d", text: "They slow systems" }
    ]
  },
  {
    id: "q65",
    type: "quiz",
    question: "Why are pirated or free-content sites risky?",
    options: [
      { id: "a", text: "They are illegal only" },
      { id: "b", text: "They often bundle malware or malicious ads", correct: true },
      { id: "c", text: "They lack encryption" },
      { id: "d", text: "They load slowly" }
    ]
  },
  {
    id: "q66",
    type: "quiz",
    question: "What is shoulder surfing?",
    options: [
      { id: "a", text: "Network attack" },
      { id: "b", text: "Observing screens or keyboards", correct: true },
      { id: "c", text: "Phishing method" },
      { id: "d", text: "Malware technique" }
    ]
  },
  {
    id: "q67",
    type: "quiz",
    question: "Why is account monitoring critical?",
    options: [
      { id: "a", text: "Accounts are static" },
      { id: "b", text: "Early signs appear before major damage", correct: true },
      { id: "c", text: "Alerts are useless" },
      { id: "d", text: "It replaces passwords" }
    ]
  },
  {
    id: "q68",
    type: "quiz",
    question: "What is the ultimate goal of safe daily digital habits?",
    options: [
      { id: "a", text: "Zero risk" },
      { id: "b", text: "Resilience and reduced impact", correct: true },
      { id: "c", text: "Tool dependence" },
      { id: "d", text: "Complexity" }
    ]
  },

  // Chapter 6: Social Media and Online Behavior
  {
    id: "q69",
    type: "quiz",
    question: "Why is social media better described as an environment than a tool?",
    options: [
      { id: "a", text: "It performs one function" },
      { id: "b", text: "It continuously shapes behavior and attention", correct: true },
      { id: "c", text: "It stores files" },
      { id: "d", text: "It is optional software" }
    ]
  },
  {
    id: "q70",
    type: "quiz",
    question: "Why is passive scrolling still influential?",
    options: [
      { id: "a", text: "Content is random" },
      { id: "b", text: "Exposure affects perception without interaction", correct: true },
      { id: "c", text: "It improves memory" },
      { id: "d", text: "It increases security" }
    ]
  },
  {
    id: "q71",
    type: "quiz",
    question: "What does algorithmic mediation mean?",
    options: [
      { id: "a", text: "Humans select all content" },
      { id: "b", text: "Algorithms filter and prioritize content", correct: true },
      { id: "c", text: "Feeds are chronological" },
      { id: "d", text: "Ads are hidden" }
    ]
  },
  {
    id: "q72",
    type: "quiz",
    question: "What survival instinct helps counter algorithmic feeds?",
    options: [
      { id: "a", text: "Trust the feed" },
      { id: "b", text: "Diversify information sources", correct: true },
      { id: "c", text: "Scroll longer" },
      { id: "d", text: "Disable updates" }
    ]
  },
  {
    id: "q73",
    type: "quiz",
    question: "What is quantified social status?",
    options: [
      { id: "a", text: "Income tracking" },
      { id: "b", text: "Metrics like likes and followers", correct: true },
      { id: "c", text: "Account verification" },
      { id: "d", text: "Encrypted messaging" }
    ]
  },
  {
    id: "q74",
    type: "quiz",
    question: "What is a healthier interpretation of social metrics?",
    options: [
      { id: "a", text: "Objective personal worth" },
      { id: "b", text: "Signals of platform engagement", correct: true },
      { id: "c", text: "Long-term value" },
      { id: "d", text: "Security indicators" }
    ]
  },
  {
    id: "q75",
    type: "quiz",
    question: "What is the online disinhibition effect?",
    options: [
      { id: "a", text: "Faster typing" },
      { id: "b", text: "Reduced restraint online", correct: true },
      { id: "c", text: "Better communication" },
      { id: "d", text: "Increased privacy" }
    ]
  },
  {
    id: "q76",
    type: "quiz",
    question: "Why are social platforms ideal for social engineering?",
    options: [
      { id: "a", text: "They block malware" },
      { id: "b", text: "They expose trust cues and social graphs", correct: true },
      { id: "c", text: "They encrypt messages" },
      { id: "d", text: "They limit visibility" }
    ]
  },
  {
    id: "q77",
    type: "quiz",
    question: "What does conscious consumption mean?",
    options: [
      { id: "a", text: "Avoid all platforms" },
      { id: "b", text: "Choose content intentionally", correct: true },
      { id: "c", text: "Consume more content" },
      { id: "d", text: "Trust algorithms" }
    ]
  },
  {
    id: "q78",
    type: "quiz",
    question: "Why is oversharing a long-term risk?",
    options: [
      { id: "a", text: "It uses storage" },
      { id: "b", text: "Data persists and can be recontextualized", correct: true },
      { id: "c", text: "It slows feeds" },
      { id: "d", text: "It increases engagement" }
    ]
  },
  {
    id: "q79",
    type: "quiz",
    question: "What is the ultimate goal of intentional social media use?",
    options: [
      { id: "a", text: "Maximum visibility" },
      { id: "b", text: "Retaining agency over attention and identity", correct: true },
      { id: "c", text: "More followers" },
      { id: "d", text: "Algorithmic approval" }
    ]
  },

  // Chapter 7: Mobile Security
  {
    id: "q80",
    type: "quiz",
    question: "Why are mobile devices higher-risk than desktops?",
    options: [
      { id: "a", text: "They use weaker hardware" },
      { id: "b", text: "They combine identity, location, sensors, and authentication", correct: true },
      { id: "c", text: "They lack encryption" },
      { id: "d", text: "They don't receive updates" }
    ]
  },
  {
    id: "q81",
    type: "quiz",
    question: "What user behavior increases mobile risk most?",
    options: [
      { id: "a", text: "Short battery life" },
      { id: "b", text: "Treating phones as safe by default", correct: true },
      { id: "c", text: "Using apps" },
      { id: "d", text: "Touch input" }
    ]
  },
  {
    id: "q82",
    type: "quiz",
    question: "What does sandboxing prevent?",
    options: [
      { id: "a", text: "App installation" },
      { id: "b", text: "Apps accessing each other's data", correct: true },
      { id: "c", text: "Network access" },
      { id: "d", text: "App updates" }
    ]
  },
  {
    id: "q83",
    type: "quiz",
    question: "Where does the mobile security model break down?",
    options: [
      { id: "a", text: "Hardware failure" },
      { id: "b", text: "Over-permissioned apps and consent fatigue", correct: true },
      { id: "c", text: "Encryption strength" },
      { id: "d", text: "OS updates" }
    ]
  },
  {
    id: "q84",
    type: "quiz",
    question: "Why does mobile malware focus heavily on permissions?",
    options: [
      { id: "a", text: "Permissions are cosmetic" },
      { id: "b", text: "Permissions gate sensors, messages, and identity", correct: true },
      { id: "c", text: "They slow systems" },
      { id: "d", text: "They block updates" }
    ]
  },
  {
    id: "q85",
    type: "quiz",
    question: "Why aren't app stores perfect protection?",
    options: [
      { id: "a", text: "They don't scan apps" },
      { id: "b", text: "Malicious behavior can be delayed or hidden", correct: true },
      { id: "c", text: "Apps aren't reviewed" },
      { id: "d", text: "Users can't report apps" }
    ]
  },
  {
    id: "q86",
    type: "quiz",
    question: "What is the real danger of sensor fusion?",
    options: [
      { id: "a", text: "Battery drain" },
      { id: "b", text: "Low-risk sensors combine into high-risk inference", correct: true },
      { id: "c", text: "OS crashes" },
      { id: "d", text: "UI lag" }
    ]
  },
  {
    id: "q87",
    type: "quiz",
    question: "What is SIM swapping?",
    options: [
      { id: "a", text: "Phone repair" },
      { id: "b", text: "Number transferred to attacker-controlled SIM", correct: true },
      { id: "c", text: "Device cloning" },
      { id: "d", text: "Malware technique" }
    ]
  },
  {
    id: "q88",
    type: "quiz",
    question: "Why are biometrics considered conditional security?",
    options: [
      { id: "a", text: "They expire" },
      { id: "b", text: "They rely on hardware and fallback methods", correct: true },
      { id: "c", text: "They are slow" },
      { id: "d", text: "They require internet" }
    ]
  },
  {
    id: "q89",
    type: "quiz",
    question: "What mindset best protects mobile security?",
    options: [
      { id: "a", text: "Paranoia" },
      { id: "b", text: "Assume exposure, minimize impact", correct: true },
      { id: "c", text: "Blind trust" },
      { id: "d", text: "Tool dependence" }
    ]
  }
];

// Shuffle function (Fisher-Yates algorithm)


// export const Topics: Topic[] = [
//     {
//         id: 0,
//         title: 'Welcome to the Hive',
//         description: 'Basics of Cybersecurity',
//         brief: 'Welcome to HackBee, recruit. You are about to embark on a journey to master the art of cybersecurity. Let us begin.',
//         status: 'available',
//         position: { x: 50, y: 0 },
//         content: [
//             {
//                 id: 's1',
//                 type: 'theory',
//                 title: 'What is Cybersecurity?',
//                 text: 'Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These cyberattacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users; or interrupting normal business processes.'
//             },
//             {
//                 id: 's2',
//                 type: 'quiz',
//                 question: 'What is the primary goal of cybersecurity?',
//                 options: [
//                     { id: '1', text: 'To learn how to code' },
//                     { id: '2', text: 'To protect digital systems and data', correct: true },
//                     { id: '3', text: 'To build faster computers' }
//                 ]
//             },
//             {
//                 id: 's3',
//                 type: 'quiz',
//                 question: 'What happens when a system is not secure?',
//                 options: [
//                     { id: '1', text: 'Data might be stolen', correct: true },
//                     { id: '2', text: 'Data will be safer' },
//                     { id: '3', text: 'The system will work better' }
//                 ]
//             }
//         ]
//     },
//     {
//         id: 1,
//         title: 'Password Panic',
//         description: 'Strong locks > Bad habits',
//         brief: 'Hackers loooove lazy passwords. Always make sure you create a strong one! Let\'s learn why.',
//         status: 'locked',
//         position: { x: 30, y: 150 },
//         content: [
//             {
//                 id: 's1',
//                 type: 'theory',
//                 title: 'Why Passwords Matter',
//                 text: 'Passwords are often the first line of defense. Weak or reused passwords make it easy for attackers to break in by just guessing or digging through leaked data.'
//             },
//             {
//                 id: 's2',
//                 type: 'theory',
//                 title: 'What Makes a Strong Password',
//                 text: 'A strong password is long, unique, and random. Mixing letters, numbers, and symbols makes it even stronger.'
//             },
//             {
//                 id: 's3',
//                 type: 'quiz',
//                 question: 'Which password is the strongest?',
//                 options: [
//                     { id: 'a', text: 'password123' },
//                     { id: 'b', text: 'T7$P@55W0rd!kL9!zQ2', correct: true },
//                     { id: 'c', text: 'the strongest password' }
//                 ]
//             },
//             {
//                 id: 's4',
//                 type: 'quiz',
//                 question: 'Why is password reuse dangerous?',
//                 options: [
//                     { id: 'a', text: 'One password leak can unlock many accounts', correct: true },
//                     { id: 'b', text: 'It makes logins faster' },
//                     { id: 'c', text: 'Remembering a single password is easier' }
//                 ]
//             }
//         ]
//     },
//     {
//         id: 2,
//         title: 'Going phishing',
//         description: 'Don\'t get baited!',
//         status: 'locked',
//         position: { x: 70, y: 300 },
//         brief: 'The inbox is a dangerous place. Some messages might be traps. Let\'s learn how to spot them before they bite.',
//         content: [
//             {
//                 id: 's1',
//                 type: 'theory',
//                 title: 'What Is Phishing?',
//                 text: 'Phishing is an attack where the attacker pretends to be a trusted source to steal information like passwords, OTPs, or card details. The target is not the computer, its you!'
//             },
//             {
//                 id: 's2',
//                 type: 'theory',
//                 title: 'Common phishing channels',
//                 text: 'Phishing doesn\'t only happen via email. It can arrive through SMS (smishing), phone calls (vishing), social media DMs, or fake websites. It is important to stay vigilant.'
//             },
//             {
//                 id: 's3',
//                 type: 'theory',
//                 title: 'Red flags for phishing',
//                 text: 'Phishing emails and messages often have create a sense of urgency, contain spelling mistakes, have strange sender addresses, contain unexpected attachments, and have links that don\'t match the real website. Always be suspicious of messages which contain such red flags.'
//             },
//             {
//                 id: 's4',
//                 type: 'quiz',
//                 question: 'What is Phishing?',
//                 options: [
//                     { id: 'a', text: 'Creating a weak password' },
//                     { id: 'c', text: 'Impersonating a trusted source to steal information', correct: true },
//                     { id: 'b', text: 'Trying all possible password combinations' }
//                 ]
//             },
//             {
//                 id: 's5',
//                 type: 'quiz',
//                 question: 'What do Phishing attacks mainly exploit?',
//                 options: [
//                     { id: 'c', text: 'Human trust', correct: true },
//                     { id: 'a', text: 'Weak passwords' },
//                     { id: 'b', text: 'Outdated hardware' },
//                 ]
//             },
//             {
//                 id: 's6',
//                 type: 'quiz',
//                 question: 'An email says "Your account will be locked in 10 minutes. Click on this link to verify." What\'s the red flag here?',
//                 options: [
//                     { id: 'a', text: 'Use of email' },
//                     { id: 'b', text: 'Correct spelling' },
//                     { id: 'c', text: 'Sense of urgency', correct: true }
//                 ]
//             },
//             {
//                 id: 's7',
//                 type: 'quiz',
//                 question: 'Which URL looks suspicious?',
//                 options: [
//                     { id: 'a', text: 'https://mail.google.com' },
//                     { id: 'c', text: 'https://google-login.security-check.com', correct: true },
//                     { id: 'b', text: 'https://accounts.google.com' },
//                 ]
//             }
//         ]
//     },
//     {
//         id: 3,
//         title: 'Malware Mayhem',
//         description: 'Pesky pest programs',
//         status: 'locked',
//         position: { x: 50, y: 450 },
//         brief: 'Not all bugs are harmless. Some eat your data.',
//         content: []
//     }
// ];

export const cybersecurityFacts = [
  "Cybercrime is set to cost businesses up to $10.5 trillion by 2025 and could reach as high as $15.63 trillion by 2029.",
  "Research suggests there's a worrying correlation between digital transformation and data breaches.",
  "Cybercrime costs are expected to escalate worldwide to almost $14 trillion by 2028.",
  "The industrial sector is experiencing the highest increase in data breach costs, rising by $830,000 on average year-on-year.",
  "Data breach costs are projected to be the highest in the U.S., followed by the Middle East, Benelux, and Germany.",
  "All four territories (U.S., Middle East, Benelux, and Germany) experience costs higher than the global average of $4.88 million, with the U.S. paying almost double this amount.",
  "Phishing attacks currently cost companies an average of $4.88 million to bounce back from.",
  "BEC attacks have already cost businesses more than $55 billion over a decade.",
  "Insurance carriers report an average loss of around $100,000 per claim.",
  "Written, direct premiums for cyber insurance are expected to reach $23 billion by the end of the year.",
  "On average, small businesses can expect to pay $120,000 to recover from a cyberattack.",
  "At least six in ten businesses are raising their prices to help recover the costs incurred by cyberattacks.",
  "Businesses are paying $53,000 per hour, on average, due to downtime caused by ransomware.",
  "The average cost of downtime from a DDoS (Distributed Denial of Service) attack is $6,130 per minute.",
  "The cost of recovering from a ransomware attack is currently, on average, ten times as much as the amount attackers demand in ransom.",
  "Cybersecurity ranks as the #2 biggest business threat to SMBs in 2025.",
  "Ransomware attacks are more than doubling year-on-year.",
  "The median time between hacker access and ransomware launch is 6.11 days for assumed and confirmed attacks.",
  "Transport for London suffered one of the highest-profile ransomware attacks, resulting in the loss of traveler contact details, Oyster card information, and bank numbers of up to 5,000 people.",
  "The healthcare industry reports the most expensive breaches at an average of $9.8 million – remaining at the top of industry costs for over a decade.",
  "More than 630 ransomware attacks affected healthcare bodies in a single year.",
  "Tools such as ChatGPT that are available for free to the public can generate up to 30 phishing email templates every hour.",
  "The FBI's IC3 department recently reported almost 21,500 complaints regarding BEC attacks in one year, with losses estimating more than $2.9 billion.",
  "Over half of all cloud breaches occur in part due to human error.",
  "Experts recently discovered 612 new, unique common vulnerabilities and exposures (CVEs) in one quarter.",
  "Operating systems with the most recorded CVEs include Debian Linux (8,809), Android (7,245), Linux Kernel (6,010), and Fedora (5,122).",
  "Vulnerabilities within the MoveIt framework exposed more than 93 million sensitive records.",
  "Industries most affected by MoveIt vulnerabilities included education, health, and finance.",
  "High-profile data breaches arising recently include Ticketmaster, which saw 560 million people's details compromised and up for sale online.",
  "On average, cross-industry, it takes companies 204 days to spot a data breach and 73 days to contain it.",
  "Financial companies take an average of 177 days to identify breaches, and 56 days to contain them.",
  "Across a decade, the number of U.S. data compromises per year increased from 614 to 3,205.",
  "U.S. data breaches impacted an estimated 353 million individuals in one year alone.",
  "The cost per capita of a data breach is increasing by around 1 USD per year.",
  "Companies that find and contain data breaches within 200 days are saving $1 million more than those that don't.",
  "It takes companies in the healthcare industry longer than any other to contain breaches.",
  "It takes entertainment businesses up to 287 days on average to detect a data breach compared to healthcare businesses' average of 255 days.",
  "The healthcare industry is the third-most attacked worldwide.",
  "The average cost of a data breach in healthcare was $9.77 million in 2024.",
  "Financial services are the third-most attacked industry based on phishing alone.",
  "The average financial services firm pays $5.9 million per data breach.",
  "The average cost of a data breach in financial services ranges from $5.86 to $6.08 million.",
  "The average cost of a data breach in the manufacturing industry in 2024 was $5.56 million.",
  "Each day of downtime costs schools up to $550,000.",
  "The average cost of a data breach for higher-ed bodies is around $3.65 million.",
  "Data breaches through ransomware cost the education sector more than $53 billion in downtime over a five-year period.",
  "The average data breach cost in the retail industry is $3.48 million.",
  "More than half of auto service cybersecurity leaders expect at least a full day of downtime for essential systems like payment processing, scheduling, or service bays after a cyberattack.",
  "Research shows yearly spending is estimated at $183.9 billion.",
  "Investment in security services is expected to grow more than investment in software or network security.",
  "The AI cybersecurity market is set to exceed $133 billion by 2030.",
  "Identity and access management, a type of zero-trust security strategy, is set to exceed market worth of $24.1 billion by the year's end.",
  "The cybersecurity industry has a talent shortage of four million professionals.",
  "Up to 570,000 cybersecurity roles remain unfilled in the U.S. alone.",
  "Texas, Florida, California, Colorado, Illinois, Virginia, Maryland, and New York are the states with the most U.S. cybersecurity openings.",
  "Up to 17,300 new jobs for IT security analysts are projected to open each year across the next decade.",
  "It's predicted GenAI will remove the need for specialized education for up to half of all entry-level roles in cybersecurity by 2028.",
  "The worldwide zero trust security market is projected to be worth almost $133 billion by 2032.",
  "The market size for cybersecurity insurance is set to top $20 billion.",
  "Google Cloud predicts major threats to cybersecurity in 2025 include AI attacks, continued disruption through ransomware, and evolving threats against Web3 companies.",
  "Hundreds of millions of commercial and private devices will become vulnerable with Microsoft ending support for its Windows 10 operating system in October 2025.",
  "Research suggests more than 2,300 unique cyberattacks occur every day.",
  "There are at least 23,900 known cybersecurity vulnerabilities that could encourage these attacks.",
  "BEC attacks rely on human error and misjudgment and are responsible for more than half of all social engineering attacks.",
  "Verizon research further claims around 3,661 social engineering attacks were accounted for in its broad study, with 3,032 disclosing data.",
  "2021 was a huge year for cyberattacks – bolstered by the enormous data breach affecting the social media developer RockYou, which lost 8.4 billion passwords, affecting 32 million different accounts.",
  "Gartner research predicts that the cybersecurity market will expand to $212 billion by the end of the year."
];

// 
export const getRandomFact = (): string => {
  const randomIndex = Math.floor(Math.random() * cybersecurityFacts.length);
  return cybersecurityFacts[randomIndex];
};

// Helper function to get multiple random facts
export const getRandomFacts = (count: number): string[] => {
  const shuffled = [...cybersecurityFacts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, cybersecurityFacts.length));
};