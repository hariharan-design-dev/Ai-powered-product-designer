import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Navigation from '../components/Navigation';
import Work from '../components/Work';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="bg-bg-primary text-text-primary">
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
    </>
  );
}
