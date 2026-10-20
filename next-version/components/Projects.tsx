import Link from 'next/link';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <section id="projects" className="my-16 p-6 bg-slate-800 rounded-xl">
      <h2 className="text-2xl text-sky-400 border-b-2 border-indigo-400 pb-2 mb-6">Projets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            <div className="bg-slate-900 p-4 rounded-lg border border-slate-700 hover:border-sky-400 transition cursor-pointer h-full">
              <h3 className="text-sky-400 text-lg mb-2">{project.title}</h3>
              <p className="text-slate-400 text-sm mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-1">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-sky-400/15 text-sky-400 px-2 py-1 rounded-full border border-sky-400/30"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
