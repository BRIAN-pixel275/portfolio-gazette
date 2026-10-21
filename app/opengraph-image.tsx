import { ImageResponse } from "next/og";
import { site } from "@/lib/content";

export const runtime = "edge";
export const alt = `${site.name} — software, finance, and thoughtful design`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "68px",
          background: "#f5f4ef",
          color: "#17251f",
          fontFamily: "Georgia, serif",
          border: "18px solid #17251f",
        }}
      >
        <div style={{ color: "#ad3d27", fontSize: 24, letterSpacing: "0.16em", textTransform: "uppercase" }}>
          Software · Finance · Thoughtful design
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={{ fontSize: 78, fontWeight: 700 }}>{site.name}</div>
          <div style={{ color: "#63716a", fontSize: 34 }}>Building useful digital products with a business-minded point of view.</div>
        </div>
        <div style={{ color: "#63716a", fontSize: 24 }}>{site.city} · {site.nickname}</div>
      </div>
    ),
    { ...size },
  );
}
