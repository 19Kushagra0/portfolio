"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLinkIcon, ArrowUpRightIcon } from "./Icons";
import { projectsData } from "../data/project";
import ProjectModal from "./ProjectModal";

const cardContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0,
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 1, scale: 1 },
  visible: {
    opacity: 1,
    scale: 1,
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

const ALL_CATEGORIES = ["All", "RAG", "Full Stack", "Pixel Perfect"];
const VISIBLE_CATEGORIES = ALL_CATEGORIES.filter(
  (cat) =>
    cat === "All" ||
    projectsData.some(
      (p) =>
        p.category === cat || (cat === "Full Stack" && p.category === "RAG")
    )
);

function useWindowWidth() {
  const [width, setWidth] = useState(1024);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth <= 500;

  const filteredProjects = projectsData.filter((project) => {
    if (filter === "All") return true;
    if (filter === "Full Stack" && project.category === "RAG") return true;
    return project.category === filter;
  });

  const activePillStyle =
    CATEGORY_PILL_STYLES[filter] || CATEGORY_PILL_STYLES["All"];

  return (
    <>
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
            background: activePillStyle.bg,
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(0, 0, 0, 0.05)",
            boxShadow: activePillStyle.shadow,
            marginTop: -8,
            marginBottom: 0,
            position: "relative",
            flexWrap: "nowrap",
            maxWidth: "100%",
            overflowX: "auto",
            transition: "background 0.4s ease, box-shadow 0.4s ease",
          }}
        >
          {VISIBLE_CATEGORIES.map((cat) => {
            const isActive = filter === cat;
            const pillStyle =
              CATEGORY_PILL_STYLES[cat] || CATEGORY_PILL_STYLES["All"];
            return (
              <button
                key={cat}
                type="button"
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
            paddingTop: 0,
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
                  onOpenDetails={() => setSelectedProject(project)}
                  isMobile={isMobile}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function ProjectCard({ project, displayNumber, onOpenDetails, isMobile }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      setImageLoaded(true);
    }
  }, []);

  return (
    <div
      className="project-row-card group"
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
        minHeight: "360px",
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
          padding: "24px clamp(20px, 3vw, 40px) 24px clamp(32px, 4.5vw, 48px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 12,
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
          <button
            type="button"
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
            <ArrowUpRightIcon />
          </button>

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
          backgroundColor: "#e5e5e5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 32,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {project.image ? (
          <>
            {!imageLoaded && (
              <motion.div
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{
                  repeat: Infinity,
                  duration: 0.8,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                style={{
                  position: "absolute",
                  width: "90%",
                  height: "85%",
                  borderRadius: 12,
                  backgroundColor: "#d4d4d4",
                  boxShadow: "0 12px 36px rgba(0, 0, 0, 0.1)",
                }}
              />
            )}
            <motion.img
              ref={imgRef}
              src={project.image}
              alt={`${project.title} — live project screenshot`}
              className="project-card-image"
              loading="lazy"
              width={1920}
              height={960}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageLoaded(true)}
              whileHover={{ scale: 1.05 }}
              transition={{
                scale: { type: "spring", stiffness: 400, damping: 25 },
                opacity: { duration: 0.4, ease: "easeOut" },
              }}
              style={{
                maxWidth: "90%",
                maxHeight: "85%",
                width: "auto",
                height: "auto",
                objectFit: "contain",
                borderRadius: 12,
                boxShadow: "0 12px 36px rgba(0, 0, 0, 0.4)",
                opacity: imageLoaded ? 1 : 0,
              }}
            />
          </>
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

