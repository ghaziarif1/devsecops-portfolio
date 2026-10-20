import { devsecopsSkills } from '@/data/skills';

export default function DevSecOpsSkills() {
  return (
    <section id="devsecops-skills" className="my-16 p-6 bg-slate-800 rounded-xl">
      <h2 className="text-2xl text-sky-400 border-b-2 border-indigo-400 pb-2 mb-6">
        DevSecOps Skills
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
        {devsecopsSkills.map((tech) => (
          <div
            key={tech.name}
            className="bg-slate-900 border border-slate-700 rounded-lg p-4 text-center hover:border-sky-400 hover:-translate-y-1 transition"
          >
            <span className="block text-2xl mb-1">{tech.icon}</span>
            <span className="text-sm font-semibold text-slate-200">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
