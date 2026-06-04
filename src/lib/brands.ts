import {
  siAngular,
  siDocker,
  siGitlab,
  siGnubash,
  siGooglecloud,
  siGrafana,
  siHelm,
  siKubernetes,
  siLinux,
  siNestjs,
  siOpentelemetry,
  siPostgresql,
  siProxmox,
  siReact,
  siTerraform,
  siThanos,
  siTypescript,
} from "simple-icons";

export type Brand = { hex: string; path?: string };

const icon = (i: { hex: string; path: string }): Brand => ({
  hex: `#${i.hex}`,
  path: i.path,
});

export const brands: Record<string, Brand> = {
  // AWS — no simple-icons mark (trademark). Pills use AWS's official
  // architecture-icon category colors so each service reads distinctly.
  AWS: { hex: "#FF9900" },
  EC2: { hex: "#ED7100" }, // Compute — orange
  Lambda: { hex: "#ED7100" }, // Compute — orange
  EKS: { hex: "#ED7100" }, // Containers — orange
  ECS: { hex: "#ED7100" }, // Containers — orange
  ECR: { hex: "#ED7100" }, // Containers — orange
  S3: { hex: "#7AA116" }, // Storage — green
  RDS: { hex: "#C925D1" }, // Database — magenta
  VPC: { hex: "#8C4FFF" }, // Networking — purple

  // Google Cloud services — brand color only (no per-service simple-icons marks).
  GCP: icon(siGooglecloud),
  GKE: { hex: "#4285F4" },
  GCE: { hex: "#4285F4" },
  "Cloud SQL": { hex: "#4285F4" },
  GCS: { hex: "#4285F4" },
  IAM: { hex: "#4285F4" },

  Kubernetes: icon(siKubernetes),
  Docker: icon(siDocker),
  Helm: icon(siHelm),
  Grafana: icon(siGrafana),
  OTEL: icon(siOpentelemetry),
  Thanos: icon(siThanos),
  Terraform: icon(siTerraform),
  "GitLab CI": icon(siGitlab),
  GitLab: icon(siGitlab),
  Linux: icon(siLinux),
  Bash: icon(siGnubash),

  Angular: icon(siAngular),
  NestJS: icon(siNestjs),
  React: icon(siReact),
  PostgreSQL: icon(siPostgresql),
  TypeScript: icon(siTypescript),
  Proxmox: icon(siProxmox),
};
