import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const techStack = [
  { name: 'Python', color: 'text-blue-400', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'JavaScript', color: 'text-yellow-400', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Node.js', color: 'text-green-500', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express', color: 'text-gray-300', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'MongoDB', color: 'text-green-600', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'SQL', color: 'text-blue-300', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'HTML5', color: 'text-orange-500', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', color: 'text-blue-500', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Figma', color: 'text-pink-400', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'React', color: 'text-cyan-400', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
];

export default function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 60%",
      }
    });

    // Bucket entrance
    tl.from(".magic-bucket", {
      y: 100,
      opacity: 0,
      rotation: -10,
      duration: 0.8,
      ease: "back.out(1.7)"
    });

    // Responsive radius and sizing
    const isMobile = window.innerWidth < 768;
    const circleRadius = isMobile ? 120 : 180; // Radius for circular positioning
    const totalIcons = techStack.length;
    
    // Calculate circular positions around the bucket
    const finalPositions = techStack.map((_, i) => {
      const angle = (i / totalIcons) * Math.PI * 2; // Distribute around full circle
      const x = Math.cos(angle) * circleRadius;
      const y = Math.sin(angle) * circleRadius;
      return { x, y };
    });

    // Icons bursting out to circular positions
    iconsRef.current.forEach((icon, i) => {
      const finalPos = finalPositions[i];
      
      // Random burst trajectory from center
      const burstAngle = Math.random() * Math.PI * 2;
      const burstDistance = Math.random() * 100 + 50;
      const burstX = Math.cos(burstAngle) * burstDistance;
      const burstY = Math.sin(burstAngle) * burstDistance;
      
      // Burst outward
      tl.fromTo(icon, 
        { 
          scale: 0, 
          y: 0,
          x: 0, 
          opacity: 0,
          rotation: 0
        },
        {
          scale: 1,
          opacity: 1,
          y: burstY,
          x: burstX,
          rotation: 0,
          duration: 0.8 + Math.random() * 0.3,
          ease: "back.out(1.3)",
          delay: i * 0.05
        },
        "-=0.5"
      );
      
      // Then settle into circular position
      tl.to(icon,
        {
          y: finalPos.y,
          x: finalPos.x,
          rotation: 0,
          duration: 0.6,
          ease: "power2.inOut",
        },
        "-=0.3"
      );
    });

  }, { scope: containerRef });

  return (
    <section className="section-black py-24 md:py-32 relative overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 relative z-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Arsenal</h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg">Tools and technologies I use to build magic.</p>
        </div>

        <div className="relative h-[420px] md:h-[500px] flex items-center justify-center">
          {/* Bursting Icons Container */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-30">
            {techStack.map((tech, index) => (
              <div
                key={index}
                ref={(el: HTMLDivElement | null) => {
                  if (el) iconsRef.current[index] = el;
                }}
                className="absolute bottom-28 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center p-3 shadow-xl tooltip-container cursor-pointer pointer-events-auto hover:bg-white/20 transition-colors group"
                style={{ zIndex: techStack.length - index }}
              >
                <img src={tech.url} alt={tech.name} className="w-full h-full object-contain filter drop-shadow-md brightness-110" style={tech.name === "Express" ? {filter: "invert(1)"} : {}} />
                
                {/* Custom Tooltip */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/80 border border-white/20 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>

          {/* Magic Bucket */}
          <div className="magic-bucket relative z-10">
            {/* Bucket Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-20 bg-purple-500/50 blur-3xl rounded-full"></div>
            
            {/* Simple CSS Bucket Shape */}
            <div className="relative w-48 h-40">
              <div className="absolute top-0 w-full h-[60px] bg-[#1a1a2e] rounded-[50%] border-4 border-[#2d2d44] border-b-0 shadow-[inset_0_20px_40px_rgba(0,0,0,0.8)] z-20"></div>
              <div className="absolute top-[30px] w-full h-[calc(100%-30px)] bg-gradient-to-b from-[#2d2d44] to-[#0f0f1a] rounded-b-[40px] border-4 border-t-0 border-[#2d2d44] flex flex-col items-center justify-center shadow-2xl z-10 overflow-hidden">
                <div className="text-4xl">✨</div>
                <div className="absolute top-0 w-full h-full bg-gradient-to-t from-transparent to-purple-500/10 pointer-events-none"></div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
