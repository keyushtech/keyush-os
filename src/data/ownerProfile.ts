// ============================================================
// OWNER PROFILE DATA CONTRACT — Keyush Sai Velagapudi
// Single source of truth for all visible identity, proof,
// projects, socials, and content. Edit here only.
// ============================================================

export const ownerProfile = {
  identity: {
    fullName: 'Keyush Sai Velagapudi',
    shortName: 'Keyush',
    osName: 'Keyush OS',
    domain: 'keyushtech.vercel.app',
    location: 'IIT Bhilai, India',
    timezone: 'IST / UTC+5:30',
    timezoneOffset: '+05:30',
    roles: ['AI Builder', 'Cloud Architect', 'CSE Undergrad', 'Google Student Ambassador'],
    headline: 'Keyush Sai Velagapudi',
    subHeadline: 'B.Tech CSE @ IIT Bhilai · Top 10 National Google Student Ambassador · Google Certified Associate Cloud Engineer',
    positioning: 'Building low-latency agentic systems, scalable cloud infrastructure, and deliberate software.',
    portrait: 'https://github.com/keyushtech.png',
    pronouns: 'He/Him',
    availability: 'Open for summer/fall internships & technical roles',
    osVersion: '1.0.0',
  },

  imageGeneration: {
    mode: 'approved-assets-only' as const,
    provider: '',
    model: '',
    apiKeyEnvironmentVariable: '',
    approvedSourceImages: ['https://github.com/keyushtech.png'],
    likenessNotes: 'Circular avatar from GitHub, 1px white border, menu bar only.',
    requiredOutputs: [],
    finalApprovalBy: 'Keyush Sai Velagapudi',
  },

  conversion: {
    primaryLabel: 'Connect on LinkedIn',
    primaryUrl: 'https://www.linkedin.com/in/keyush-sai/',
    secondaryLabel: 'View Resume',
    secondaryUrl: '/resume',
    bookingUrl: '',
    whatsappUrl: '',
    email: 'velagapudik@iitbhilai.ac.in',
    emailDisplay: 'velagapudik@iitbhilai.ac.in',
    emergencyLabel: 'Email directly',
    emergencyUrl: 'mailto:velagapudik@iitbhilai.ac.in',
    buildThisUrl: 'https://github.com/keyushtech/keyush-os',
  },

  metrics: [
    {
      value: '99.43%ile',
      label: 'JEE Mains',
      status: 'verified' as const,
      source: 'National Testing Agency official scorecard',
      public: true,
      lastVerified: '2024-04-01',
    },
    {
      value: '895',
      label: 'JEE Advanced Category Rank',
      status: 'verified' as const,
      source: 'JEE Advanced official scorecard',
      public: true,
      lastVerified: '2024-06-01',
    },
    {
      value: '710',
      label: 'EAMCET Rank',
      status: 'verified' as const,
      source: 'EAMCET official scorecard',
      public: true,
      lastVerified: '2024-06-01',
    },
    {
      value: '149/160',
      label: 'Duolingo English Test',
      status: 'verified' as const,
      source: 'Duolingo official certificate',
      public: true,
      lastVerified: '2024-01-01',
    },
    {
      value: 'ACE',
      label: 'Google Certified Associate Cloud Engineer',
      status: 'verified' as const,
      source: 'Google Cloud certification portal',
      public: true,
      lastVerified: '2024-01-01',
    },
    {
      value: '59k+',
      label: 'Google Crowdsource contributions (Lvl 28)',
      status: 'verified' as const,
      source: 'Google Crowdsource profile',
      public: true,
      lastVerified: '2024-11-01',
    },
    {
      value: 'Top 10',
      label: 'National Google Student Ambassador',
      status: 'verified' as const,
      source: 'Google Student Ambassador Program',
      public: true,
      lastVerified: '2024-01-01',
    },
  ],

  projects: [
    {
      id: 'grand-scheme',
      name: 'The Grand Scheme',
      client: 'IIT Bhilai',
      category: 'Full-Stack Campus Platform / Local & Cloud AI',
      dates: '2024–Present',
      role: 'Architect & Lead Engineer',
      problem:
        'Fragmented campus workflows, manual complaints, high LLM rate limits, and insecure peer-to-peer student commerce with no moderation layer.',
      intervention:
        'P2P marketplace with automated client-side HTML5 Canvas image compression, real-time Firestore sync, Gemini Flash multimodal image moderation, live complaints tracker with admin assignment, and "Campus Oracle" running local Llama 3.1 (128k context) via Ollama to query the full 193-page IIT Bhilai rulebook—zero rate limits.',
      outcome:
        'Production deployment serving the IIT Bhilai student body. Hybrid Ollama + Gemini orchestration resolves the rate-limit vs. cost trade-off at 128k context.',
      outcomeStatus: 'verified' as const,
      url: 'https://iit-bhilai-f4a14.web.app',
      repository: 'https://github.com/keyushtech/The-Grand-Scheme',
      image: '',
      stack: ['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Firebase Auth', 'Firestore', 'Firebase Hosting', 'Google Generative AI (Gemini Flash)', 'Ollama (Llama 3.1)'],
      services: ['Full-Stack Engineering', 'AI Systems', 'Cloud Infrastructure'],
      featured: true,
    },
    {
      id: 'aura-ai',
      name: 'Aura AI Assistant',
      client: 'Personal',
      category: 'Agentic AI & Memory Systems',
      dates: '2024',
      role: 'Solo Engineer',
      problem: 'No persistent-memory personal assistant with low-latency streaming inference and conversational task automation.',
      intervention:
        'Full-stack personal assistant with persistent memory layers, low-latency streaming inference, and conversational task automation.',
      outcome: 'Functional personal AI assistant with multi-layer memory architecture.',
      outcomeStatus: 'founder-reported' as const,
      url: '',
      repository: 'https://github.com/keyushtech',
      image: '',
      stack: ['FastAPI', 'Gemini API', 'Node.js', 'Firebase', 'Tailwind CSS'],
      services: ['AI Systems', 'Full-Stack Engineering'],
      featured: true,
    },
    {
      id: 'pacman',
      name: 'Multi-Threaded Pac-Man Engine',
      client: 'Personal',
      category: 'Systems Programming & Game Engines',
      dates: '2023',
      role: 'Solo Engineer',
      problem: 'Understanding concurrent state machines and deterministic game-loop architecture.',
      intervention:
        'Deterministic arcade game engine with concurrent ghost state machines and tick-rate event loops.',
      outcome: 'Fully playable arcade engine demonstrating multi-threading primitives.',
      outcomeStatus: 'verified' as const,
      url: '',
      repository: 'https://github.com/keyushtech',
      image: '',
      stack: ['Python', 'Multi-threading', 'Turtle Graphics'],
      services: ['Systems Programming'],
      featured: false,
    },
    {
      id: 'gearbox',
      name: 'Parametric Mechanical Gearbox',
      client: 'Academic',
      category: '3D CAD & Kinematic Modeling',
      dates: '2023',
      role: 'Solo Designer',
      problem: 'High-tolerance kinematic modeling for mechanical simulation coursework.',
      intervention: 'High-tolerance parametric gearbox assembly with kinematic motion simulation.',
      outcome: 'Completed parametric assembly with validated kinematic motion paths.',
      outcomeStatus: 'verified' as const,
      url: '',
      repository: '',
      image: '',
      stack: ['Autodesk Fusion', 'Siemens Solid Edge'],
      services: ['3D CAD', 'Mechanical Design'],
      featured: false,
    },
    {
      id: 'telemetry-pipeline',
      name: 'Algorithmic Telemetry & Sync Pipeline',
      client: 'Personal',
      category: 'Developer Automation',
      dates: '2023',
      role: 'Solo Engineer',
      problem: 'Manual synchronization of competitive programming submissions across languages.',
      intervention: 'Automated synchronization of C++ and Python 3 competitive programming submissions to GitHub via CI.',
      outcome: 'Zero-touch submission sync pipeline running on GitHub Actions.',
      outcomeStatus: 'verified' as const,
      url: '',
      repository: 'https://github.com/keyushtech',
      image: '',
      stack: ['C++', 'Python 3', 'GitHub Actions'],
      services: ['Developer Automation', 'CI/CD'],
      featured: false,
    },
  ],

  journey: [
    {
      year: '2021',
      title: 'Discipline at the Foundation',
      story:
        'Rigorous secondary education at RIMC and Sainik School Korukonda. Systems thinking and discipline forged under structured military-academic environments.',
      skill: 'Systems Thinking · Discipline',
      relatedProject: '',
    },
    {
      year: '2024',
      title: 'IIT Bhilai — CSE Class of 2029',
      story:
        '99.43 percentile in JEE Mains and Category Rank 895 in JEE Advanced. Joined the B.Tech CSE program at IIT Bhilai.',
      skill: 'Computer Science · Algorithms',
      relatedProject: '',
    },
    {
      year: '2024',
      title: 'Google Certified Associate Cloud Engineer',
      story:
        'Earned the Google Cloud ACE certification—validating production-grade competency in GCP infrastructure, IAM, networking, and compute.',
      skill: 'GCP · Cloud Architecture',
      relatedProject: '',
    },
    {
      year: '2024',
      title: 'Top 10 National Google Student Ambassador',
      story:
        'Selected among the top 10 nationally from the Google Student Ambassador Program, representing IIT Bhilai in Google\'s developer ecosystem.',
      skill: 'Community Leadership · Developer Advocacy',
      relatedProject: '',
    },
    {
      year: '2024',
      title: 'The Grand Scheme — Production Launch',
      story:
        'Architected and shipped a campus-scale super app to the IIT Bhilai student body. The hardest challenge: balancing local 128k context Llama inference vs. serverless cloud—solved with hybrid Ollama + Gemini orchestration.',
      skill: 'Full-Stack · AI Orchestration · Firebase',
      relatedProject: 'grand-scheme',
    },
  ],

  achievements: [
    {
      id: 'jee-mains',
      category: 'Academic',
      title: 'JEE Mains 99.43%ile',
      description: 'National rank in Joint Entrance Examination (Mains) — top 0.57% nationally.',
      badge: '🎯',
      status: 'verified' as const,
    },
    {
      id: 'jee-advanced',
      category: 'Academic',
      title: 'JEE Advanced Cat. Rank 895',
      description: 'Category rank in JEE Advanced — qualifying for IIT admission.',
      badge: '📐',
      status: 'verified' as const,
    },
    {
      id: 'ace-cert',
      category: 'Technical',
      title: 'Google Associate Cloud Engineer',
      description: 'Industry certification validating GCP infrastructure, IAM, networking, and compute competency.',
      badge: '☁️',
      status: 'verified' as const,
    },
    {
      id: 'gsap',
      category: 'Community',
      title: 'Top 10 National Google Student Ambassador',
      description: 'Selected nationally among the Google Student Ambassador Program cohort representing IIT Bhilai.',
      badge: '🌐',
      status: 'verified' as const,
    },
    {
      id: 'crowdsource',
      category: 'Community',
      title: 'Level 28 Google Crowdsource',
      description: '59,000+ contributions to Google\'s AI training datasets.',
      badge: '⭐',
      status: 'verified' as const,
    },
    {
      id: 'duolingo',
      category: 'Academic',
      title: 'Duolingo English Test 149/160',
      description: 'Official English proficiency certification scoring 149 out of 160.',
      badge: '🗣️',
      status: 'verified' as const,
    },
    {
      id: 'grand-scheme-ship',
      category: 'Shipped Work',
      title: 'Campus Super App — Production',
      description: 'Architected and shipped The Grand Scheme to the IIT Bhilai student body.',
      badge: '🚀',
      status: 'verified' as const,
    },
    {
      id: 'pole-star',
      category: 'Community',
      title: 'Pole-Star Mentor — Open Links Foundation',
      description: 'Peer mentorship program supporting students through academic transitions.',
      badge: '🌟',
      status: 'verified' as const,
    },
  ],

  services: [
    {
      id: 'ai-systems',
      name: 'Full-Stack AI & Agentic Systems',
      description: 'End-to-end agentic pipelines, memory systems, and LLM orchestration for production.',
    },
    {
      id: 'cloud-arch',
      name: 'Cloud & Event-Driven Infrastructure (GCP)',
      description: 'GCP-native architectures: Cloud Run, Pub/Sub, Firebase, IAM, and CI/CD pipelines.',
    },
    {
      id: 'distributed',
      name: 'Real-Time Distributed Applications',
      description: 'Low-latency, event-driven systems with real-time sync, concurrent state machines, and sub-second UX.',
    },
  ],

  socials: [
    {
      network: 'GitHub',
      handle: 'keyushtech',
      url: 'https://github.com/keyushtech',
      purpose: 'Open-source projects, competitive programming, portfolio source',
      status: 'active',
    },
    {
      network: 'LinkedIn',
      handle: 'keyush-sai',
      url: 'https://www.linkedin.com/in/keyush-sai/',
      purpose: 'Professional network, internship applications, technical community',
      status: 'active',
    },
    {
      network: 'Email',
      handle: 'velagapudik@iitbhilai.ac.in',
      url: 'mailto:velagapudik@iitbhilai.ac.in',
      purpose: 'Direct professional contact',
      status: 'active',
    },
  ],

  founderTxt: `Keyush Sai Velagapudi
CSE Undergrad @ IIT Bhilai | Cloud Architect & AI Systems Builder

WHO I AM
───────────────────────────────
Builder. Systems thinker. Developer by discipline.
Top 10 National Google Student Ambassador.
Google Certified Associate Cloud Engineer.
Currently: B.Tech CSE @ IIT Bhilai (Class of 2029).

WHAT I BUILD
───────────────────────────────
Production systems that solve real friction.

From campus-scale super apps with local AI oracles
to event-driven GCP cloud pipelines—
I build software that runs fast and doesn't break.

No prototypes. No vaporware.
If I ship it, it's in production.

HOW I WORK
───────────────────────────────
High signal. Low ceremony.

Deep understanding of the primitives
before reaching for an abstraction.

The stack is a tool—not a personality.

STANDARDS I DON'T COMPROMISE
───────────────────────────────
→ Clean architecture over clever hacks
→ Deterministic state management
→ Sub-second latency targets
→ Zero corporate bloat
→ If it can't be explained simply, it's not understood

WHAT I'M CURRENTLY EXPLORING
───────────────────────────────
→ Hybrid local/cloud LLM orchestration at scale
→ Event-driven GCP infrastructure patterns
→ Low-latency agentic memory systems

WHO I WANT TO WORK WITH
───────────────────────────────
Engineers who care about the craft.
Teams building things that matter.
Recruiters from Google, GCP, and deep-tech orgs.

CONTACT
───────────────────────────────
velagapudik@iitbhilai.ac.in
linkedin.com/in/keyush-sai
github.com/keyushtech`,

  legal: {
    copyrightOwner: 'Keyush Sai Velagapudi',
    assetLicenses: [
      { asset: 'Lucide Icons', license: 'ISC', url: 'https://lucide.dev/license' },
      { asset: 'JetBrains Mono', license: 'SIL OFL 1.1', url: 'https://www.jetbrains.com/legalforms/font-license/' },
    ],
    metricDisclaimer: 'All academic and certification metrics are officially certified or verifiable via production deployments and scorecards.',
  },
};

export type OwnerProfile = typeof ownerProfile;
export type Project = typeof ownerProfile.projects[0];
export type Metric = typeof ownerProfile.metrics[0];
export type Achievement = typeof ownerProfile.achievements[0];
export type JourneyItem = typeof ownerProfile.journey[0];

