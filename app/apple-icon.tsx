import { ImageResponse } from "next/og";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";
export default function AppleIcon() {
  return new ImageResponse(<div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "100%", background: "#c9ff2f", color: "#0c0c0b", fontSize: 124, fontFamily: "serif" }}>A</div>, size);
}
