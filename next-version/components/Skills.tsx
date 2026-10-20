import { skills } from '@/data/skills';

export default function Skills() {
  return (
    <section id="skills" className="my-16 p-6 bg-slate-800 rounded-xl">
      <h2 className="text-2xl text-sky-400 border-b-2 border-indigo-400 pb-2 mb-6">Compétences</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <label className="flex justify-between text-sm mb-1 text-slate-200">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </label>
            <div className="bg-slate-700 h-2 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-sky-400 to-indigo-500"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
