export default function Header() {
  return (
    <header
      style={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #ebebeb",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <nav
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          width: "100%",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <a
            href="#"
            style={{
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: "-0.6px",
              color: "#171717",
              textDecoration: "none",
            }}
          >
            Kushagra<span className="brand-last-name"> Sharma</span>.
          </a>
          <div
            className="nav-links"
            style={{ display: "flex", alignItems: "center", gap: 24 }}
          >
            {["Projects", "Connect"].map((item) => (
              <a
                key={item}
                href={item === "Connect" ? "#footer" : "#projects"}
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#888888",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#171717")}
                onMouseLeave={(e) => (e.target.style.color = "#888888")}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
