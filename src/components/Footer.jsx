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
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          width: "100%",
          padding: "64px 24px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 32,
        }}
      >
        {/* Brand col */}
        <div
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
            Kushagra Sharma.
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
            © {new Date().getFullYear()} Kushagra Sharma. Built with
            precision.
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
          <span
            style={{
              fontFamily: "'Geist Mono', ui-monospace, monospace",
              fontSize: 12,
              color: "#888888",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: 4,
            }}
          >
            Connect
          </span>
          {[
            { label: "Github", href: "https://github.com/19Kushagra0" },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/kushagra-sharma-ks/",
            },
            { label: "Email", href: "mailto:kushagra@example.com" },
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
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#171717";
                e.target.style.textDecoration = "underline";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#888888";
                e.target.style.textDecoration = "none";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Navigate col */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <span
            style={{
              fontFamily: "'Geist Mono', ui-monospace, monospace",
              fontSize: 12,
              color: "#888888",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              marginBottom: 4,
            }}
          >
            Navigate
          </span>
          {[{ label: "Work", href: "#projects" }].map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontFamily: "'Geist Mono', ui-monospace, monospace",
                fontSize: 12,
                color: link.label === "Work" ? "#171717" : "#888888",
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#171717";
                e.target.style.textDecoration = "underline";
              }}
              onMouseLeave={(e) => {
                e.target.style.color =
                  link.label === "Work" ? "#171717" : "#888888";
                e.target.style.textDecoration = "none";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
