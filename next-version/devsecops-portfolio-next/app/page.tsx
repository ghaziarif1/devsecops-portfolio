// app/page.tsx
import Header from '@/components/Header';
import About from '@/components/About';
import Skills from '@/components/Skills';
import DevSecOpsSkills from '@/components/DevSecOpsSkills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="pt-20">
      <Header />
      <About />
      <Skills />
      <DevSecOpsSkills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
