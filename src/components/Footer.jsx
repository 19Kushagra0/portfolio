"use client";

import { useState } from "react";
import { GitHubIcon, LinkedInIcon, DownloadIcon } from "./Icons";

function EnvelopeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#b59a72" /* Warmer gold for light theme readability */
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#10b981"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function EmailPill({ email }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        backgroundColor: "#fafafa",
        border: "1px solid #ebebeb",
        borderRadius: "9999px",
        padding: "6px 14px",
        cursor: "pointer",
        width: "fit-content",
        transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
        outline: "none",
        marginTop: "8px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.02)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#ffffff";
        e.currentTarget.style.borderColor = "#d5d5d5";
        e.currentTarget.style.transform = "translateY(-1.5px)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#fafafa";
        e.currentTarget.style.borderColor = "#ebebeb";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.02)";
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <EnvelopeIcon />
      </div>
      <span
        style={{
          fontFamily: "'Geist Mono', ui-monospace, monospace",
          fontSize: "12px",
          fontWeight: 600,
          color: "#4d4d4d",
          letterSpacing: "0.02em",
        }}
      >
        {email}
      </span>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          color: copied ? "#10b981" : "#888888",
          marginLeft: "4px",
          transition: "color 0.2s ease",
        }}
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </div>
    </button>
  );
}

export default function Footer() {
  return (
    <footer
      id="footer"
      style={{
        backgroundColor: "#ffffff",
        borderTop: "1px solid #ebebeb",
        width: "100%",
      }}
    >
      <div
        className="footer-grid"
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          width: "100%",
          padding: "clamp(32px, 6vw, 64px) clamp(16px, 4vw, 24px)",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 32,
        }}
      >
        {/* Brand col */}
        <div
          className="footer-brand-col"
          style={{
            gridColumn: "span 2",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <span
            style={{
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: "-0.6px",
              color: "#171717",
            }}
          >
            Kushagra<span className="brand-last-name"> Sharma</span>.
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
          {[
            { label: "Github", href: "https://github.com/19Kushagra0" },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/kushagra-sharma-ks/",
            },
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
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                width: "fit-content",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#171717";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#888888";
              }}
            >
              {link.label === "Github" ? (
                <GitHubIcon size={14} style={{ color: "currentColor" }} />
              ) : (
                <LinkedInIcon size={14} style={{ color: "currentColor" }} />
              )}
              {link.label}
            </a>
          ))}
          <EmailPill email="hello@kushagrasharma.space" />
        </div>

        {/* Navigate col */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {[
            { label: "Work", href: "#projects" },
            { label: "Resume", href: "/kushagra_sharma.pdf", download: "kushagra_sharma.pdf" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              download={link.download}
              style={{
                fontFamily: "'Geist Mono', ui-monospace, monospace",
                fontSize: 12,
                color: link.label === "Work" ? "#171717" : "#888888",
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                transition: "color 0.2s",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#171717";
                e.currentTarget.style.textDecoration = "underline";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color =
                  link.label === "Work" ? "#171717" : "#888888";
                e.currentTarget.style.textDecoration = "none";
              }}
            >
              {link.label === "Resume" && <DownloadIcon size={14} style={{ color: "currentColor" }} />}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

