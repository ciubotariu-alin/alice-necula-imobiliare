import { ImageResponse } from "next/og";

// Favicon generat: cerc navy cu inițiala „N" aurie (marca brandului).
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#17324b",
          borderRadius: "50%",
          color: "#c29a4a",
          fontSize: 40,
          fontWeight: 700,
          fontFamily: "Georgia, serif",
        }}
      >
        N
      </div>
    ),
    { ...size }
  );
}
