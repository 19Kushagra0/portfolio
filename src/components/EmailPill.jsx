"use client";

import { useState } from "react";
import { EnvelopeIcon, CopyIcon, CheckIcon } from "./Icons";

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
