"use client";
import Image from "next/image";
import { useState } from "react";

const projectsData = [
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
    title: "Anki homepage",
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
    title: "AI chatbot",
    shortDescription:
      "AI chatbot built using Next.js and React with Google Gemini API integration",
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
    title: "X homepage",
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
    title: "Play-ht homepage clone",
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
    title: "Baremetrics hompage clone",
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
    title: "Awwwards homepage clone",
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
      <section className="hero">
        <h1>Kushagra Sharma</h1>
        <p className="subtitle">Frontend Developer • Next.js • JavaScript</p>

        <div className="buttons">
          <a target="_blank" href="https://github.com/19Kushagra0">
            GitHub
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/kushagra-sharma-ks/"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <section className="section">
        <h2>Career Objective</h2>
        <p>
          Frontend Developer learning and working with Next.js and modern UI
          development, looking for a frontend role to grow and contribute to
          real-world projects.
        </p>
      </section>

      <section className="section">
        <h2>Skills</h2>
        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>Node.js</span>
          <span>React</span>
          <span>Next.js</span>
          <span>Frontend Development</span>
        </div>
      </section>

      <section className="section">
        <h2>Projects</h2>
        <div className="projects">
          {projectsData.map((project) => (
            <div className="card" key={project.id}>
              <div className="card-content-container">
                <div className="card-content">
                  <h3>{project.title}</h3>
                  <p>{project.shortDescription}</p>
                </div>

                <div className="discription-container">
                  <button
                    className="discription-button"
                    onClick={() => setSelectedProject(project)}
                  >
                    <Image
                      className="discription-image"
                      src="/icons/discription.svg"
                      alt="description"
                      width={20}
                      height={20}
                    />
                  </button>
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

          <div className="card vis-none"></div>
        </div>
      </section>

      <footer>© {new Date().getFullYear()} Kushagra Sharma • Delhi</footer>

      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedProject.title}</h3>
              <button
                className="close-button"
                onClick={() => setSelectedProject(null)}
              >
                <Image
                  src="/icons/close.svg"
                  alt="Close"
                  width={20}
                  height={20}
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
