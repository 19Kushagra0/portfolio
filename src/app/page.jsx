"use client";

const projectsData = [
  {
    id: 12,
    number: "01",
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
    id: 11,
    number: "02",
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
    id: 10,
    number: "03",
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
    id: 9,
    number: "04",
    title: "Dashbord with Authentication (Signup & Login with Database)",
    description:
      "A secure signup and login flow integrated with a backend database for reliable user management.",
    image: "/projects/dashboard.png",
    links: {
      live: "https://nextjs-jwt-auth-roan.vercel.app/",
      github: "https://github.com/19Kushagra0/nextjs-jwt-auth",
    },
  },
  {
    id: 8,
    number: "05",
    title: "Interactive Authentication Page with Micro-Interactions",
    description:
      "Advanced authentication flows featuring smooth transitions, micro-interactions, and instant form validation.",
    image: "/projects/microauth.png",
    links: {
      live: "https://interactive-auth-ui.vercel.app/",
      github: "https://github.com/19Kushagra0/interactive-auth-ui",
    },
  },
  {
    id: 7,
    number: "06",
    title: "School Canteen Order Management Prototype",
    description:
      "A full-stack application for managing inventory, orders, and point-of-sale operations for educational institutions.",
    image: "/projects/canteen.png",
    links: {
      live: "https://school-canteen-bay.vercel.app/",
      github: "https://github.com/19Kushagra0/school-canteen",
    },
  },
  {
    id: 6,
    number: "07",
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
    id: 5,
    number: "08",
    title: "AI Chatbot",
    description:
      "A streamlined conversational interface leveraging external APIs for natural language processing and real-time responses.",
    image: "/projects/chatbot.png",
    links: {
      live: "https://ai-chatbot-one-lemon-35.vercel.app/",
      github: "https://github.com/19Kushagra0/ai-chatbot",
    },
  },
  {
    id: 4,
    number: "09",
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
    number: "10",
    title: "Play.ht Homepage Clone",
    description:
      "A faithful reproduction of the Play.ht website featuring modern typography, spacing, and engaging UI elements.",
    image: "/projects/playht.png",
    links: {
      live: "https://play-ht.netlify.app/",
      github: "https://github.com/19Kushagra0/play.ht-homepage-clone",
    },
  },
  {
    id: 2,
    number: "11",
    title: "Baremetrics Homepage Clone",
    description:
      "A clean, data-focused landing page clone with precise styling, well-structured components, and a professional aesthetic.",
    image: "/projects/baremetrics.png",
    links: {
      live: "https://baremetrics-hompage-clone.netlify.app/",
      github: "https://github.com/19Kushagra0/baremetrics-hompage-clone",
    },
  },
  {
    id: 1,
    number: "12",
    title: "Awwwards Homepage Clone",
    description:
      "A high-fidelity clone of the Awwwards platform homepage, showcasing advanced CSS techniques and a visually striking layout.",
    image: "/projects/awwwards.png",
    links: {
      live: "https://awwwards-sotd.netlify.app/",
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
      {/* ── Nav ── */}
      <header
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #ebebeb",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <nav
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            width: "100%",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 24px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <a
              href="#"
              style={{
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: "-0.6px",
                color: "#171717",
                textDecoration: "none",
              }}
            >
              Kushagra Sharma.
            </a>
            <div
              className="nav-links"
              style={{ display: "flex", alignItems: "center", gap: 24 }}
            >
              {["Projects", "Connect"].map((item) => (
                <a
                  key={item}
                  href={item === "Connect" ? "#footer" : "#projects"}
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#888888",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "#171717")}
                  onMouseLeave={(e) => (e.target.style.color = "#888888")}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>

      <main style={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
        {/* ── Hero Section ── */}
        <section
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 1400,
            margin: "0 auto",
            padding: "192px 24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            overflow: "hidden",
          }}
        >
          {/* Mesh gradient */}
          <div
            className="mesh-bg"
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              gap: 24,
              maxWidth: 768,
              alignItems: "flex-start",
            }}
          >
            {/* Code-numbered headline lines */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 12, textAlign: "left" }}>
              {/* Line 01 */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                <span
                  style={{
                    fontFamily: "'Geist Mono', ui-monospace, monospace",
                    fontSize: 12,
                    color: "#888888",
                    paddingTop: 10,
                    minWidth: 24,
                    lineHeight: 1,
                  }}
                >
                  01
                </span>
                <h1
                  className="hero-headline"
                  style={{
                    fontSize: 48,
                    fontWeight: 600,
                    letterSpacing: "-2.4px",
                    lineHeight: "48px",
                    color: "#171717",
                  }}
                >
                  {"<Hello, I'm "}
                  <span style={{ color: "#0057c0" }}>Kushagra!</span>
                  {">"}
                </h1>
              </div>

              {/* Line 02 */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                <span
                  style={{
                    fontFamily: "'Geist Mono', ui-monospace, monospace",
                    fontSize: 12,
                    color: "#888888",
                    paddingTop: 10,
                    minWidth: 24,
                    lineHeight: 1,
                  }}
                >
                  02
                </span>
                <h2
                  className="hero-headline"
                  style={{
                    fontSize: 48,
                    fontWeight: 600,
                    letterSpacing: "-2.4px",
                    lineHeight: "48px",
                    color: "#171717",
                  }}
                >
                  {"<I am a "}
                  <span style={{ color: "#0057c0" }}>full stack</span>
                  {" web "}
                  <span style={{ color: "#0057c0" }}>developer</span>
                  {">"}
                </h2>
              </div>

              {/* Line 03 */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                <span
                  style={{
                    fontFamily: "'Geist Mono', ui-monospace, monospace",
                    fontSize: 12,
                    color: "#888888",
                    paddingTop: 10,
                    minWidth: 24,
                    lineHeight: 1,
                  }}
                >
                  03
                </span>
                <h2
                  className="hero-headline"
                  style={{
                    fontSize: 48,
                    fontWeight: 600,
                    letterSpacing: "-2.4px",
                    lineHeight: "48px",
                    color: "#171717",
                  }}
                >
                  <span style={{ color: "#0057c0" }}>websites</span>
                  {" and "}
                  <span style={{ color: "#0057c0" }}>mobile apps</span>
                  {">"}
                </h2>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                paddingTop: 32,
                marginLeft: 40,
              }}
            >
              <a
                href="https://github.com/19Kushagra0"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  height: 48,
                  padding: "0 32px",
                  borderRadius: 9999,
                  backgroundColor: "#171717",
                  color: "#ffffff",
                  fontSize: 16,
                  fontWeight: 700,
                  letterSpacing: "-0.05em",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#000000"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#171717"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <GitHubIcon />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/kushagra-sharma-ks/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  height: 48,
                  padding: "0 32px",
                  borderRadius: 9999,
                  backgroundColor: "#fafafa",
                  color: "#4d4d4d",
                  fontSize: 16,
                  fontWeight: 700,
                  letterSpacing: "-0.05em",
                  textDecoration: "none",
                  border: "1px solid #ebebeb",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#ffffff"; e.currentTarget.style.color = "#171717"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#fafafa"; e.currentTarget.style.color = "#4d4d4d"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <LinkedInIcon />
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* ── Projects Section ── */}
        <section
          id="projects"
          style={{
            width: "100%",
            maxWidth: 1400,
            margin: "0 auto",
            padding: "128px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 40,
          }}
        >
          {/* Section header */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8, maxWidth: 672 }}>
            <span
              style={{
                fontFamily: "'Geist Mono', ui-monospace, monospace",
                fontSize: 12,
                color: "#888888",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              Portfolio
            </span>
            <h2
              style={{
                fontSize: 32,
                fontWeight: 600,
                letterSpacing: "-1.28px",
                lineHeight: "40px",
                color: "#171717",
              }}
            >
              Selected Projects.
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "#888888",
                lineHeight: "24px",
                marginTop: 8,
              }}
            >
              A collection of projects I&apos;ve built to learn, experiment, and grow as a developer.
              Focusing on robust frontends and seamless user experiences.
            </p>
          </div>

          {/* Projects grid */}
          <div
            className="projects-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 24,
              paddingTop: 24,
            }}
          >
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer
        id="footer"
        style={{
          backgroundColor: "#ffffff",
          borderTop: "1px solid #ebebeb",
          width: "100%",
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            width: "100%",
            padding: "64px 24px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 32,
          }}
        >
          {/* Brand col */}
          <div style={{ gridColumn: "span 2", display: "flex", flexDirection: "column", gap: 16 }}>
            <span
              style={{
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: "-0.6px",
                color: "#171717",
              }}
            >
              Kushagra Sharma.
            </span>
            <span
              style={{
                fontFamily: "'Geist Mono', ui-monospace, monospace",
                fontSize: 12,
                color: "#888888",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              © {new Date().getFullYear()} Kushagra Sharma. Built with precision.
            </span>
            <span
              style={{
                fontFamily: "'Geist Mono', ui-monospace, monospace",
                fontSize: 12,
                color: "#888888",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              📍 Delhi, India
            </span>
          </div>

          {/* Connect col */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <span
              style={{
                fontFamily: "'Geist Mono', ui-monospace, monospace",
                fontSize: 12,
                color: "#888888",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: 4,
              }}
            >
              Connect
            </span>
            {[
              { label: "Github", href: "https://github.com/19Kushagra0" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/kushagra-sharma-ks/" },
              { label: "Email", href: "mailto:kushagra@example.com" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Geist Mono', ui-monospace, monospace",
                  fontSize: 12,
                  color: "#888888",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => { e.target.style.color = "#171717"; e.target.style.textDecoration = "underline"; }}
                onMouseLeave={(e) => { e.target.style.color = "#888888"; e.target.style.textDecoration = "none"; }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Navigate col */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <span
              style={{
                fontFamily: "'Geist Mono', ui-monospace, monospace",
                fontSize: 12,
                color: "#888888",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                marginBottom: 4,
              }}
            >
              Navigate
            </span>
            {[
              { label: "Work", href: "#projects" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: "'Geist Mono', ui-monospace, monospace",
                  fontSize: 12,
                  color: link.label === "Work" ? "#171717" : "#888888",
                  textDecoration: "none",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => { e.target.style.color = "#171717"; e.target.style.textDecoration = "underline"; }}
                onMouseLeave={(e) => { e.target.style.color = link.label === "Work" ? "#171717" : "#888888"; e.target.style.textDecoration = "none"; }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ── Project Card Component ── */
function ProjectCard({ project }) {
  return (
    <div
      className="card-soft-glow stacked-shadow-low"
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: 8,
        border: "1px solid #ebebeb",
        overflow: "hidden",
      }}
    >
      {/* Preview area */}
      <div
        style={{
          aspectRatio: "16 / 9",
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #ebebeb",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <span
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            fontFamily: "'Geist Mono', ui-monospace, monospace",
            fontSize: 12,
            color: "#888888",
            zIndex: 10,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            padding: "2px 6px",
            borderRadius: 4,
            backdropFilter: "blur(4px)",
            border: "1px solid rgba(0, 0, 0, 0.05)",
          }}
        >
          {project.number}
        </span>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="project-preview-image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        ) : (
          <div
            style={{
              width: "calc(100% - 32px)",
              height: "calc(100% - 32px)",
              borderRadius: 4,
              border: "1px dashed #ebebeb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#888888",
              backgroundColor: "#f7f3f2",
              fontFamily: "'Geist Mono', ui-monospace, monospace",
              fontSize: 12,
            }}
          >
            Preview Not Available
          </div>
        )}
      </div>

      {/* Card content */}
      <div
        style={{
          padding: 24,
          display: "flex",
          flexDirection: "column",
          gap: 16,
          flexGrow: 1,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <h3
            style={{
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: "-0.6px",
              lineHeight: "28px",
              color: "#171717",
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              fontSize: 14,
              color: "#888888",
              lineHeight: "20px",
              letterSpacing: "-0.28px",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {project.description}
          </p>
        </div>

        {/* Card actions */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginTop: "auto",
            paddingTop: 16,
          }}
        >
          {/* Live demo button */}
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              height: 32,
              padding: "0 12px",
              borderRadius: 9999,
              backgroundColor: "#171717",
              color: "#ffffff",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "-0.05em",
              textDecoration: "none",
              transition: "all 0.3s ease",
              gap: 6,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#000000"; e.currentTarget.style.transform = "translateY(-1px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#171717"; e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <ExternalLinkIcon />
          </a>

          {/* GitHub button */}
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glass-secondary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              height: 32,
              padding: "0 12px",
              borderRadius: 9999,
              fontSize: 14,
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            <GitHubIcon />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
