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
          </div>

          {/* Action Buttons removed */}
        </div>
      </motion.div>
    </div>
  );
}
