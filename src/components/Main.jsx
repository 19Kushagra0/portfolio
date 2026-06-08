import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import { projectsData } from "../data/project";
import TechStack from "./TechStack";
import GitHubContributions from "./GitHubContributions";

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

const CATEGORY_PILL_STYLES = {
  All: {
    bg: "linear-gradient(135deg, rgba(0,112,243,0.88) 0%, rgba(0,87,192,0.88) 100%)",
    shadow: "0 8px 32px 0 rgba(0,112,243,0.25)",
    activeText: "#0057c0",
    activeShadow: "0 4px 12px rgba(0,112,243,0.22)",
  },
  "Full Stack": {
    bg: "linear-gradient(135deg, rgba(37,99,235,0.90) 0%, rgba(59,130,246,0.90) 60%, rgba(96,165,250,0.90) 100%)",
    shadow: "0 8px 32px 0 rgba(59,130,246,0.30)",
    activeText: "#1d4ed8",
    activeShadow: "0 4px 14px rgba(59,130,246,0.35)",
  },
  RAG: {
    bg: "linear-gradient(135deg, rgba(8,145,178,0.90) 0%, rgba(6,182,212,0.90) 55%, rgba(34,211,238,0.90) 100%)",
    shadow: "0 8px 32px 0 rgba(6,182,212,0.30)",
    activeText: "#0e7490",
    activeShadow: "0 4px 14px rgba(6,182,212,0.35)",
  },
  "Pixel Perfect": {
    bg: "linear-gradient(135deg, rgba(121,40,202,0.90) 0%, rgba(139,92,246,0.90) 55%, rgba(167,139,250,0.90) 100%)",
    shadow: "0 8px 32px 0 rgba(139,92,246,0.30)",
    activeText: "#6d28d9",
    activeShadow: "0 4px 14px rgba(139,92,246,0.35)",
  },
};

