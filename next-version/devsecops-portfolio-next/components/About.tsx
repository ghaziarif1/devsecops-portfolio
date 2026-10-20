export default function About() {
  return (
    <section id="about" className="my-16 p-6 bg-slate-800 rounded-xl">
      <h2 className="text-2xl text-sky-400 border-b-2 border-indigo-400 pb-2 mb-6">À propos</h2>
      <div className="flex items-center gap-6 flex-wrap">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-sky-400 to-indigo-500 flex items-center justify-center text-4xl font-bold text-slate-900">
          GA
        </div>
        <div className="flex-1 min-w-[250px]">
          <h1 className="text-3xl font-bold text-slate-100">Ghazi Arif</h1>
          <p className="text-sky-400 font-semibold mb-4">
            Étudiant en Mastère DevOps &amp; Cloud Computing
          </p>
          <p className="text-slate-300">
            Passionné par l'automatisation, les technologies Cloud et le développement logiciel.
            Je souhaite approfondir mes compétences en CI/CD, conteneurisation, orchestration
            et administration des systèmes, avec une orientation DevSecOps.
          </p>
        </div>
      </div>
    </section>
  );
}
