import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitHubIcon, LinkedInIcon, ExternalLinkIcon } from "./Icons";
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
    bg: "#f5f5f5",
    shadow: "0 2px 10px rgba(0,0,0,0.05)",
    activeText: "#171717",
    activeShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },
  "Full Stack": {
    bg: "#f5f5f5",
    shadow: "0 2px 10px rgba(0,0,0,0.05)",
    activeText: "#171717",
    activeShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },
  RAG: {
    bg: "#f5f5f5",
    shadow: "0 2px 10px rgba(0,0,0,0.05)",
    activeText: "#171717",
    activeShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },
  "Pixel Perfect": {
    bg: "#f5f5f5",
    shadow: "0 2px 10px rgba(0,0,0,0.05)",
    activeText: "#171717",
    activeShadow: "0 2px 8px rgba(0,0,0,0.08)",
  },
};

function useWindowWidth() {
  const [width, setWidth] = useState(1024);
  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    const timer = setTimeout(handleResize, 0);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);
  return width;
}

export default function Main({ onOpenDetails }) {
  const [filter, setFilter] = useState("All");
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 500;

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
                <span style={{ color: "#0057c0" }}>Kushagra</span>
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
                {"<I am\u00A0"}
                <span style={{ color: "#0057c0" }}>wiring</span>
                {"\u00A0ideas\u00A0&>"}
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
                {"<"}
                <span style={{ color: "#0057c0" }}>Shipping</span>
                {"\u00A0products>"}
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
          className="filter-tabs-container"
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
            border: "1px solid rgba(0, 0, 0, 0.05)",
            boxShadow: (
              CATEGORY_PILL_STYLES[filter] || CATEGORY_PILL_STYLES["All"]
            ).shadow,
            marginTop: 24,
            marginBottom: 8,
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
                  color: isActive ? pillStyle.activeText : "#666666",
                  border: "none",
                  zIndex: 1,
                  outline: "none",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "#171717";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "#666666";
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
            maxWidth: 1140,
            margin: "0 auto",
            width: "100%",
            gap: 40,
            paddingTop: 24,
            paddingRight: isMobile ? 0 : 36,
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
                whileInView={{ x: isMobile ? 0 : 28 }}
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
                  isMobile={isMobile}
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
  "Full Stack": "#e8e8e8",
  RAG: "#e8e8e8",
  "Pixel Perfect": "#e8e8e8",
};

const DEFAULT_GRADIENT = "#e8e8e8";

function ProjectCard({ project, displayNumber, onOpenDetails, isMobile }) {
  return (
    <div
      className="project-row-card"
      onClick={() => {
        if (!isMobile) {
          window.open(project.links.live, "_blank", "noopener,noreferrer");
        }
      }}
      style={{
        display: "flex",
        borderRadius: 24,
        border: "1px solid #ebebeb",
        overflow: "hidden",
        backgroundColor: "#ffffff",
        minHeight: "440px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.03)",
        transition: "box-shadow 0.3s ease",
        width: "100%",
        position: "relative",
        cursor: "pointer",
      }}
    >
      {/* ── Left Column: Content ── */}
      <div
        style={{
          flex: "1 1 50%",
          padding:
            "clamp(32px, 4.5vw, 48px) clamp(20px, 3vw, 40px) clamp(32px, 4.5vw, 48px) clamp(32px, 4.5vw, 48px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 24,
          textAlign: "left",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <span
            style={{
              fontFamily: "'Geist Mono', ui-monospace, monospace",
              fontSize: "clamp(11px, 1.1vw, 13px)",
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
              fontSize: "clamp(22px, 3vw, 40px)",
              fontWeight: 700,
              letterSpacing: "-1px",
              lineHeight: "1.15",
              color: "#171717",
              margin: 0,
            }}
          >
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                color: "inherit",
                textDecoration: "none",
              }}
            >
              {project.title}
            </a>
          </h3>
          <p
            style={{
              fontSize: "clamp(14px, 1.25vw, 16px)",
              color: "#666666",
              lineHeight: "1.6",
              margin: 0,
            }}
          >
            {project.problem || project.description}
          </p>
        </div>

        {/* Action Buttons */}
        <div
          className="project-actions-container"
          onClick={(e) => e.stopPropagation()}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
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
              gap: 10,
              height: 46,
              padding: "0 8px",
              borderRadius: 9999,
              backgroundColor: "transparent",
              color: "#0057c0",
              fontSize: "clamp(13px, 1.15vw, 15px)",
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
              width="18"
              height="18"
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

          {/* Live Demo — visible on all devices */}
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="inline-flex items-center justify-center gap-2 px-4 rounded-full font-semibold transition-all duration-200"
            style={{
              height: 38,
              paddingLeft: 8,
              paddingRight: 8,
              backgroundColor: "transparent",
              border: "none",
              color: "#0057c0",
              textDecoration: "none",
              cursor: "pointer",
              boxShadow: "none",
              fontSize: "clamp(13px, 1.15vw, 15px)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#0041a0";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#0057c0";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Live Demo
            <ExternalLinkIcon size={16} />
          </a>
        </div>
      </div>

      {/* ── Right Column: decorative image panel (clickable only on mobile) ── */}
      <div
        className="project-image-container"
        onClick={(e) => {
          if (isMobile) {
            e.stopPropagation();
            window.open(project.links.live, "_blank", "noopener,noreferrer");
          }
        }}
        style={{
          flex: "1 1 50%",
          background: CATEGORY_GRADIENTS[project.category] || DEFAULT_GRADIENT,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 32,
          position: "relative",
          overflow: "hidden",
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
      </div>
    </div>
  );
}