export default function Main({ onOpenDetails }) {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projectsData.filter((project) => {
    if (filter === "All") return true;
    if (filter === "Full Stack" && project.category === "RAG") return true;
    return project.category === filter;
  });

  return (
    <main
      style={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* ── Hero Section ── */}
      <section
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 1400,
          margin: "0 auto",
          padding: "clamp(64px, 15vw, 192px) clamp(16px, 4vw, 24px)",
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
            maxWidth: 1000,
            alignItems: "flex-start",
          }}
        >
          {/* Code-numbered headline lines */}
          <motion.div
            variants={heroContainerVariants}
            initial="hidden"
            animate="visible"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 12,
              textAlign: "left",
            }}
          >
            {/* Line 01 */}
            <motion.div
              variants={heroLineVariants}
              style={{ display: "flex", alignItems: "flex-start", gap: 16 }}
            >
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
                {"<Hello, I'm\u00A0"}
                <span style={{ color: "#0057c0" }}>Kushagra!</span>
                {">"}
              </h1>
            </motion.div>

            {/* Line 02 */}
            <motion.div
              variants={heroLineVariants}
              style={{ display: "flex", alignItems: "flex-start", gap: 16 }}
            >
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
                {"<"}
                <span style={{ color: "#0057c0" }}>I Wires</span>
                {"\u00A0ideas and\u00A0"}
                <span style={{ color: "#0057c0" }}>Ships</span>
                {"\u00A0products>"}
              </h2>
            </motion.div>

            {/* Line 03 */}
            <motion.div
              variants={heroLineVariants}
              style={{ display: "flex", alignItems: "flex-start", gap: 16 }}
            >
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
                {"<From\u00A0"}
                <span style={{ color: "#0057c0" }}>APIs</span>
                {"\u00A0to\u00A0"}
                <span style={{ color: "#0057c0" }}>UI</span>
                {",\u00A0end to end>"}
              </h2>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <div
            className="hero-cta-row"
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
              className="hero-cta-btn"
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
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#000000";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#171717";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <GitHubIcon />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kushagra-sharma-ks/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-btn"
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
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#ffffff";
                e.currentTarget.style.color = "#171717";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#fafafa";
                e.currentTarget.style.color = "#4d4d4d";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <GitHubContributions />
      <TechStack />

      {/* ── Projects Section ── */}
      <section
        id="projects"
        style={{
          width: "100%",
          maxWidth: 1400,
          margin: "0 auto",
          padding: "clamp(48px, 10vw, 128px) clamp(16px, 4vw, 24px)",
          display: "flex",
          flexDirection: "column",
          gap: 40,
        }}
      >
        {/* Section header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            maxWidth: 672,
          }}
        >
          <span
            style={{
              fontFamily: "'Geist Mono', ui-monospace, monospace",
              fontSize: 12,
              color: "#888888",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
            }}
          >
            Work
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
            Things I&apos;ve Shipped.
          </h2>

        </div>

        {/* Filter Tabs */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 4,
            padding: 6,
            borderRadius: 9999,
            background: (
              CATEGORY_PILL_STYLES[filter] || CATEGORY_PILL_STYLES["All"]
            ).bg,
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            boxShadow: (
              CATEGORY_PILL_STYLES[filter] || CATEGORY_PILL_STYLES["All"]
            ).shadow,
            marginTop: 24,
            marginBottom: 8,
            alignSelf: "flex-start",
            position: "relative",
            flexWrap: "nowrap",
            maxWidth: "100%",
            overflowX: "auto",
            transition: "background 0.4s ease, box-shadow 0.4s ease",
          }}
        >
          {["All", "RAG", "Full Stack", "Pixel Perfect"].map((cat) => {
            const isActive = filter === cat;
            const pillStyle =
              CATEGORY_PILL_STYLES[cat] || CATEGORY_PILL_STYLES["All"];
            return (
              <button
                key={cat}
                className="filter-tab-btn"
                onClick={() => setFilter(cat)}
                style={{
                  position: "relative",
                  padding: "8px 20px",
                  borderRadius: 9999,
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: "pointer",
                  transition: "color 0.25s ease, transform 0.25s ease",
                  backgroundColor: "transparent",
                  color: isActive
                    ? pillStyle.activeText
                    : "rgba(255, 255, 255, 0.85)",
                  border: "none",
                  zIndex: 1,
                  outline: "none",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "#ffffff";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "rgba(255, 255, 255, 0.85)";
                  }
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterTab"
                    style={{
                      position: "absolute",
                      inset: 0,
                      backgroundColor: "#ffffff",
                      borderRadius: 9999,
                      zIndex: -1,
                      boxShadow: pillStyle.activeShadow,
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects grid */}
        <motion.div
          key={filter}
          className="projects-grid"
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            justifyContent: "center",
            justifyItems: "center",
            maxWidth: 960,
            margin: "0 auto",
            width: "100%",
            gap: 32,
            paddingTop: 24,
            paddingRight: 36,
          }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardItemVariants}
              style={{ width: "100%" }}
            >
              <motion.div
                initial={{ x: 0 }}
                whileInView={{ x: 28 }}
                viewport={{ once: false, margin: "-35% 0px -35% 0px" }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 28,
                  mass: 1,
                }}
                style={{ width: "100%" }}
              >
                <ProjectCard
                  project={project}
                  displayNumber={String(index + 1).padStart(2, "00")}
                  onOpenDetails={() => onOpenDetails(project)}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}

/* ─────────────────────────────────────────────
   Project Card Component
   ─────────────────────────────────────────────
   • Mouse tracking on the entire card wrapper
   • Follow-cursor "View Project" tooltip shown
     everywhere EXCEPT when hovering the two
     action buttons (suppressTooltip flag)
   • Right panel is an <a> that navigates to
     the live site on click
   ───────────────────────────────────────────── */
const CATEGORY_GRADIENTS = {
  "Full Stack":
    "linear-gradient(135deg, #1e3a8a 0%, #2563eb 55%, #60a5fa 100%)",
  RAG: "linear-gradient(135deg, #164e63 0%, #0891b2 55%, #22d3ee 100%)",
  "Pixel Perfect":
    "linear-gradient(135deg, #3b0764 0%, #7c3aed 55%, #a78bfa 100%)",
};

const DEFAULT_GRADIENT =
  "linear-gradient(135deg, #1e3a8a 0%, #2563eb 55%, #60a5fa 100%)";

function ProjectCard({ project, displayNumber, onOpenDetails }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [suppressTooltip, setSuppressTooltip] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const showTooltip = hovered && !suppressTooltip;

  return (
    <div
      ref={cardRef}
      className="project-row-card"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setSuppressTooltip(false);
      }}
      style={{
        display: "flex",
        borderRadius: 24,
        border: "1px solid #ebebeb",
        overflow: "hidden",
        backgroundColor: "#ffffff",
        minHeight: "380px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.03)",
        transition: "box-shadow 0.3s ease",
        width: "100%",
        position: "relative",
        cursor: "none",
      }}
    >
      {/* ── Follow-cursor tooltip (covers entire card) ── */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            style={{
              position: "absolute",
              left: coords.x,
              top: coords.y,
              transform: "translate(-50%, -50%)",
              pointerEvents: "none",
              zIndex: 50,
              backgroundColor: "rgba(255, 107, 107, 0.95)",
              color: "#ffffff",
              padding: "8px 18px",
              borderRadius: 9999,
              fontSize: 13,
              fontWeight: 600,
              boxShadow: "0 8px 20px rgba(255, 107, 107, 0.4)",
              whiteSpace: "nowrap",
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 450, damping: 25 }}
          >
            View Project
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Left Column: Content ── */}
      <div
        style={{
          flex: "1 1 50%",
          padding:
            "clamp(24px, 4vw, 40px) clamp(12px, 2vw, 20px) clamp(24px, 4vw, 40px) clamp(24px, 4vw, 40px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 12,
          textAlign: "left",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <span
            style={{
              fontFamily: "'Geist Mono', ui-monospace, monospace",
              fontSize: 12,
              color: "#888888",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontWeight: 600,
            }}
          >
            {project.category || "Project"} — {displayNumber}
          </span>
          <h3
            style={{
              fontSize: "clamp(24px, 3vw, 32px)",
              fontWeight: 700,
              letterSpacing: "-1px",
              lineHeight: "1.2",
              color: "#171717",
              margin: 0,
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              fontSize: 14,
              color: "#666666",
              lineHeight: "1.4",
              margin: 0,
            }}
          >
            {project.problem || project.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div
          className="project-actions-container"
          onMouseEnter={() => setSuppressTooltip(true)}
          onMouseLeave={() => setSuppressTooltip(false)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            width: "100%",
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* View Details — text-only blue; hides cursor tooltip while hovered */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenDetails();
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#0041a0";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#0057c0";
              e.currentTarget.style.transform = "translateY(0)";
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              height: 46,
              padding: "0 8px",
              borderRadius: 9999,
              backgroundColor: "transparent",
              color: "#0057c0",
              fontSize: 14,
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              width: "max-content",
              boxShadow: "none",
              transition: "all 0.25s ease",
              position: "relative",
              zIndex: 10,
            }}
          >
            View Details
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ transform: "rotate(-45deg)" }}
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>

          {/* GitHub icon link */}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.65";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
                e.currentTarget.style.transform = "translateY(0)";
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 38,
                height: 38,
                borderRadius: 9999,
                border: "none",
                backgroundColor: "transparent",
                color: "#171717",
                transition: "all 0.25s ease",
                position: "relative",
                zIndex: 10,
                flexShrink: 0,
              }}
              title="View on GitHub"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          )}
        </div>
      </div>

      {/* ── Right Column: clicking navigates to live site ── */}
      <a
        href={project.links.live}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          flex: "1 1 50%",
          background: CATEGORY_GRADIENTS[project.category] || DEFAULT_GRADIENT,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 32,
          position: "relative",
          overflow: "hidden",
          textDecoration: "none",
          cursor: "none",
        }}
      >
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            style={{
              maxWidth: "90%",
              maxHeight: "85%",
              width: "auto",
              height: "auto",
              objectFit: "contain",
              borderRadius: 12,
              boxShadow: "0 12px 36px rgba(0, 0, 0, 0.4)",
              transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              pointerEvents: "none",
            }}
          />
        ) : (
          <div
            style={{
              width: "80%",
              height: "70%",
              borderRadius: 8,
              border: "1px dashed rgba(255, 255, 255, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "rgba(255, 255, 255, 0.6)",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              fontFamily: "'Geist Mono', ui-monospace, monospace",
              fontSize: 12,
              pointerEvents: "none",
            }}
          >
            Preview Not Available
          </div>
        )}
      </a>
    </div>
  );
}
