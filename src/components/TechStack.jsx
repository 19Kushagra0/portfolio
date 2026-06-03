import React from "react";
import { topRowTechs, bottomRowTechs } from "../data/techStack";

import {
  TailwindIcon,
  GeminiIcon,
  PostgreSQLIcon,
  ReactIcon,
  NodeIcon,
  JavaIcon,
  MongoIcon,
  MotionIcon,
} from "./Icons";

const iconMap = {
  Tailwind: TailwindIcon,
  Gemini: GeminiIcon,
  PostgreSQL: PostgreSQLIcon,
  React: ReactIcon,
  Node: NodeIcon,
  Java: JavaIcon,
  MongoDB: MongoIcon,
  Motion: MotionIcon,
};

export default function TechStack() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 1400,
        margin: "0 auto",
        padding: "0 24px",
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes marquee-ltr {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
            @keyframes marquee-rtl {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee-track-ltr {
              display: flex;
              width: max-content;
              gap: 16px;
              animation: marquee-ltr 20s linear infinite;
            }
            .marquee-track-rtl {
              display: flex;
              width: max-content;
              gap: 16px;
              animation: marquee-rtl 20s linear infinite;
            }
            .marquee-row:hover .marquee-track-ltr,
            .marquee-row:hover .marquee-track-rtl {
              animation-play-state: paused;
            }
          `,
        }}
      />

      <div
        className="stacked-shadow-low"
        style={{
          backgroundColor: "#171717",
          borderRadius: 24,
          padding: "40px",
          position: "relative",
          overflow: "hidden",
          border: "1px solid #2a2a2a",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 32,
          }}
        >
          <span
            style={{
              fontFamily: "'Geist Mono', ui-monospace, monospace",
              fontSize: 12,
              color: "#888888",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              fontWeight: 600,
            }}
          >
            Stack
          </span>

        </div>

        {/* Marquee Rows Container */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            position: "relative",
            width: "100%",
            overflow: "hidden",
            // Gradient fading on the sides
            WebkitMaskImage:
              "linear-gradient(to right, transparent, white 15%, white 85%, transparent)",
            maskImage:
              "linear-gradient(to right, transparent, white 15%, white 85%, transparent)",
          }}
        >
          {/* Top Row: Left to Right */}
          <div className="marquee-row" style={{ overflow: "hidden", width: "100%" }}>
            <div className="marquee-track-ltr">
              {/* First Set */}
              {topRowTechs.map((tech, idx) => {
                const Icon = iconMap[tech.icon] || (() => null);
                return (
                  <div
                    key={`top-1-${idx}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "8px 20px",
                      borderRadius: 9999,
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      backgroundColor: "rgba(255, 255, 255, 0.02)",
                      color: "#ffffff",
                      fontSize: 14,
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                    }}
                  >
                    <Icon />
                    {tech.name}
                  </div>
                );
              })}
              {/* Second Set (Duplicate) */}
              {topRowTechs.map((tech, idx) => {
                const Icon = iconMap[tech.icon] || (() => null);
                return (
                  <div
                    key={`top-2-${idx}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "8px 20px",
                      borderRadius: 9999,
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      backgroundColor: "rgba(255, 255, 255, 0.02)",
                      color: "#ffffff",
                      fontSize: 14,
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                    }}
                  >
                    <Icon />
                    {tech.name}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom Row: Right to Left */}
          <div className="marquee-row" style={{ overflow: "hidden", width: "100%" }}>
            <div className="marquee-track-rtl">
              {/* First Set */}
              {bottomRowTechs.map((tech, idx) => {
                const Icon = iconMap[tech.icon] || (() => null);
                return (
                  <div
                    key={`bottom-1-${idx}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "8px 20px",
                      borderRadius: 9999,
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      backgroundColor: "rgba(255, 255, 255, 0.02)",
                      color: "#ffffff",
                      fontSize: 14,
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                    }}
                  >
                    <Icon />
                    {tech.name}
                  </div>
                );
              })}
              {/* Second Set (Duplicate) */}
              {bottomRowTechs.map((tech, idx) => {
                const Icon = iconMap[tech.icon] || (() => null);
                return (
                  <div
                    key={`bottom-2-${idx}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "8px 20px",
                      borderRadius: 9999,
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      backgroundColor: "rgba(255, 255, 255, 0.02)",
                      color: "#ffffff",
                      fontSize: 14,
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                    }}
                  >
                    <Icon />
                    {tech.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
