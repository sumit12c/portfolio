import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function ParallaxSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section 
      ref={containerRef}
      className="relative h-[60vh] md:h-[80vh] overflow-hidden flex items-center justify-center bg-zinc-950"
    >
      <motion.div 
        className="absolute inset-0 z-0 origin-center"
        style={{ y }}
      >
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
          alt="Abstract futuristic landscape" 
          className="w-full h-[140%] object-cover object-center opacity-40 brightness-50"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-zinc-950/30"></div>
      </motion.div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-6xl lg:text-7xl font-display font-light text-white mb-6 tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Elevating <span className="text-cyan-400 italic">Digital</span> Experiences
        </motion.h2>
        <motion.p
          className="text-gray-300 text-lg md:text-xl font-light"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Merging high-performance functionality with captivating, futuristic aesthetics.
        </motion.p>
      </div>
    </section>
  );
}
