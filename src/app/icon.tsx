import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
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
          fontSize: 18,
          fontWeight: 700,
          color: "#fff",
          borderRadius: 8,
          background: "linear-gradient(135deg, #7c6fe0 0%, #bfdcf4 100%)",
        }}
      >
        BG
      </div>
    ),
    size,
  );
}
