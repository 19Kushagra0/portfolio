import { GitHubIcon, LinkedInIcon } from "./Icons";

export default function Hero() {
  return (
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 12,
            textAlign: "left",
          }}
        >
          {/* Line 01 */}
          <div
            className="hero-line-1"
            style={{ display: "flex", alignItems: "flex-start", gap: 16 }}
          >
            <span
              aria-hidden="true"
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
          </div>

          {/* Line 02 */}
          <div
            className="hero-line-2"
            style={{ display: "flex", alignItems: "flex-start", gap: 16 }}
          >
            <span
              aria-hidden="true"
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
            <p
              className="hero-headline"
              style={{
                fontSize: 48,
                fontWeight: 600,
                letterSpacing: "-2.4px",
                lineHeight: "48px",
                color: "#171717",
                margin: 0,
              }}
            >
              {"<I\u00A0"}
              <span style={{ color: "#0057c0" }}>Wire</span>
              {"\u00A0ideas\u00A0&>"}
            </p>
          </div>

          {/* Line 03 */}
          <div
            className="hero-line-3"
            style={{ display: "flex", alignItems: "flex-start", gap: 16 }}
          >
            <span
              aria-hidden="true"
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
            <p
              className="hero-headline"
              style={{
                fontSize: 48,
                fontWeight: 600,
                letterSpacing: "-2.4px",
                lineHeight: "48px",
                color: "#171717",
                margin: 0,
              }}
            >
              {"<"}
              <span style={{ color: "#0057c0" }}>Ship</span>
              {"\u00A0products>"}
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div
          className="hero-cta-row"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            paddingTop: 32,
            marginLeft: 40,
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://github.com/19Kushagra0"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta-btn hero-cta-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              height: 48,
              padding: "0 32px",
              borderRadius: 9999,
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: "-0.05em",
              textDecoration: "none",
            }}
          >
            <GitHubIcon />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kushagra-sharma-ks/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta-btn hero-cta-secondary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              height: 48,
              padding: "0 32px",
              borderRadius: 9999,
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: "-0.05em",
              textDecoration: "none",
            }}
          >
            <LinkedInIcon />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

