"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

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
        padding: "40px clamp(12px, 4vw, 24px)",
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
          maxHeight: "85vh", // Slightly more space on top/bottom
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
            top: 16,
            right: 16,
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

        {/* Large Preview */}
        <div
          style={{
            width: "100%",
            aspectRatio: "16 / 9",
            backgroundColor: "#f9f9f9",
            borderBottom: "1px solid #ebebeb",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px",
          }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 12,
                border: "1px solid #ebebeb",
                boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
              }}
            />
          ) : (
            <span style={{ color: "#888888", fontSize: 14 }}>
              Preview Not Available
            </span>
          )}
        </div>

        {/* Content Body */}
        <div
          className="modal-body"
          style={{
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            gap: 32,
          }}
        >
          {/* Header */}
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <h2
              style={{
                fontSize: 32,
                fontWeight: 700,
                letterSpacing: "-1px",
                color: "#171717",
                margin: 0,
              }}
            >
              {project.title}
            </h2>
            <p
              style={{
                fontSize: 16,
                lineHeight: "26px",
                color: "#666666",
                margin: 0,
              }}
            >
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          {project.tags && project.tags.length > 0 && (
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <h4
                style={{
                  margin: 0,
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#171717",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                Tech Stack
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontFamily: "'Geist Mono', ui-monospace, monospace",
                      fontSize: 13,
                      color: "#4d4d4d",
                      backgroundColor: "#f5f5f5",
                      padding: "6px 12px",
                      borderRadius: 8,
                      border: "1px solid #ebebeb",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Details Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 32,
            }}
          >
            {/* Features List */}
            {project.features && project.features.length > 0 && (
              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                <h4
                  style={{
                    margin: 0,
                    fontSize: 14,
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
                    paddingLeft: 20,
                    color: "#4d4d4d",
                    fontSize: 15,
                    lineHeight: "24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Problem & Learned */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {project.problem && (
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 8 }}
                >
                  <h4
                    style={{
                      margin: 0,
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#171717",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Problem Solved
                  </h4>
                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: "24px",
                      color: "#4d4d4d",
                      margin: 0,
                    }}
                  >
                    {project.problem}
                  </p>
                </div>
              )}
              {project.learned && (
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 8 }}
                >
                  <h4
                    style={{
                      margin: 0,
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#171717",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    What I Learned
                  </h4>
                  <p
                    style={{
                      fontSize: 15,
                      lineHeight: "24px",
                      color: "#4d4d4d",
                      margin: 0,
                    }}
                  >
                    {project.learned}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div
            className="modal-action-row"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginTop: 16,
              paddingTop: 32,
              borderTop: "1px solid #ebebeb",
            }}
          >
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-action-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: 48,
                padding: "0 32px",
                borderRadius: 8,
                backgroundColor: "#171717",
                color: "#ffffff",
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
                transition: "background-color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#333")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#171717")}
            >
              Live Demo
            </a>
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-action-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: 48,
                padding: "0 32px",
                borderRadius: 8,
                backgroundColor: "#ffffff",
                color: "#171717",
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
                border: "1px solid #ebebeb",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#f9f9f9";
                e.target.style.borderColor = "#d4d4d4";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#ffffff";
                e.target.style.borderColor = "#ebebeb";
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ marginRight: 8 }}
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
