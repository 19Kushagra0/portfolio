"use client";

import { useState } from "react";

function EnvelopeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#b59a72"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
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
      aria-hidden="true"
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
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function EmailPill({ email }) {
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
      type="button"
      onClick={handleCopy}
      className="email-pill-btn"
      aria-label={`Copy email address ${email}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        borderRadius: "9999px",
        padding: "6px 14px",
        cursor: "pointer",
        width: "fit-content",
        outline: "none",
        marginTop: "8px",
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

