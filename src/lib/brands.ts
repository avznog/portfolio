import {
  siDocker,
  siGitlab,
  siGnubash,
  siGooglecloud,
  siGrafana,
  siHelm,
  siKubernetes,
  siLinux,
  siOpentelemetry,
  siTerraform,
} from "simple-icons";

export type Brand = { hex: string; path?: string };

const icon = (i: { hex: string; path: string }): Brand => ({
  hex: `#${i.hex}`,
  path: i.path,
});

export const brands: Record<string, Brand> = {
  // No simple-icons mark for AWS (trademark) — brand color only.
  "AWS · EKS": { hex: "#FF9900" },
  AWS: { hex: "#FF9900" },

  "GCP · Cloud SQL": icon(siGooglecloud),
  GCP: icon(siGooglecloud),

  Kubernetes: icon(siKubernetes),
  Docker: icon(siDocker),
  Helm: icon(siHelm),
  Grafana: icon(siGrafana),
  OTEL: icon(siOpentelemetry),
  Terraform: icon(siTerraform),
  "GitLab CI": icon(siGitlab),
  GitLab: icon(siGitlab),
  Linux: icon(siLinux),
  Bash: icon(siGnubash),
};
