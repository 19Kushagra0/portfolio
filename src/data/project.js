export const projectsData = [
  {
    id: 16,
    number: "15",
    category: "RAG",
    title: "CoralStats: AI-Powered Discord Analytics",
    description:
      "CoralStats is an intelligent Discord analytics dashboard that turns raw community data into actionable insights. Powered by a custom local-first SQL engine called 'Coral' and an AI co-pilot called 'Grok', it translates plain English questions into valid SQL queries, executing them against live API data.",
    image: "/projects/discord-analyzer.png",
    tags: ["Next.js", "Firebase", "SQL", "Grok / LLaMA 3.3"],
    features: [
      "Natural Language to SQL Pipeline for intelligent querying",
      "Custom Coral SQL Engine parsing SELECT, WHERE, and JOINs",
      "Enterprise-Grade Identity Dashboard with server mapping",
      "Streaming LLM Responses via Next.js Edge APIs",
    ],
    problem:
      "Community managers often fly blind or dig through massive developer portals to find simple insights. Standard AI bots can hallucinate hard numbers. CoralStats solves this by treating external APIs as relational tables for exact-match SQL translation.",
    learned:
      "Built local SQL regex parsing logic from scratch to handle complex queries. Optimized two-stage latency using Groq's high-speed inference and learned to multiplex a ReadableStream to send JSON metadata before text tokens.",
    links: {
      live: "https://discord-analyzer-five.vercel.app/",
      github: "https://github.com/19Kushagra0/discord-analyzer",
    },
  },
  {
    id: 15,
    number: "14",
    category: "Full Stack",
    title: "DineFlow CRM",
    description:
      "DineFlow is a Michelin-service restaurant CRM and operations suite engineered to streamline front-of-house and kitchen communications. Designed for high-volume, premium dining environments, it ensures seamless synchronization between orders, table management, and customer loyalty programs.",
    image: "/projects/crm.png",
    tags: ["Next.js", "Tailwind CSS", "Zustand", "CSS Modules"],
    features: [
      "Real-time Kitchen Display System (KDS) for instant order sync",
      "Interactive Floor Plan Management with dynamic table mapping",
      "VIP Customer Tracking for personalized service",
      "Centralized State Management using Zustand",
    ],
    problem:
      "Premium dining establishments face operational bottlenecks where even seconds of latency can impact the guest experience. DineFlow centralizes operations to reduce service latency and minimize order errors.",
    learned:
      "Designed a service layer architecture to decouple Next.js page components from Zustand stores, navigated the Next.js 16 App Router landscape, and integrated Tailwind v4 seamlessly with CSS Modules.",
    links: {
      live: "https://crm-delta-five-60.vercel.app/loyalty",
      github: "https://github.com/19Kushagra0/crm",
    },
  },
  {
    id: 14,
    number: "13",
    category: "RAG",
    title: "Spotify-Analizer",
    description:
      "AI-powered Spotify Analyzer  using Spotify OAuth, allowing users to securely connect their Spotify account, GENERATE PLAYLIST and explore their listening habits, music taste, and analytics in an interactive way.",
    image: "/projects/spotify.png",
    tags: ["Next.js", "Spotify API", "OAuth"],
    features: [
      "Secure Spotify OAuth Flow",
      "Top Tracks & Artists visual insights",
      "AI-generated playlists based on mood input",
      "Interactive audio visualization",
    ],
    problem:
      "Users want deeper, on-demand insights into their listening habits beyond the annual Spotify Wrapped, with the ability to instantly generate new playlists based on their current mood and real-time data.",
    learned:
      "Working with rate-limited third-party APIs and managing secure token refresh cycles. It also vastly improved my skills in data visualization and handling complex audio features.",
    links: {
      live: "https://spotify-analizer.vercel.app/",
      github: "https://github.com/19Kushagra0/spotify-analizer",
    },
  },
  {
    id: 13,
    number: "12",
    category: "RAG",
    title: "AllDrives: AI-Powered Google Drive Workspace",
    description:
      "AllDrives is a premium, AI-powered cloud storage platform built on top of Google Drive, redesigned from the ground up with a Linear-inspired design system. It seamlessly integrates intelligent document summarization and persistent AI chat directly into the user's workspace.",
    image: "/projects/alldrives.png",
    tags: ["Next.js", "Firebase", "Zustand", "Gemini AI"],
    features: [
      "AI Co-Pilot & Instant Summarization via Google Gemini",
      "Full Google Drive Integration preserving folder structures",
      "Premium Linear Design System with Framer Motion animations",
      "Instant UI State leveraging Zustand and TanStack React Query",
    ],
    problem:
      "Standard drive applications have clunky UIs and introduce friction when downloading files to feed into LLMs. AllDrives solves this by embedding an intelligent AI layer directly into a premium cloud storage workflow.",
    learned:
      "Managed complex file system states alongside async Google Drive API calls using Zustand and TanStack Query. Implemented aggressive caching and Shimmer skeleton loaders to mask network latency and deliver a seamless UX.",
    links: {
      live: "https://alldrives-three.vercel.app/",
      github: "https://github.com/19Kushagra0/alldrives",
    },
  },
  {
    id: 12,
    number: "11",
    category: "RAG",
    title: "YourMails AI",
    description:
      "YourMails is a modern, AI-first email client engineered to solve inbox overload for power users and professionals. It integrates a sophisticated Retrieval-Augmented Generation (RAG) pipeline directly into the reading pane, transforming a standard inbox into an intelligent, queryable knowledge base.",
    image: "/projects/yourmails.png",
    tags: ["Next.js", "Pinecone", "RAG", "OpenAI"],
    features: [
      "Semantic Inbox Search using natural language queries",
      "Context-Aware AI Assistant for threading and drafting",
      "Intelligent Thread Ingestion with recursive character splitting",
      "High-Performance UI built with React 19 and optimistic updates",
    ],
    problem:
      "Power users constantly lose track of action items buried deep within long email chains. Standard email clients only display messages without understanding them. YourMails solves this by making the inbox semantically searchable.",
    learned:
      "Implemented custom semantic chunking that respects email headers and quotation markers. Mitigated hallucinations using strict prompt engineering and Cohere re-ranking, and optimized perceived latency via Next.js Edge functions.",
    links: {
      live: "https://yourmails-demo.vercel.app",
      github: "https://github.com/19Kushagra0/yourMails",
    },
  },
  {
    id: 11,
    number: "10",
    category: "Full Stack",
    title: "NutriExplore — Full Stack Food Product Explorer",
    description:
      "A comprehensive nutrition tracking application built with modern web standards and responsive design.",
    image: "/projects/nutriexplore.png",
    links: {
      live: "https://nutriexplore.vercel.app/",
      github: "https://github.com/19Kushagra0/nutriexplore",
    },
  },
  {
    id: 10,
    number: "09",
    category: "Full Stack",
    title: "SnipLink — AI-Powered Developer URL Shortener",
    description:
      "A developer-focused URL shortener featuring AI-generated custom aliases, comprehensive REST API documentation, Firebase Authentication, interactive user dashboards, detailed analytics logging, and a flexible database layer.",
    image: "/projects/url_shortener.png",
    links: {
      live: "https://url-shortner-ashy-eta.vercel.app/",
      github: "https://github.com/19Kushagra0/url-shortner",
    },
  },
  {
    id: 9,
    number: "08",
    category: "RAG",
    title: "MailClean (Gmail Dashboard)",
    description:
      "MailClean is a powerful dashboard that helps busy professionals take back control of their chaotic Gmail inboxes. By connecting directly to the Gmail and Google Drive APIs, it provides deep insights into storage usage, highlights unread emails, and offers rapid quick actions to mass-archive or delete messages.",
    image: "/projects/gmail-dashboard.png",
    tags: ["Next.js", "Firebase", "Gmail API", "Drive API"],
    features: [
      "Secure OAuth2 Authentication with Firebase and Google Identity",
      "Real-time Storage Analytics with animated SVG charts",
      "Inbox Insights & Recent Activity via Gmail REST API",
      "One-Tap Quick Actions for efficient inbox management",
    ],
    problem:
      "Managing a clogged inbox and constantly hitting the 15GB Google storage limit is a massive friction point. MailClean provides a centralized command center to abstract away the default Gmail UI.",
    learned:
      "Mastered OAuth & token management, handling API rate limits efficiently, parsing complex MIME headers from Gmail responses, and building custom SVG animations.",
    links: {
      live: "https://gmail-dashboard-two.vercel.app",
      github: "https://github.com/19Kushagra0/gmail-dashboard",
    },
  },
  {
    id: 6,
    number: "05",
    category: "Pixel Perfect",
    title: "Anki Homepage Clone",
    description:
      "A pixel-perfect recreation of the Anki landing page focusing on responsive layout and semantic structure.",
    image: "/projects/anki.png",
    links: {
      live: "https://anki-homepage-clone.vercel.app/",
      github: "https://github.com/19Kushagra0/anki-homepage-clone",
    },
  },
  {
    id: 4,
    number: "03",
    category: "Pixel Perfect",
    title: "X Homepage Clone",
    description:
      "A responsive clone of the X (formerly Twitter) homepage, implementing complex grid layouts and component structures.",
    image: "/projects/x.png",
    links: {
      live: "https://x-homepage-with-crud.vercel.app/",
      github: "https://github.com/19Kushagra0/x-homepage-with-crud",
    },
  },
  {
    id: 3,
    number: "02",
    category: "Pixel Perfect",
    title: "Play.ht Homepage Clone",
    description:
      "A faithful reproduction of the Play.ht website featuring modern typography, spacing, and engaging UI elements.",
    image: "/projects/playht.png",
    links: {
      live: "https://play-ht-homepage-clone.vercel.app/",
      github: "https://github.com/19Kushagra0/play.ht-homepage-clone",
    },
  },
  {
    id: 2,
    number: "01",
    category: "Pixel Perfect",
    title: "Baremetrics Homepage Clone",
    description:
      "A clean, data-focused landing page clone with precise styling, well-structured components, and a professional aesthetic.",
    image: "/projects/baremetrics.png",
    links: {
      live: "https://baremetrics-hompage-clone.vercel.app/",
      github: "https://github.com/19Kushagra0/baremetrics-hompage-clone",
    },
  },
  {
    id: 1,
    number: "00",
    category: "Pixel Perfect",
    title: "Awwwards Homepage Clone",
    description:
      "A high-fidelity clone of the Awwwards platform homepage, showcasing advanced CSS techniques and a visually striking layout.",
    image: "/projects/awwwards.png",
    links: {
      live: "https://awwwards-homepage-clone.vercel.app/",
      github: "https://github.com/19Kushagra0/awwwards-homepage-clone",
    },
  }
];
