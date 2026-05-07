import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { Canvas } from '@react-three/fiber';
import { AnimatePresence } from 'motion/react';

import FloatingShapes from './components/FloatingShapes';
import MouseGlow from './components/MouseGlow';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Scene3D from './components/Scene3D';
import About from './components/About';
import Skills from './components/Skills';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import ParallaxSection from './components/ParallaxSection';
import Stats from './components/Stats';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
      return;
    }
    
    document.body.style.overflow = '';

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [loading]);

  return (
    <div className="min-h-screen selection:bg-cyan-500/30">
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      <MouseGlow />
      <Navbar />
      <FloatingShapes />
      
      <main>
        {/* Background 3D Canvas - fixed position behind heroic layer */}
        <div className="fixed inset-0 z-0 pointer-events-auto">
          <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
            <color attach="background" args={['#050508']} />
            <fog attach="fog" args={['#050508', 10, 40]} />
            <Scene3D />
          </Canvas>
        </div>

        {/* Content layers sit on top of 3D canvas */}
        <div className="relative z-10 pointer-events-none">
          <div className="pointer-events-auto">
            <Hero />
          </div>
        </div>

        {/* Standard sections with opaque backgrounds to cover 3D scene when scrolled */}
        <div className="relative z-20 bg-zinc-950 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
          <About />
          <Skills />
          <TechStack />
          <Projects />
          <ParallaxSection />
          <Experience />
          <Stats />
          <Testimonial />
          <Contact />
          <Footer />
        </div>
      </main>
    </div>
  );
}
