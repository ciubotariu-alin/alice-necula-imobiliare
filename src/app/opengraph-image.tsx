import { ImageResponse } from "next/og";
import { site } from "@/data/site";

// Imaginea de social sharing (Open Graph + Twitter), generată dinamic.
// Aplicată implicit tuturor paginilor care nu definesc propria imagine.
export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          background: "linear-gradient(135deg, #17324b 0%, #1f4262 100%)",
          color: "#ffffff",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 30,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#c29a4a",
            marginBottom: 28,
          }}
        >
          {site.role}
        </div>
        <div style={{ fontSize: 108, fontWeight: 700, lineHeight: 1.05 }}>
          {site.name}
        </div>
        <div
          style={{
            fontSize: 40,
            color: "#dfe7ee",
            marginTop: 28,
            maxWidth: 820,
          }}
        >
          Vânzarea locuinței tale din zona de nord a Bucureștiului.
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginTop: 56,
            fontSize: 28,
            color: "#c29a4a",
          }}
        >
          <div style={{ width: 60, height: 3, background: "#c29a4a" }} />
          {site.url.replace(/^https?:\/\//, "")}
        </div>
      </div>
    ),
    { ...size }
  );
}
