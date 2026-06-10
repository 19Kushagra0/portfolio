"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

const heroContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.1,
    },
  },
};

const heroLineVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const projectsData = [
  {
    id: 16,
    number: "15",
    title: "Discord Analyzer ",
    description:
      "Discord Analyzer is an AI-powered Discord analytics dashboard that helps you understand your server data. It features a custom SQL engine called 'Coral' that lets you query Discord information using plain English. The app includes Discord OAuth authentication, Firebase storage, and AI-powered analysis with Grok.",
    image: "/projects/discord-analyzer.png",
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
    links: {
      live: "https://spotify-analizer.vercel.app/",
      github: "https://github.com/19Kushagra0/spotify-analizer",
    },
  },

  {
    id: 13,
    number: "12",
    title: "AllDrives — AI-Powered Cloud Storage Platform",
    description:
      "A high-fidelity Google Drive clone built with Next.js, Firebase, Zustand, and TanStack Query. Features Google Drive integration, persistent Gemini AI Sidebar, context-menu file summaries, real-time Firestore sync, and an elegant linear design system.",
    image: "/projects/alldrives.png",
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
    title: "SnipLink AI-Powered Developer URL Shortener",
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

/* ── SVG Icons ── */
function ExternalLinkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div
      style={{
        backgroundColor: "#fafafa",
        color: "#4d4d4d",
        fontFamily: "Inter, system-ui, -apple-system, sans-serif",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Main onOpenDetails={setSelectedProject} />
      <Footer />
      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Project Modal Component ── */
function ProjectModal({ project, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(16px, 4vh, 40px) clamp(8px, 4vw, 24px)",
      }}
    >
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
      {/* Backdrop overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(8px)",
          cursor: "pointer",
        }}
      />

      {/* Modal Container */}
      <motion.div
        className="hide-scrollbar"
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 896, // ~max-w-4xl
          maxHeight: "90vh",
          backgroundColor: "#ffffff",
          borderRadius: 16,
          border: "none",
          boxShadow: "0 35px 70px -15px rgba(0, 0, 0, 0.9)",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          cursor: "default",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "clamp(12px, 3vw, 24px)",
            right: "clamp(12px, 3vw, 24px)",
            zIndex: 10,
            width: 36,
            height: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            border: "1px solid #ebebeb",
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            color: "#171717",
          }}
          aria-label="Close modal"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Content Body */}
        <div
          className="modal-body"
          style={{
            padding: "clamp(24px, 5vw, 48px)",
            display: "flex",
            flexDirection: "column",
            gap: "clamp(20px, 5vw, 32px)",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "clamp(8px, 2vw, 12px)",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(1.5rem, 4.5vw, 2rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: "1.25",
                color: "#171717",
                margin: 0,
                paddingRight: "clamp(40px, 8vw, 48px)", // Leave space for close button
              }}
            >
              {project.title}
            </h2>
            <p
              style={{
                fontSize: "clamp(0.9375rem, 2.5vw, 1rem)",
                lineHeight: "clamp(1.45rem, 3.8vw, 1.625rem)",
                color: "#666666",
                margin: 0,
              }}
            >
              {project.description}
            </p>
          </div>

          {/* Details Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "clamp(20px, 5vw, 32px)",
            }}
          >
            {/* Features List */}
            {project.features && project.features.length > 0 && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "clamp(8px, 2vw, 12px)",
                }}
              >
                <h4
                  style={{
                    margin: 0,
                    fontSize: "clamp(0.8rem, 2vw, 0.875rem)",
                    fontWeight: 600,
                    color: "#171717",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  Key Features
                </h4>
                <ul
                  style={{
                    margin: 0,
                    paddingLeft: "clamp(16px, 4vw, 20px)",
                    color: "#4d4d4d",
                    fontSize: "clamp(0.875rem, 2.2vw, 0.9375rem)",
                    lineHeight: "clamp(1.35rem, 3.5vw, 1.5rem)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "clamp(6px, 1.5vw, 8px)",
                  }}
                >
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Action Buttons removed */}
        </div>
      </motion.div>
    </div>
  );
}
