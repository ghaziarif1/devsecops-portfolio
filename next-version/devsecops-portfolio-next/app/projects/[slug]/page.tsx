// app/projects/[slug]/page.tsx
import { projects } from '@/data/projects';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-6 pt-24">
      <h1 className="text-3xl text-sky-400 mb-4">{project.title}</h1>
      <p className="text-slate-300 mb-6">{project.longDescription}</p>
      <h2 className="text-xl text-indigo-400 mb-2">Technologies</h2>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="bg-sky-400/15 text-sky-400 px-3 py-1 rounded-full border border-sky-400/30">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
