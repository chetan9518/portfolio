/**
 * Single source of truth for all portfolio content.
 * Everything here is taken from the résumé — update this file, not the components.
 */

export const profile = {
  name: 'Chetan',
  role: 'Software Engineer · Full-Stack',
  email: 'chetan951817@gmail.com',
  resume: '/Chetan-Resume.pdf',
  availability: 'Open to SWE internships & 2027 new-grad roles',
  links: {
    github: 'https://github.com/chetan9518',
    linkedin: 'https://www.linkedin.com/in/chetan-bb87bb31a',
    leetcode: 'https://leetcode.com/u/chetan9518',
    source: 'https://github.com/chetan9518/portfolio',
  },
} as const;

export const education = {
  school: 'IIIT Agartala',
  schoolFull: 'Indian Institute of Information Technology, Agartala',
  degree: 'B.Tech in Computer Science & Engineering',
  graduation: 'Expected Aug 2027',
  cgpa: '7.74 / 10',
  coursework: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'DBMS',
    'Operating Systems',
    'Computer Networks',
    'System Design',
  ],
};

export type SkillGroup = { label: string; items: string[] };

/** The tools that show up across every project — surfaced first. */
export const coreStack = ['TypeScript', 'Node.js', 'PostgreSQL', 'React', 'Redis', 'C++'];

export const skills: SkillGroup[] = [
  { label: 'Languages', items: ['C++', 'TypeScript', 'JavaScript', 'Python', 'SQL', 'C'] },
  {
    label: 'Backend',
    items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'WebSockets', 'Zod'],
  },
  { label: 'Auth & Security', items: ['JWT', 'OAuth 2.0', 'OTP authentication', 'Role-based access control'] },
  { label: 'Frontend & Mobile', items: ['React', 'Next.js', 'React Native (Expo)', 'Tailwind CSS'] },
  {
    label: 'Data',
    items: ['PostgreSQL', 'Prisma ORM', 'MongoDB', 'Redis', 'Schema design', 'Transactions'],
  },
  { label: 'ML', items: ['scikit-learn', 'Random Forest', 'Feature extraction', 'Model evaluation'] },
  {
    label: 'Cloud & Tooling',
    items: ['Git / GitHub', 'AWS S3 (pre-signed URLs)', 'Render', 'Cloudflare Pages', 'Vercel'],
  },
];

export type Project = {
  id: string;
  name: string;
  kind: string;
  summary: string;
  problem: string;
  built: string[];
  decisions: { title: string; body: string }[];
  stack: string[];
  github: string;
  live?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    id: 'skillmatch',
    name: 'SkillMatch',
    kind: 'Skill-based networking platform',
    summary:
      'A platform where developers find collaborators by skills and project goals, with real-time chat and file sharing, deployed end to end.',
    problem:
      'Finding collaborators usually means scrolling through profiles that don’t say what someone can build or wants to build next.',
    built: [
      'Relational PostgreSQL schema (Prisma) and REST API for developer profiles, skills and project goals, with filtered SQL queries for collaborator discovery.',
      'Layered authentication: Redis-backed OTP verification with TTL expiry, JWT sessions and Google OAuth 2.0.',
      'WebSocket real-time chat and direct-to-S3 uploads through pre-signed URLs.',
      'Frontend deployed on Cloudflare Pages, backend on Render.',
    ],
    decisions: [
      {
        title: 'Validate at the boundary',
        body: 'Every request payload is parsed with Zod before it reaches business logic, so handlers work with typed, trusted data.',
      },
      {
        title: 'OTPs that expire themselves',
        body: 'Codes live in Redis with a TTL, so expiry is enforced by the store rather than by cleanup jobs.',
      },
      {
        title: 'Keep files off the API',
        body: 'Clients upload straight to S3 with pre-signed URLs; the server only signs, so it never streams file bytes.',
      },
    ],
    stack: ['React', 'TypeScript', 'Express.js', 'PostgreSQL', 'Prisma', 'Redis', 'AWS S3', 'WebSockets', 'Zod'],
    github: 'https://github.com/chetan9518/skillmatch',
    live: 'https://skillmatchbackeddatabase.pages.dev/',
  },
  {
    id: 'safestep',
    name: 'SafeStep',
    kind: 'ML fall-detection prototype',
    summary:
      'A fall-detection pipeline: a Random Forest trained on wearable-sensor data, served by FastAPI and fed by an Expo app that reads the phone’s motion sensors.',
    problem:
      'Falls are easy to miss when someone is alone. The question was whether motion-sensor windows carry enough signal to tell a fall from daily activity.',
    built: [
      'Random Forest classifier trained on SisFall waist-sensor recordings, using 33 features extracted from 4-second windows at 50 Hz.',
      'Five-fold subject-independent validation, so no subject appears in both training and test folds.',
      'FastAPI inference backend and an Expo app that reads accelerometer and gyroscope data.',
      'Automated backend and mobile tests, plus an end-to-end replay demonstration.',
    ],
    decisions: [
      {
        title: 'Split by subject, not by sample',
        body: 'Random splits would leak one person’s movement patterns into the test set and inflate results.',
      },
    ],
    stack: ['Python', 'scikit-learn', 'FastAPI', 'React Native', 'Expo'],
    github: 'https://github.com/chetan9518/safestep',
    note: 'Academic prototype, validated on SisFall data only and not yet on smartphone data.',
  },
  {
    id: 'skillpay',
    name: 'SkillPay',
    kind: 'Digital wallet application',
    summary:
      'A peer-to-peer wallet where correctness matters more than features: transfers are all-or-nothing and every route is access-controlled.',
    problem:
      'A wallet that debits one account and crashes before crediting the other loses money. Transfers have to be atomic.',
    built: [
      'Peer-to-peer transfers inside atomic database transactions, so a failed transfer never leaves partial balance updates.',
      'REST routes secured with JWT and role-based access control (admin / user).',
      'Token validation cached in Redis to reduce database lookups on authenticated requests.',
    ],
    decisions: [
      {
        title: 'All-or-nothing transfers',
        body: 'Debit and credit commit together or roll back together, so balances always add up.',
      },
    ],
    stack: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Redis', 'JWT'],
    github: 'https://github.com/chetan9518/Skillpay',
  },
];

export const openSource = {
  repo: 'aws-powertools/powertools-lambda-typescript',
  project: 'Powertools for AWS Lambda (TypeScript)',
  pr: 4146,
  url: 'https://github.com/aws-powertools/powertools-lambda-typescript/pull/4146',
  summary:
    'Refactored core utility functions to reduce duplication and improve readability. Merged by AWS maintainers after several rounds of code review.',
};

export const achievements = [
  {
    title: '300+ problems on LeetCode',
    body: 'Arrays, graphs, dynamic programming and trees, mostly in C++.',
    href: profile.links.leetcode,
    linkLabel: 'LeetCode profile',
  },
  {
    title: 'AlgoUniversity Graph Theory Camp',
    body: 'Completed the programming camp and solved 17 advanced graph problems under a Codeforces Master’s mentorship.',
  },
];
