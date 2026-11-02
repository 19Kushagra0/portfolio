import { GitHubIcon, LinkedInIcon, DownloadIcon } from "./Icons";
import EmailPill from "./EmailPill";

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
              className="footer-social-link"
              style={{
                fontFamily: "'Geist Mono', ui-monospace, monospace",
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                width: "fit-content",
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
            {
              label: "Resume",
              href: "/resume",
              download: "kushagra_sharma.pdf",
            },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              download={link.download}
              className={`footer-nav-link ${
                link.label === "Work" ? "footer-nav-link-work" : ""
              }`}
              style={{
                fontFamily: "'Geist Mono', ui-monospace, monospace",
                fontSize: 12,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                width: "fit-content",
              }}
            >
              {link.label === "Resume" && (
                <DownloadIcon size={14} style={{ color: "currentColor" }} />
              )}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
