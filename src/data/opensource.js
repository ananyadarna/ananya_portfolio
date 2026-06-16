export const globalStats = [
  { label: 'PRs Merged', num: '22' },
  { label: 'Merge Rate', num: '92%' },
  { label: 'Repositories', num: '6' }
]

export const contributions = [
  {
    id: 1,
    title: 'Truxify',
    subtitle: 'Logistics Intelligence Platform',
    platform: 'GSSoC\'26 Contributor',
    repoUrl: 'https://github.com/KanishJebaMathewM/Truxify',
    year: '2026',
    prs: [
      { num: '#422', url: 'https://github.com/KanishJebaMathewM/Truxify/pull/422' },
      { num: '#384', url: 'https://github.com/KanishJebaMathewM/Truxify/pull/384' },
      { num: '#376', url: 'https://github.com/KanishJebaMathewM/Truxify/pull/376' }
    ],
    bullets: [
      'Bootstrapped FastAPI ML inference service with Docker support, establishing the ML engine foundation (level: intermediate, gssoc:approved).',
      'Authored critical-level test suite covering BYPASS_AUTH, requireRole, WebSocket, Redis, and MongoDB — production-grade security and infrastructure testing.',
      'Added integration + unit tests for auth, bids, and driver API routes; improved coverage of security-sensitive endpoints (level: advanced).'
    ],
    stack: ['FastAPI', 'Docker', 'MongoDB', 'Redis', 'Python', 'WebSockets']
  },
  {
    id: 2,
    title: 'FixNearby',
    subtitle: 'Local Services Platform',
    platform: 'NSoC\'26 Contributor',
    repoUrl: 'https://github.com/souma9830/FixNearby',
    year: '2026',
    prs: [
      { num: '#246', url: 'https://github.com/souma9830/FixNearby/pull/246' }
    ],
    bullets: [
      'Implemented worker auth middleware and request validation for secure onboarding flow (level 3).',
      'Resolved JSX syntax crashes, CORS misconfiguration, Vercel SPA routing, and Bookings page UI bugs across multiple PRs.'
    ],
    stack: ['React', 'Node.js', 'Express', 'Vite', 'JavaScript', 'Auth Middleware']
  },
  {
    id: 3,
    title: 'github_tracker',
    subtitle: 'Open Source Analytics & Tracker',
    platform: 'GSSoC\'26 Contributor',
    repoUrl: 'https://github.com/GitMetricsLab/github_tracker',
    year: '2026',
    prs: [
      { num: '#533', url: 'https://github.com/GitMetricsLab/github_tracker/pull/533' }
    ],
    bullets: [
      'Built GitHub API rate limit handling UI with graceful degradation feedback (level: intermediate, gssoc:approved).',
      'Fixed dead code (undefined authError destructure) and component naming inconsistency; improved codebase quality.'
    ],
    stack: ['React', 'Vite', 'REST API', 'JavaScript', 'Tailwind CSS']
  }
]
