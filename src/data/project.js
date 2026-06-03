export const projectsData = [
  {
    id: 16,
    number: "15",
    title: "Discord Analyzer ",
    description:
      "Discord Analyzer is an AI-powered Discord analytics dashboard that helps you understand your server data. It features a custom SQL engine called 'Coral' that lets you query Discord information using plain English. The app includes Discord OAuth authentication, Firebase storage, and AI-powered analysis with Grok.",
    image: "/projects/discord-analyzer.png",
    tags: ["Next.js", "Firebase", "SQL", "Grok AI"],
    features: [
      "Discord OAuth integration for seamless login",
      "Custom SQL engine ('Coral') with natural language processing",
      "Firebase real-time storage for query caching",
      "Grok AI automated analytics reports",
    ],
    problem:
      "Server owners lack easy-to-understand analytics. Raw Discord data is hard to query without writing code. This solves the problem by allowing natural language queries that automatically translate to SQL.",
    learned:
      "I learned how to build a custom query parser and integrate LLMs for robust data analysis. Implementing Discord OAuth was a great deep-dive into standard OAuth 2.0 flows.",
    links: {
      live: "https://discord-analyzer-five.vercel.app/",
      github: "https://github.com/19Kushagra0/discord-analyzer",
    },
  },
  {
    id: 15,
    number: "14",
    title: "C-R-M with Loyalty ",
    description:
      "Your CRM is a modern web application built with Next.js and React that helps manage customer relationships and business data. It features user authentication through NextAuth for secure access, Firebase for data storage, and Tailwind CSS for a clean, responsive design. The app includes data visualization with Recharts to display charts and analytics, and uses Konva for interactive canvas graphics. State management is handled by Zustand, while TanStack React Query optimizes data fetching. The application is currently live and deployed on Vercel, making it accessible online for real-time customer relationship management.",
    image: "/projects/crm.png",
    tags: ["Next.js", "React", "Firebase", "Zustand"],
    features: [
      "Role-based user authentication",
      "Interactive analytics dashboard with Recharts",
      "Customer loyalty tracking system",
      "Kanban board for lead management",
    ],
    problem:
      "Small businesses need an affordable, easy-to-use CRM that integrates loyalty programs natively, rather than relying on multiple disconnected and expensive tools.",
    learned:
      "Mastered Zustand for complex global state management and TanStack Query for caching and syncing data across different views. Working with Konva for interactive canvas graphics was also a highly rewarding challenge.",
    links: {
      live: "https://crm-delta-five-60.vercel.app/loyalty",
      github: "https://github.com/19Kushagra0/crm",
    },
  },
  {
    id: 14,
    number: "13",
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
    title: "AllDrives — AI-Powered Google Drive Workspace",
    description:
      "A high-fidelity Google Drive workspace clone built with Next.js, Firebase, Zustand, and TanStack Query. Features Google Drive integration, persistent Gemini AI Sidebar, context-menu file summaries, real-time Firestore sync, and an elegant linear design system.",
    image: "/projects/alldrives.png",
    tags: ["Next.js", "Firebase", "Gemini AI"],
    features: [
      "Google Drive API integration",
      "Persistent Gemini AI Sidebar for context-aware chat",
      "Real-time Firestore synchronization",
      "Context-menu instant file summaries",
    ],
    problem:
      "Accessing and retrieving key insights from a cluttered Google Drive can be slow and tedious. AllDrives solves this by bringing Gemini AI directly into your Google Drive, enabling you to instantly find, summarize, and query your files without needing to open them.",
    learned:
      "Gained deep experience in optimizing React renders for a complex file explorer UI, implementing robust drag-and-drop mechanics, and integrating the Gemini API seamlessly into the workflow.",
    links: {
      live: "https://alldrives-three.vercel.app/",
      github: "https://github.com/19Kushagra0/alldrives",
    },
  },
  {
    id: 12,
    number: "11",
    title: "ourMails — Minimalist Gmail Client",
    description:
      "A minimalist Gmail client built with Next.js, NextAuth, Google OAuth, and the Gmail API for a cleaner, distraction-free email experience.",
    image: "/projects/yourmails.png",
    tags: ["Next.js", "NextAuth", "Gmail API"],
    links: {
      live: "https://yourmails.vercel.app/",
      github: "https://github.com/19Kushagra0/yourmails",
    },
  },

  {
    id: 11,
    number: "10",
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
    title: "SnipLink — AI-Powered Developer URL Shortener",
    description:
      "A developer-focused URL shortener featuring AI-generated custom aliases, comprehensive REST API documentation, Firebase Authentication, interactive user dashboards, detailed analytics logging, and a flexible database layer.",
    image: "/projects/url_shortener.png",
    links: {
      live: "https://url-shortner-ashy-eta.vercel.app/",
      github: "https://github.com/19Kushagra0/url-shortner",
    },
  },
  // {
  //   id: 9,
  //   number: "08",
  //   title: "Dashbord with Authentication (Signup & Login with Database)",
  //   description:
  //     "A secure signup and login flow integrated with a backend database for reliable user management.",
  //   image: "/projects/dashboard.png",
  //   links: {
  //     live: "https://nextjs-jwt-auth-roan.vercel.app/",
  //     github: "https://github.com/19Kushagra0/nextjs-jwt-auth",
  //   },
  // },
  // {
  //   id: 8,
  //   number: "07",
  //   title: "Interactive Authentication Page with Micro-Interactions",
  //   description:
  //     "Advanced authentication flows featuring smooth transitions, micro-interactions, and instant form validation.",
  //   image: "/projects/microauth.png",
  //   links: {
  //     live: "https://interactive-auth-ui.vercel.app/",
  //     github: "https://github.com/19Kushagra0/interactive-auth-ui",
  //   },
  // },
  // {
  //   id: 7,
  //   number: "06",
  //   title: "School Canteen Order Management Prototype",
  //   description:
  //     "A full-stack application for managing inventory, orders, and point-of-sale operations for educational institutions.",
  //   image: "/projects/canteen.png",
  //   links: {
  //     live: "https://school-canteen-bay.vercel.app/",
  //     github: "https://github.com/19Kushagra0/school-canteen",
  //   },
  // },
  {
    id: 6,
    number: "05",
    title: "Anki Homepage Clone",
    description:
      "A pixel-perfect recreation of the Anki landing page focusing on responsive layout and semantic structure.",
    image: "/projects/anki.png",
    links: {
      live: "https://anki-homepage-clone.vercel.app/",
      github: "https://github.com/19Kushagra0/anki-homepage-clone",
    },
  },
  // {
  //   id: 5,
  //   number: "04",
  //   title: "AI Chatbot",
  //   description:
  //     "A streamlined conversational interface leveraging external APIs for natural language processing and real-time responses.",
  //   image: "/projects/chatbot.png",
  //   links: {
  //     live: "https://ai-chatbot-one-lemon-35.vercel.app/",
  //     github: "https://github.com/19Kushagra0/ai-chatbot",
  //   },
  // },
  {
    id: 4,
    number: "03",
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
    title: "Awwwards Homepage Clone",
    description:
      "A high-fidelity clone of the Awwwards platform homepage, showcasing advanced CSS techniques and a visually striking layout.",
    image: "/projects/awwwards.png",
    links: {
      live: "https://awwwards-homepage-clone.vercel.app/",
      github: "https://github.com/19Kushagra0/awwwards-homepage-clone",
    },
  },
];
