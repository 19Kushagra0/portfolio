"use client";

import React, { useEffect, useState } from "react";
import { GitHubIcon } from "./Icons";

// Custom dark theme green colors mapped from contribution count
const getContributionColor = (count) => {
  if (count === 0) return "#161b22"; // Empty dark gray
  if (count <= 3) return "#0e4429"; // Lowest green
  if (count <= 6) return "#006d32"; // Low-mid green
  if (count <= 10) return "#26a641"; // Mid green
  return "#39d353"; // Highest neon green
};

export default function GitHubContributions() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/github");
        const json = await res.json();
        
        if (json.data && json.data.user) {
          setData(json.data.user.contributionsCollection.contributionCalendar);
        } else {
          console.error("Failed to parse GitHub data:", json);
        }
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 1400,
        margin: "0 auto",
        marginTop: 70, // Added 70px distance from Hero section
        padding: "0 clamp(16px, 4vw, 24px)",
        marginBottom: 24, // Space before TechStack
      }}
    >
      <div
        className="stacked-shadow-low"
        style={{
          backgroundColor: "#171717",
          borderRadius: 24,
          padding: "clamp(20px, 5vw, 40px)",
          position: "relative",
          overflow: "hidden",
          border: "1px solid #2a2a2a",
        }}
      >
        {/* Header */}
        <div
          className="github-header"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 32,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ color: "#ffffff" }}>
              <GitHubIcon />
            </div>
            <span
              style={{
                fontFamily: "'Geist Mono', ui-monospace, monospace",
                fontSize: 14,
                color: "#ffffff",
                letterSpacing: "0.1em",
                fontWeight: 600,
              }}
            >
              {loading ? "..." : data?.totalContributions || 0} CONTRIBUTIONS
            </span>
          </div>

          <div
            style={{
              backgroundColor: "rgba(57, 211, 83, 0.15)",
              color: "#39d353",
              padding: "6px 12px",
              borderRadius: 9999,
              fontFamily: "'Geist Mono', ui-monospace, monospace",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.05em",
            }}
          >
            CONSISTENT BUILDER
          </div>
        </div>

        {/* Calendar Grid Container */}
        <div
          style={{
            display: "flex",
            justifyContent: "center", // Center the graph
            width: "100%",
            overflowX: "auto", // Allow scrolling on smaller screens
            paddingBottom: 8,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 4,
            }}
          >
            {loading ? (
              <div style={{ color: "#888", fontSize: 14, fontFamily: "monospace" }}>
                Loading live graph...
              </div>
            ) : data && data.weeks ? (
              // Map over all weeks
              data.weeks.map((week, wIndex) => (
                <div
                  key={wIndex}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                  }}
                >
                  {/* Each week has up to 7 days */}
                  {week.contributionDays.map((day, dIndex) => (
                    <div
                      key={dIndex}
                      title={`${day.date}: ${day.contributionCount} contributions`}
                      style={{
                        width: 14,
                        height: 14,
                        borderRadius: 3,
                        backgroundColor: getContributionColor(day.contributionCount),
                        transition: "transform 0.2s ease",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "scale(1.2)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "scale(1)";
                      }}
                    />
                  ))}
                </div>
              ))
            ) : (
              <div style={{ color: "#888", fontSize: 14, fontFamily: "monospace" }}>
                Could not load data. Check GitHub Token.
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div
          className="github-footer"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 24,
          }}
        >
          <span
            style={{
              fontFamily: "'Geist Mono', ui-monospace, monospace",
              fontSize: 12,
              color: "#888888",
            }}
          >
            @19Kushagra0
          </span>

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 12, color: "#888", fontFamily: "monospace" }}>Less</span>
            <div style={{ display: "flex", gap: 4 }}>
              {[0, 2, 5, 8, 12].map((val, idx) => (
                <div
                  key={idx}
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 3,
                    backgroundColor: getContributionColor(val),
                  }}
                />
              ))}
            </div>
            <span style={{ fontSize: 12, color: "#888", fontFamily: "monospace" }}>More</span>
          </div>
        </div>
      </div>
    </div>
  );
}
