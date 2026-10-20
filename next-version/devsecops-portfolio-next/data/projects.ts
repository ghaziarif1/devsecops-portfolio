export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    slug: 'devsecops-portfolio',
    title: 'DevSecOps Portfolio',
    description: 'Portfolio dockerisé avec Nginx',
    longDescription:
      "Portfolio single-page construit avec Next.js, conteneurisé avec Docker et déployé via Docker Compose sur le port 8081.",
    tech: ['Docker', 'Nginx', 'Next.js', 'Docker Compose']
  },
  {
    slug: 'fullstack-app',
    title: 'Application Full-Stack',
    description: 'Gestion de tâches avec CI/CD et Kubernetes',
    longDescription:
      'Application React + Node.js + PostgreSQL avec pipeline CI/CD et orchestration Kubernetes sur cluster k3s.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Kubernetes', 'GitHub Actions']
  },
  {
    slug: 'student-api',
    title: 'API de gestion des étudiants',
    description: 'API REST avec Swagger',
    longDescription:
      'API REST Spring Boot avec documentation Swagger, base PostgreSQL et interface web Next.js.',
    tech: ['Spring Boot', 'Java', 'PostgreSQL', 'Next.js', 'Swagger']
  },
  {
    slug: 'aws-localstack-lab',
    title: 'Laboratoire AWS avec LocalStack',
    description: 'Environnement AWS local',
    longDescription:
      'Environnement AWS local pour IAM, S3 et SQS via la CLI AWS.',
    tech: ['AWS', 'LocalStack', 'IAM', 'S3', 'SQS']
  }
];
