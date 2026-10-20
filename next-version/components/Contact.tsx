export default function Contact() {
  const links = [
    { href: 'mailto:ghaziarif2003@gmail.com', label: '✉️ ghaziarif2003@gmail.com' },
    { href: 'tel:0021695819261', label: '📞 0021695819261' },
    { href: 'https://github.com/ghaziarif1', label: '🔗 github.com/ghaziarif1' }
  ];

  return (
    <section id="contact" className="my-16 p-6 bg-slate-800 rounded-xl">
      <h2 className="text-2xl text-sky-400 border-b-2 border-indigo-400 pb-2 mb-6">Contact</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            className="bg-slate-900 p-4 rounded-lg border border-slate-700 hover:border-sky-400 transition text-sky-400"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
