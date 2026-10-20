export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur border-b border-slate-700 p-4 z-50">
      <div className="flex justify-center gap-4 flex-wrap text-slate-200">
        <a href="#about" className="hover:text-sky-400 transition">À propos</a>
        <a href="#skills" className="hover:text-sky-400 transition">Compétences</a>
        <a href="#devsecops-skills" className="hover:text-sky-400 transition">DevSecOps</a>
        <a href="#projects" className="hover:text-sky-400 transition">Projets</a>
        <a href="#experience" className="hover:text-sky-400 transition">Expérience</a>
        <a href="#contact" className="hover:text-sky-400 transition">Contact</a>
      </div>
    </nav>
  );
}
