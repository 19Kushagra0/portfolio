"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";

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
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
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
        aria-hidden="true"
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
          maxWidth: 896,
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
            aria-hidden="true"
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
              id="modal-title"
              style={{
                fontSize: "clamp(1.5rem, 4.5vw, 2rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: "1.25",
                color: "#171717",
                margin: 0,
                paddingRight: "clamp(40px, 8vw, 48px)",
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
                <h3
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
                </h3>
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
        </div>
      </motion.div>
    </div>
  );
}

export default function PageClient() {
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
