"use client";
import Image from "next/image";
import { useState } from "react";

const projectsData = [
  {
    id: 10,
    title: "NutriExplore — Full Stack Food Product Explorer",
    shortDescription:
      "A full-stack product exploration platform with search, filters, authentication, and API integration.",

    fullDescription:
      "NutriExplore is a full-stack web application that allows users to explore food products and view detailed nutritional information. The project was built to move beyond pure frontend work and understand how real applications combine frontend interfaces with backend logic. It integrates external APIs, supports product search and filtering, dynamic product pages, and includes authentication with protected features. The goal was to practice real application architecture using Next.js full-stack capabilities.",

    features: [
      "Product search using external API",
      "Infinite scroll product loading",
      "Dynamic product detail pages",
      "Sorting and category filtering",
      "Authentication system with signup and login",
      "JWT-based authentication flow",
      "Protected routes for authenticated users",
      "Clean component-based UI architecture",
    ],

    techStack: [
      "Next.js",
      "React",
      "JavaScript",
      "CSS Modules",
      "API Routes",
      "JWT Authentication",
      "OpenFoodFacts API",
    ],

    links: {
      live: "https://nutriexplore.vercel.app/",
      github: "https://github.com/19Kushagra0/nutriexplore",
    },
  },
  {
    id: 9,
    title: "Authentication Pages (Signup & Login with Database)",
    shortDescription:
      "A full authentication flow with real database-backed signup and login.",
    fullDescription:
      "A simple authentication project focused on implementing real signup and login with a database. Users are stored persistently in MongoDB, and authentication is handled using JWT. The project was built to understand how frontend authentication flows connect to a real backend without overengineering.",
    features: [
      "Dedicated signup and login pages",
      "Controlled form inputs with predictable state management",
      "Users stored persistently in MongoDB",
      "JWT-based authentication",
      "Protected API routes",
      "Clean and minimal user interface",
    ],
    techStack: ["Next.js", "React", "CSS", "MongoDB", "JWT"],
    links: {
      live: "https://nextjs-jwt-auth-roan.vercel.app/",
      github: "https://github.com/19Kushagra0/nextjs-jwt-auth",
    },
  },
  {
    id: 8,
    title: "Interactive Authentication Page with Micro-Interactions",
    shortDescription:
      "A playful authentication screen focused on micro-interactions and user feedback.",
    fullDescription:
      "An experimental authentication UI inspired by Fireship, designed to explore how micro-interactions can improve user experience. The character responds in real time to user actions — tracking cursor movement, reacting to email input, and changing behavior while typing passwords. What started as a fun animation experiment evolved into a reusable UX prototype for modern login screens.",
    features: [
      "Eye-tracking character that follows cursor movement",
      "Context-aware reactions based on active input field",
      "Dynamic character states while typing passwords",
      "Reusable state system for easy interaction expansion",
      "Smooth transitions focused on delightful UX feedback",
    ],
    techStack: ["Next.js", "React", "CSS", "Client-side State Management"],
    links: {
      live: "https://interactive-auth-ui.vercel.app/",
      github: "https://github.com/19Kushagra0/interactive-auth-ui",
    },
  },
  {
    id: 7,
    title: "School Canteen Order Management Prototype",
    shortDescription:
      "A frontend-focused canteen ordering system built to explore state management and data flow.",
    fullDescription:
      "A specialized management system for school canteens. It features a dashboard to track student spending, manage individual profiles, and maintain data across sessions using LocalStorage.",
    features: [
      "Dynamic routing for student profiles",
      "Global state management via React Context",
      "Persistent data storage with LocalStorage",
      "Optimized hydration to prevent layout shifts",
    ],
    techStack: ["Next.js", "React", "Context API", "CSS"],
    links: {
      live: "https://school-canteen-bay.vercel.app/",
      github: "https://github.com/19Kushagra0/school-canteen",
    },
  },
  {
    id: 6,
    title: "Anki Homepage Clone",
    shortDescription: "Anki homepage clone built using Next.js and React.",
    fullDescription:
      "A faithful recreation of the Anki homepage, emphasizing simplicity and utility.",
    features: [
      "Dark mode support",
      "Clean minimalistic design",
      "Performance optimized",
    ],
    techStack: ["Next.js", "React"],
    links: {
      live: "https://anki-homepage-clone.vercel.app/",
      github: "https://github.com/19Kushagra0/anki-homepage-clone",
    },
  },
  {
    id: 5,
    title: "AI Chatbot",
    shortDescription:
      "AI chatbot built using Next.js and React with Google Gemini API integration.",
    fullDescription:
      "An intelligent chatbot interface integrated with Google's Gemini API for natural language processing.",
    features: [
      "Google Gemini API integration",
      "Real-time chat interface",
      "Markdown rendering for responses",
    ],
    techStack: ["Next.js", "React", "Gemini API"],
    links: {
      live: "https://ai-chatbot-one-lemon-35.vercel.app/",
      github: "https://github.com/19Kushagra0/ai-chatbot",
    },
  },
  {
    id: 4,
    title: "X Homepage Clone",
    shortDescription:
      "A simple X homepage clone built with Next.js, featuring full CRUD functionality.",
    fullDescription:
      "A clone of X (Twitter) homepage implementing core concept of CRUD functionality.",
    features: [
      "Full CRUD functionality for posts",
      "User authentication simulation",
      "Real-time UI updates",
    ],
    techStack: ["Next.js", "React", "CSS"],
    links: {
      live: "https://x-homepage-with-crud.vercel.app/",
      github: "https://github.com/19Kushagra0/x-homepage-with-crud",
    },
  },
  {
    id: 3,
    title: "Play.ht Homepage Clone",
    shortDescription: "Modern UI built using React.",
    fullDescription:
      "A high-fidelity clone of the Play.ht homepage, showcasing modern web design principles.",
    features: [
      "Interactive standard elements",
      "Typography focused design",
      "Mobile-first approach",
    ],
    techStack: ["React", "CSS"],
    links: {
      live: "https://play-ht.netlify.app/",
      github: "https://github.com/19Kushagra0/play.ht-homepage-clone",
    },
  },
  {
    id: 2,
    title: "Baremetrics Homepage Clone",
    shortDescription: "Modern UI built using React.",
    fullDescription:
      "A responsive clone of the Baremetrics homepage, focusing on clean UI and layout.",
    features: [
      "Clean and modern interface",
      "Responsive navigation",
      "CSS Grid and Flexbox layouts",
    ],
    techStack: ["React", "CSS"],
    links: {
      live: "https://baremetrics-hompage-clone.netlify.app/",
      github: "https://github.com/19Kushagra0/baremetrics-hompage-clone",
    },
  },
  {
    id: 1,
    title: "Awwwards Homepage Clone",
    shortDescription: "Modern UI built using Next.js.",
    fullDescription:
      "A simple responsive UI clone of the Awwwards design system website.",
    features: [
      "Responsive design system",
      "Hero section with dynamic hover effects",
      "Feature sections with custom CSS layouts",
    ],
    techStack: ["Next.js", "CSS"],
    links: {
      live: "https://awwwards-sotd.netlify.app/",
      github: "https://github.com/19Kushagra0/awwwards-homepage-clone",
    },
  },
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <main className="container">
      {/* ─── Hero ─── */}
      <section className="hero">
        <div className="hero-badge">
          <span className="dot" />
          Open to opportunities
        </div>
        <h1>Kushagra Sharma</h1>
        <p className="hero-description">
          Frontend developer building with Next.js and modern JavaScript.
          Focused on clean interfaces, thoughtful interactions, and real-world
          application architecture.
        </p>

        <div className="buttons">
          <a
            className="btn-primary"
            target="_blank"
            href="https://github.com/19Kushagra0"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
          <a
            className="btn-secondary"
            target="_blank"
            href="https://www.linkedin.com/in/kushagra-sharma-ks/"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </section>

      {/* ─── Skills ─── */}
      <section className="section">
        <div className="section-header">
          <span className="section-label">Expertise</span>
          <h2>Skills & Technologies</h2>
        </div>
        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>Node.js</span>
          <span>React</span>
          <span>Next.js</span>
          <span>MongoDB</span>
          <span>JWT</span>
          <span>API Routes</span>
          <span>Frontend Development</span>
          <span>Backend Development</span>
        </div>
      </section>

      {/* ─── Projects ─── */}
      <section className="section">
        <div className="section-header">
          <span className="section-label">Portfolio</span>
          <h2>Selected Projects</h2>
          <p className="section-description">
            A collection of projects I've built to learn, experiment, and grow
            as a developer.
          </p>
        </div>

        <div className="projects">
          {projectsData.map((project, index) => (
            <div className="card" key={project.id}>
              <div>
                <span className="card-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="card-content-container">
                  <div className="card-content">
                    <h3>{project.title}</h3>
                    <p>{project.shortDescription}</p>
                  </div>

                  <div className="discription-container">
                    <button
                      className="discription-button"
                      onClick={() => setSelectedProject(project)}
                      aria-label={`View details for ${project.title}`}
                    >
                      <Image
                        className="discription-image"
                        src="/icons/discription.svg"
                        alt=""
                        width={16}
                        height={16}
                      />
                    </button>
                  </div>
                </div>
              </div>

              <div className="card-links">
                <a
                  className="live-project"
                  href={project.links.live}
                  target="_blank"
                >
                  Live Demo
                </a>
                <a
                  className="github-project"
                  href={project.links.github}
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer>
        <span>© {new Date().getFullYear()} Kushagra Sharma</span>
        <span>Delhi, India</span>
      </footer>

      {/* ─── Project Detail Modal ─── */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedProject.title}</h3>
              <button
                className="close-button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close modal"
              >
                <Image
                  src="/icons/close.svg"
                  alt=""
                  width={16}
                  height={16}
                />
              </button>
            </div>

            <p className="modal-description">
              {selectedProject.fullDescription}
            </p>

            <div className="modal-tags">
              {selectedProject.techStack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
