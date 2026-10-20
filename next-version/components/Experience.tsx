export default function Experience() {
  const items = [
    {
      date: 'Sept. 2025 – Présent',
      title: 'Mastère en DevOps & Cloud Computing',
      place: 'ISET Tozeur — Automatisation, conteneurisation, Cloud'
    },
    {
      date: 'Sept. 2022 – Juin 2025',
      title: 'Licence en ingénierie des systèmes informatiques',
      place: 'ISSAT Sousse — Développement logiciel, systèmes, réseaux'
    }
  ];

  return (
    <section id="experience" className="my-16 p-6 bg-slate-800 rounded-xl">
      <h2 className="text-2xl text-sky-400 border-b-2 border-indigo-400 pb-2 mb-6">
        Expérience &amp; Formation
      </h2>
      <div className="border-l-2 border-slate-600 pl-6 space-y-6">
        {items.map((item) => (
          <div key={item.title} className="relative">
            <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-sky-400 border-2 border-slate-800" />
            <p className="text-indigo-400 text-sm font-semibold">{item.date}</p>
            <h3 className="text-lg font-bold text-slate-100">{item.title}</h3>
            <p className="text-slate-400 text-sm">{item.place}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
