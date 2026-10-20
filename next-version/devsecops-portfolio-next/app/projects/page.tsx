// app/projects/page.tsx
import Link from 'next/link';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 pt-24">
      <h1 className="text-3xl text-sky-400 mb-6">Tous les Projets</h1>
      <div className="grid gap-4">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            <div className="bg-slate-800 p-4 rounded-lg hover:bg-slate-700 transition cursor-pointer">
              <h2 className="text-xl text-sky-400">{project.title}</h2>
              <p className="text-slate-400">{project.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
