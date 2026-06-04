import { useState } from "react";
import { motion } from "framer-motion";
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

export default function Main({ onOpenDetails }) {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projectsData.filter((project) => 
    filter === "All" ? true : project.category === filter
  );

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
                <span style={{ color: "#0057c0" }}>Frontend Focused</span>
                {"\u00A0Full Stack\u00A0"}
                <span style={{ color: "#0057c0" }}>Developer</span>
                {">"}
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
                <span style={{ color: "#0057c0" }}>Who Builds</span>
                {"\u00A0and\u00A0"}
                <span style={{ color: "#0057c0" }}>Integrates</span>
                {"\u00A0modern web applications>"}
              </h2>
            </motion.div>
          </motion.div>

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
          padding: "128px 24px",
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
            A collection of projects I&apos;ve built to learn, experiment, and
            grow as a developer. Focusing on robust frontends and seamless user
            experiences.
          </p>
        </div>

        {/* Filter Tabs */}
        <div style={{ display: "flex", gap: 12, marginTop: 24, marginBottom: 8, flexWrap: "wrap" }}>
          {["All", "Full Stack", "Pixel Perfect"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: "8px 16px",
                borderRadius: 9999,
                fontSize: 14,
                fontWeight: 500,
                cursor: "pointer",
                transition: "all 0.2s ease",
                backgroundColor: filter === cat ? "#171717" : "#f5f5f5",
                color: filter === cat ? "#ffffff" : "#666666",
                border: filter === cat ? "1px solid #171717" : "1px solid #ebebeb",
              }}
              onMouseEnter={(e) => {
                if (filter !== cat) e.currentTarget.style.backgroundColor = "#ebebeb";
              }}
              onMouseLeave={(e) => {
                if (filter !== cat) e.currentTarget.style.backgroundColor = "#f5f5f5";
              }}
            >
              {cat}
            </button>
          ))}
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
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 24,
            paddingTop: 24,
          }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div key={project.id} variants={cardItemVariants}>
              <ProjectCard
                project={project}
                displayNumber={String(index + 1).padStart(2, "0")}
                onOpenDetails={() => onOpenDetails(project)}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </main>
  );
}

/* ── Project Card Component ── */
function ProjectCard({ project, displayNumber, onOpenDetails }) {
  return (
    <div
      className="card-soft-glow stacked-shadow-low"
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: 12,
        border: "1px solid #ebebeb",
        overflow: "hidden",
        backgroundColor: "#ffffff",
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
          {displayNumber}
        </span>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="project-preview-image"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
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
              WebkitLineClamp: 1,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {project.description}
          </p>
        </div>

        {/* Tech Stack Tags */}
        {project.tags && project.tags.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                style={{
                  fontFamily: "'Geist Mono', ui-monospace, monospace",
                  fontSize: 12,
                  color: "#666666",
                  backgroundColor: "#f5f5f5",
                  padding: "4px 8px",
                  borderRadius: 6,
                  border: "1px solid #ebebeb",
                }}
              >
                [{tag}]
              </span>
            ))}
          </div>
        )}

        {/* Card actions */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            marginTop: "auto",
            paddingTop: 8,
          }}
        >
          {/* View Details Button */}
          <button
            onClick={onOpenDetails}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 40,
              borderRadius: 8,
              backgroundColor: "#171717",
              color: "#ffffff",
              fontSize: 14,
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              width: "100%",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#333333";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#171717";
            }}
          >
            View Details
          </button>

          {/* Links: Live Demo • GitHub */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#666666",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#171717")}
              onMouseLeave={(e) => (e.target.style.color = "#666666")}
            >
              Live Demo
            </a>
            <span style={{ color: "#d4d4d4" }}>•</span>
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#666666",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#171717")}
              onMouseLeave={(e) => (e.target.style.color = "#666666")}
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
