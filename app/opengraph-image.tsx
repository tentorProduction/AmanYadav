import { ImageResponse } from "next/og";

export const alt = "Aman Yadav — Full-Stack Developer in Janakpur, Nepal";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#f2f0e8",
          color: "#0c0c0b",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="56" height="56" viewBox="0 0 48 48" fill="none" stroke="#0c0c0b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13.5 40.5Q18.5 24 25 7.5" />
            <path d="M25 7.5Q31 23 35 40.5" />
            <path d="M17.5 29.5Q24.5 27.6 31.5 28.8" />
            <circle cx="38.5" cy="10.5" r="2.4" fill="#c9ff2f" stroke="#0c0c0b" strokeWidth="1.6" />
          </svg>
          <div style={{ fontSize: 26, letterSpacing: 4, textTransform: "uppercase", opacity: 0.65 }}>
            amanyadav.dev
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, lineHeight: 1.05, letterSpacing: -2 }}>
            Aman Yadav
          </div>
          <div style={{ fontSize: 40, marginTop: 22, opacity: 0.72 }}>
            Full-Stack Developer
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "2px solid rgba(12,12,11,.22)",
            paddingTop: 28,
            fontSize: 26,
            opacity: 0.7,
          }}
        >
          <div style={{ display: "flex", gap: 26 }}>
            <span>Web apps</span>
            <span>Mobile</span>
            <span>Backend</span>
          </div>
          <div
            style={{
              background: "#c9ff2f",
              color: "#0c0c0b",
              padding: "10px 22px",
              borderRadius: 999,
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            7 live products
          </div>
        </div>
      </div>
    ),
    size,
  );
}
