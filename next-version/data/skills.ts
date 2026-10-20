export interface Skill {
  name: string;
  level: number;
}

export const skills: Skill[] = [
  { name: 'Docker & Kubernetes', level: 85 },
  { name: 'CI/CD', level: 75 },
  { name: 'PostgreSQL & Cloud', level: 70 },
  { name: 'Linux & Git', level: 80 },
  { name: 'Java / Spring Boot', level: 75 },
  { name: 'Python & JavaScript', level: 70 }
];

export const devsecopsSkills = [
  { name: 'Git', icon: '🔧' },
  { name: 'Docker', icon: '🐳' },
  { name: 'Jenkins', icon: '⚙️' },
  { name: 'Kubernetes', icon: '☸️' },
  { name: 'Ansible', icon: '📦' },
  { name: 'Terraform', icon: '🏗️' },
  { name: 'Argo CD', icon: '🚀' }
];
