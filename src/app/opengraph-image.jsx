import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Kushagra Sharma - Developer Portfolio";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: "#fafafa",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: "100px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Line 01 */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: "24px" }}>
            <span style={{ fontSize: 28, color: "#888888", marginRight: 40, fontFamily: "monospace" }}>
              01
            </span>
            <span style={{ fontSize: 72, fontWeight: 600, color: "#171717", letterSpacing: "-0.04em" }}>
              &lt;Hello, I'm <span style={{ color: "#0057c0" }}>Kushagra!</span>&gt;
            </span>
          </div>

          {/* Line 02 */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: "24px" }}>
            <span style={{ fontSize: 28, color: "#888888", marginRight: 40, fontFamily: "monospace" }}>
              02
            </span>
            <span style={{ fontSize: 72, fontWeight: 600, color: "#171717", letterSpacing: "-0.04em" }}>
              &lt;<span style={{ color: "#0057c0" }}>I Wires</span> ideas and <span style={{ color: "#0057c0" }}>Ships</span> products&gt;
            </span>
          </div>

          {/* Line 03 */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ fontSize: 28, color: "#888888", marginRight: 40, fontFamily: "monospace" }}>
              03
            </span>
            <span style={{ fontSize: 72, fontWeight: 600, color: "#171717", letterSpacing: "-0.04em" }}>
              &lt;From <span style={{ color: "#0057c0" }}>APIs</span> to <span style={{ color: "#0057c0" }}>UI</span>, end to end&gt;
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
