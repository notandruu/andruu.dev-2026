export interface SocialLink {
  id: string;
  icon: string;
  label?: string;
  href: string;
}

export interface AccordionItemData {
  id: string;
  title: string;
  year: string;
  iconType: 'custom' | 'image';
  iconContent: string;
  iconBgColor?: string;
  description?: string;
  hasMedia?: boolean;
  mediaType?: 'video' | 'image' | 'gallery';
  mediaUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  links?: { label: string; href: string; icon?: string }[];
}

export interface EducationItem {
  id: string;
  title: string;
  years: string;
  iconType: 'custom' | 'image';
  iconContent: string;
  iconBgColor?: string;
}

export const portfolioData = {
  profile: {
    name: "Andrew Liu",
    location: "Berkeley, CA",
    bio: "Software engineer and CS student at UC Berkeley building AI systems and onchain products",
    achievements: [
      "I build and ship production systems at scale",
      "Experience at Workday, HYBE, and Ameriprise Financial",
      "Built a startup to 100k ARR and 150k+ followers",
      "1st place B@BHacks 2026, 3x hackathon finalist"
    ],
    socialLinks: [
      { id: 'github', icon: 'github', label: '@notandruu', href: 'https://github.com/notandruu' },
      { id: 'linkedin', icon: 'linkedin', label: 'andrew liu', href: 'https://linkedin.com/in/liu-andrew' },
      { id: 'x', icon: 'x', label: '', href: 'https://x.com/notandruu' },
      { id: 'instagram', icon: 'instagram', label: '', href: 'https://instagram.com/andrewiiu22' },
      { id: 'youtube', icon: 'youtube', label: '', href: 'https://youtube.com/@andruu.22' },
      { id: 'spotify', icon: 'spotify', label: '', href: 'https://open.spotify.com/user/hueguueyr8qb8hzn9xodcpmnf' },
    ] as SocialLink[],
  },

  software: [
    {
      id: 'nuraform',
      title: 'nuraform.com',
      year: '2026',
      iconType: 'image',
      iconContent: '/logos/nuraform.png',
      description: "Describe a form in natural language and an AI agent builds it instantly. Built for businesses that collect signups, interest, and feedback. An agent processes every response in real time, generates summaries, extracts insights, and triggers follow up actions automatically. Got #2 Product of the Day on Product Hunt and has over 18k users on the platform.",
      hasMedia: true,
      mediaType: 'video',
      mediaUrl: '/videos/nuraform.mp4',
      links: [
        { label: 'Product Hunt', href: 'https://www.producthunt.com/products/nuraform', icon: 'producthunt' },
        { label: 'View Live', href: 'https://nuraform.com', icon: 'web' },
      ],
    },
    {
      id: 'sideline',
      title: 'tryteammate.com',
      year: '2026',
      iconType: 'image',
      iconContent: '/logos/tryteammate.png',
      description: "Onchain sports prediction market built on top of Polymarket that lives inside your iMessage group chats. Text what you want to bet on and the agent handles the rest: sourcing liquidity, placing positions onchain settled in RLUSD on the XRP Ledger, and settling outcomes trustlessly without leaving the conversation. Built with the Photon SDK.",
      githubUrl: 'https://github.com/notandruu/sideline',
      liveUrl: 'https://tryteammate.com',
      hasMedia: false,
    },
    {
      id: 'spectra',
      title: 'solvopay.xyz',
      year: '2026',
      iconType: 'image',
      iconContent: '/logos/logo-s.png',
      description: "Payment infrastructure for autonomous AI agents. Instead of charging a card per API call or tool invocation, agents deposit USDC once at session start and stream signed payment authorizations off-chain per action with no gas, no latency, and no block confirmation. At session end the final authorization settles onchain, unspent funds return automatically, and the locked deposit earns yield via Aave V3 the entire time. Built with Solidity, TypeScript, Python, Next.js, wagmi, viem, and Alchemy. Deployed on Base mainnet.",
      githubUrl: 'https://github.com/notandruu/solvopay',
      liveUrl: 'https://solvopay.xyz',
      hasMedia: false,
    },
    {
      id: 'scoreio',
      title: 'scoreio.xyz',
      year: '2026',
      iconType: 'image',
      iconContent: '/logos/scoreio.png',
      description: "Automated QA layer for AI training data pipelines. Configure LLM judges with custom rubrics to evaluate human-labeled submissions, track pass rates across annotation queues, and export QA reports for customer delivery. Supports multimodal evaluations including image and audio attachments forwarded to vision-capable models. In the space of Braintrust and Humanloop.",
      githubUrl: 'https://github.com/notandruu/ai-judge',
      liveUrl: 'https://scoreio.xyz',
      hasMedia: false,
    },
    {
      id: 'hashform',
      title: 'blockvault.fyi',
      year: '2025',
      iconType: 'image',
      iconContent: '/logos/logo-h.png',
      description: "Programmable DeFi escrow that earns yield while both parties wait. Lock USDC into a smart contract and it automatically deposits into Aave V3 on Base, accruing interest until the release condition is met. Set any condition at creation: a timestamp, manual approval, or a Chainlink oracle price feed. Yield splits between sender and recipient at settlement based on a configurable ratio. Built with Solidity, TypeScript, Python, Next.js, wagmi, viem, and Alchemy. Deployed on Base mainnet.",
      githubUrl: 'https://github.com/notandruu/blockvault',
      liveUrl: 'https://blockvault.fyi',
      hasMedia: false,
    },
    {
      id: 'staysafe',
      title: 'berkeleysafety.live',
      year: '2025',
      iconType: 'image',
      iconContent: '/logos/berkeleysafety.png',
      description: "Get a clear summary of what is happening around Berkeley before you step outside. An AI agent pulls WarnMe alerts and live incident reports, writes a human readable update, and plots every incident on a Google Map refreshed every 5 minutes. Built after receiving a WarnMe email with no indication of where it actually happened.",
      githubUrl: 'https://github.com/notandruu/staysafe-berkeley',
      liveUrl: 'https://berkeleysafety.live',
      hasMedia: false,
    },
    {
      id: 'synapse',
      title: 'nobrainr.app',
      year: '2024',
      iconType: 'image',
      iconContent: '/logos/logo-molecule.png',
      description: "Find the best gaming products without spending hours reading Reddit threads. An AI agent scrapes and analyzes millions of Reddit comments, extracts consensus picks, and surfaces the highest rated gear with concise takeaways in seconds. Updated daily with 10M+ comments processed.",
      githubUrl: 'https://github.com/notandruu/nobrainr-finds-best',
      liveUrl: 'https://nobrainr.app',
      hasMedia: false,
    },
    {
      id: 'bcal',
      title: 'bcal.app',
      year: '2024',
      iconType: 'image',
      iconContent: '/logos/logo-bear.png',
      githubUrl: 'https://github.com/notandruu/berkeleycalendar',
      description: "Connect your classes and every deadline lands in one place automatically. Syncs from bCourses, Gradescope, and Pensieve, two-way with Google Calendar, and surfaces everything in a single dashboard. Built this my freshman year at UC Berkeley to organize my assignments and make sure I never miss a deadline.",
      liveUrl: 'https://bcal.app',
      hasMedia: false,
    },
    {
      id: 'stemsters',
      title: 'stemsters.org',
      year: '2024',
      iconType: 'image',
      iconContent: '/logos/stemsters.png',
      description: "Operations platform managing 3,000+ users across 120+ franchise locations. Tracks session attendance, logs volunteer hours, and generates real-time reports for every site. 1,200+ weekly sessions and 60,000+ hours logged annually.",
      githubUrl: 'https://github.com/notandruu/stemsters-volunteer-hours',
      hasMedia: false,
      links: [
        { label: 'View Live', href: 'https://hours.stemsters.org', icon: 'web' },
        { label: 'Instagram', href: 'https://www.instagram.com/_stemsters_', icon: 'instagram' },
      ],
    },
  ] as AccordionItemData[],

  awards: [
    {
      id: 'babhacks-overall',
      title: '1st Overall, B@BHacks',
      year: '2026',
      iconType: 'image',
      iconContent: '/logos/bab.jpeg',
      description: "Presented by Anthropic, Coinbase, and Solana Foundation. Best overall project at B@B Hacks 2026, winning $2.5k. Lapis is a platform that helps startups raise money without traditional VC gatekeeping. An AI agent scores each startup based on traction, code activity, and pitch quality, then a prediction market lets the crowd set the valuation. Equity is settled on the XRP Ledger using escrow and smart contracts with a legally binding agreement.",
      hasMedia: true,
      mediaType: 'video',
      mediaUrl: '/videos/lapis.mp4',
      githubUrl: 'https://github.com/notandruu/lapis',
      links: [
        { label: 'View Live', href: 'https://lapis.bet', icon: 'web' },
        { label: 'Devpost', href: 'https://devpost.com/software/lapis-js26kq', icon: 'devpost' },
      ],
    },
    {
      id: 'babhacks-sui',
      title: '1st Sui Track, B@BHacks',
      year: '2026',
      iconType: 'image',
      iconContent: '/logos/sui.jpeg',
      description: "Won 1st place in the Sui Foundation track at Blockchain at Berkeley's 2026 hackathon with Stephen Hung, Sumin Cho, and Kelly Yang. Solved onchain CTF challenges on Sui testnet, exploiting smart contract vulnerabilities across the Sui object model.",
      hasMedia: false,
      links: [
        { label: 'View Source', href: 'https://github.com/MystenLabs/CTF', icon: 'github' },
      ],
    },
    {
      id: 'openai-parameter-golf',
      title: 'OpenAI Parameter Golf',
      year: '2026',
      iconType: 'image',
      iconContent: '/logos/openai.png',
      description: "OpenAI's global model compression competition. Built the smallest possible language model under a 16MB artifact limit, trained in under 10 minutes on 8xH100s, evaluated on bits-per-byte compression against the FineWeb dataset. Finished top 100 out of thousands of submissions worldwide.",
      hasMedia: false,
      links: [
        { label: 'View Source', href: 'https://github.com/openai/parameter-golf/pulls', icon: 'github' },
        { label: 'Leaderboard', href: 'https://openai.com/index/parameter-golf/', icon: 'web' },
      ],
    },
    {
      id: 'calhacks',
      title: 'Ethereum Track, CalHacks',
      year: '2025',
      iconType: 'image',
      iconContent: '/logos/calhacks.png',
      description: "Presented at UC Berkeley's largest hackathon. Built CaseInterviewer, an AI voice agent that runs mock consulting interviews in real time. It adapts questions on the fly, generates data exhibits mid conversation, and scores you step by step. Sessions are paid in ETH via micropayments on L2, with a staking mechanic that returns funds only if you hit a score threshold.",
      githubUrl: 'https://github.com/notandruu/caseinterviewer',
      liveUrl: 'https://caseinterviewer.com',
      hasMedia: false,
    },
    {
      id: 'google-cloud-agent',
      title: 'Google Cloud Agent Hackathon',
      year: '2025',
      iconType: 'image',
      iconContent: '/logos/google.png',
      description: "Built for the Google Cloud Agent Development Kit Hackathon. BloxCode turns natural language descriptions into complete Roblox game code. Four agents work in sequence: a planner agent extracts game mechanics, a code gen agent writes Luau scripts, a validator agent catches broken API calls and deprecated methods, and an assembler agent stitches everything into proper Roblox Studio hierarchy. Built with Google Cloud Agent Development Kit, Gemini, and Cloud Run.",
      githubUrl: 'https://github.com/notandruu/roblox-coding-agent',
      hasMedia: false,
    },
    {
      id: 'treehacks',
      title: 'Web3 Track, TreeHacks',
      year: '2025',
      iconType: 'image',
      iconContent: '/logos/treehacks.png',
      description: "Presented at Stanford's premier hackathon. Built a high performance storage layer for blockchain infrastructure from scratch in C++. Distributed database that handles 120,000+ operations per second across multiple servers with automatic replication and 2.5x speed scaling under load. Designed to power blockchain node state, validator mempools, and on chain indexing at scale.",
      githubUrl: 'https://github.com/notandruu/distributed-kvstore',
      hasMedia: false,
    },
  ] as AccordionItemData[],

  hiddenWork: [
    {
      id: 'bab',
      title: 'Developer, Blockchain at Berkeley',
      year: '2026',
      iconType: 'image',
      iconContent: '/logos/bab.jpeg',
      description: "Shipping smart contract applications and full-stack dApps for company consulting engagements through UC Berkeley's blockchain org. Contribute to open-source protocol research and run technical workshops for student developers.",
      hasMedia: false,
    },
    {
      id: 'hexlayer',
      title: 'getaurora.app',
      year: '2025',
      iconType: 'image',
      iconContent: '/logos/logo-hex.png',
      description: "AI browser extension that lets you chat with any webpage, PDF, or image without leaving your tab. Connects to Claude Sonnet 4.6, GPT-4o, and Gemini 2.0 Flash through a sidebar, builds a knowledge base from your highlights and saved content, and lets you query everything you have collected with a single prompt. Includes a prompt library, custom prompt management, and drag and drop file integration.",
      githubUrl: 'https://github.com/notandruu/aurora',
      liveUrl: 'https://getaurora.app',
      hasMedia: false,
    },
  ] as AccordionItemData[],

  work: [
    {
      id: 'pse',
      title: 'Director of Technology, Pi Sigma Epsilon',
      year: '2025',
      iconType: 'image',
      iconContent: '/logos/pse.jpeg',
      description: "Built the chapter website and automated the consulting team's client intake pipeline for UC Berkeley's professional business fraternity. Owned all digital infrastructure and tooling across the org's 100+ member operations.",
      hasMedia: false,
    },
    {
      id: 'wadhwani',
      title: 'Software Engineer, Wadhwani AI',
      year: '2025',
      iconType: 'image',
      iconContent: '/logos/wadhwani.png',
      description: "Built speech recognition pipelines on curated audio datasets for literacy assessment, reducing word error rate to within 5% of human annotators across 11 million evaluations. Engineered ASR evaluation tooling and audio alignment services for labeled data pipelines.",
      hasMedia: false,
    },
    {
      id: 'workday',
      title: 'Software Developer, Workday',
      year: '2025',
      iconType: 'image',
      iconContent: '/logos/workday.png',
      description: "Built backend services powering AI-generated learning content across Workday's enterprise education platform. Shipped a caching layer that cut response times by 30% and architected the core request handling layer serving thousands of enterprise customers concurrently.",
      hasMedia: false,
    },
    {
      id: 'ameriprise',
      title: 'Data Analyst, Ameriprise Financial',
      year: '2025',
      iconType: 'image',
      iconContent: '/logos/ameriprise.png',
      description: "Built data pipelines and dashboards for Ameriprise's financial planning tools, covering portfolio tracking, budgeting, and goal modeling. Worked directly with advisors to surface insights from client data and improve how financial information is visualized and presented.",
      hasMedia: false,
    },
    {
      id: 'stemsters-work',
      title: 'Co-Founder, Stemsters',
      year: '2024',
      iconType: 'image',
      iconContent: '/logos/stemsters.png',
      description: "Co-founded and scaled a national STEM education startup to 120+ franchise locations and $100k ARR. Built all internal tooling, led the partnership pipeline that expanded to 150k social media followers, and developed the curriculum deployed across every franchise.",
      hasMedia: false,
      links: [
        { label: 'stemsters.org', href: 'https://stemsters.org', icon: 'web' },
        { label: '@_stemsters_', href: 'https://instagram.com/_stemsters_', icon: 'instagram' },
        { label: '@stemsters', href: 'https://www.tiktok.com/@stemsters', icon: 'tiktok' },
      ],
    },
  ] as AccordionItemData[],

  education: [
    {
      id: 'berkeley',
      title: 'Computer Science, UC Berkeley',
      years: '2024 - 2028',
      iconType: 'image',
      iconContent: '/logos/berkeley.svg',
    },
    {
      id: 'arcadia',
      title: 'Arcadia High School',
      years: '2020 - 2024',
      iconType: 'image',
      iconContent: '/logos/arcadia.jpg',
    },
  ] as EducationItem[],
};
