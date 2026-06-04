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
  // No simple-icons mark for AWS (trademark) — brand color only.
  AWS: { hex: "#FF9900" },
  EKS: { hex: "#FF9900" },
  ECS: { hex: "#FF9900" },
  EC2: { hex: "#FF9900" },
  RDS: { hex: "#FF9900" },
  ECR: { hex: "#FF9900" },
  Lambda: { hex: "#FF9900" },
  VPC: { hex: "#FF9900" },
  S3: { hex: "#FF9900" },

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
