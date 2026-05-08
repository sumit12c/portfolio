import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 300]);
  
  // Responsive opacity fade - mobile fades out later
  const opacity = useTransform(
    scrollY, 
    isMobile ? [0, 800, 1200] : [0, 500], 
    isMobile ? [1, 1, 0] : [1, 0]
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 3.2, // waits for loader to finish
      }
    }
  };

  const maskItemVariants = {
    hidden: { y: "120%", rotateZ: 2 },
    visible: { 
      y: 0, 
      rotateZ: 0, 
      transition: { duration: 1.2 } 
    }
  };

  const fadeItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden" 
      id="home"
    >
      {/* 3D background sits behind this because of fixed positioning in App.tsx */}
      
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center pointer-events-none"
      >
        <motion.div 
          className="flex flex-col items-start text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeItemVariants} className="inline-block py-1.5 px-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 shadow-xl">
            <span className="text-xs tracking-[0.2em] text-gray-300 font-semibold uppercase">Open to work</span>
          </motion.div>
          
          <div className="overflow-hidden mb-2 w-full text-left">
            <motion.h2 variants={maskItemVariants} className="text-sm md:text-base text-cyan-400 font-medium font-sans uppercase tracking-[0.3em] origin-left">
              Creative Developer
            </motion.h2>
          </div>
          
          <div className="overflow-hidden pb-4 w-full text-left">
            <motion.h1 variants={maskItemVariants} className="text-6xl md:text-[6rem] lg:text-[7.5rem] font-serif uppercase leading-[0.9] tracking-tighter text-white drop-shadow-2xl origin-left">
              Sumit <br/>Patel
            </motion.h1>
          </div>
          
          <div className="overflow-hidden mt-6 w-full text-left">
            <motion.p variants={maskItemVariants} className="text-gray-400 text-lg md:text-xl font-light tracking-widest uppercase text-sm origin-left">
              Interactive Experiences <br/>& <span className="text-purple-400">Generative Design</span>
            </motion.p>
          </div>

          <motion.div variants={fadeItemVariants} className="mt-12 pointer-events-auto">
            <a href="#contact" className="relative overflow-hidden group bg-white text-black px-10 py-4 rounded-full font-medium transition-all hover:scale-105 flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.2)]">
              <span className="relative z-10 tracking-widest uppercase text-xs font-bold whitespace-nowrap">Explore My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side Image Placeholder - Visible on all screens */}
        <motion.div 
          className="relative flex justify-center lg:justify-end pointer-events-auto order-last lg:order-none mt-12 lg:mt-0"
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)", x: 50 }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)", x: 0 }}
          transition={{ duration: 1.2, delay: 3.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 lg:w-80 lg:h-[500px] xl:w-[400px] xl:h-[600px] rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl group">
            <motion.div className="absolute inset-0 w-full h-full bg-zinc-900">
               <img 
                 src="/images/meimg.jpg" 
                 alt="Sumit Patel Portrait" 
                 className="w-full h-full object-cover object-center translate-x-0 group-hover:scale-105 transition-transform duration-[1.5s] ease-out opacity-70 mix-blend-luminosity hover:mix-blend-normal"
               />
            </motion.div>
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent opacity-80 pointer-events-none"></div>
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[2rem] pointer-events-none"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
