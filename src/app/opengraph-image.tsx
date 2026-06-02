import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Benjamin Gonzva — Cloud / DevOps Engineer";

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
          padding: 96,
          background:
            "linear-gradient(135deg, #fafaf7 0%, #eef0fb 55%, #e6f3ec 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#7c6fe0",
            fontWeight: 600,
          }}
        >
          Cloud / DevOps Engineer
        </div>
        <div
          style={{
            fontSize: 96,
            fontWeight: 700,
            color: "#1c1c22",
            marginTop: 8,
          }}
        >
          Benjamin Gonzva
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#54545e",
            marginTop: 24,
            maxWidth: 900,
            lineHeight: 1.4,
          }}
        >
          Kubernetes · Terraform · CI/CD · Observability — multi-cloud
          infrastructure at scale.
        </div>
      </div>
    ),
    size,
  );
}
