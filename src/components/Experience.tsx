import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "Hackathon Participant",
    company: "SIH (Smart India Hackathon)",
    duration: "Recent",
    description: "Collaborated with a team of developers under intense deadlines to architect and deliver innovative software solutions tackling real-world problems."
  },
  {
    role: "Independent Web Developer",
    company: "Self-Driven Projects",
    duration: "Ongoing",
    description: "Designed, developed, and launched multiple complex applications including Kracit and Resqverse, managing both frontend UX and backend architecture."
  }
];

const education = [
  {
    role: "B.Tech Undergrad",
    company: "Gyan Ganga Institute of Technology and Sciences",
    duration: "2023 - 2027",
    description: "Currently pursuing graduation with a strong academic record (8.0+ CGPA). Focusing on modern web technologies, software engineering principles, and creative development."
  }
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".exp-header", 
      { opacity: 0, y: 30 },
      {
        scrollTrigger: {
          trigger: ".exp-header",
          start: "top 85%",
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }
    );

    gsap.fromTo(".exp-item", 
      { opacity: 0, y: 50 },
      {
        scrollTrigger: {
          trigger: ".exp-container",
          start: "top 75%",
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      }
    );
  }, { scope: containerRef });

  return (
    <section className="section-black py-24 md:py-32 relative overflow-hidden" id="experience" ref={containerRef}>
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="exp-header text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-lg">My journey and milestones.</p>
        </div>

        <div className="exp-container space-y-12">
          {/* Experience items */}
          {experiences.map((exp, index) => (
            <div 
              key={`exp-${index}`}
              className="exp-item relative pl-8 md:pl-0"
            >
              {/* Timeline line - visible only on mobile left, desktop center */}
              <div className="md:hidden absolute left-[15px] top-2 bottom-[-48px] w-px bg-white/10 last:bottom-0"></div>
              
              <div className="md:grid md:grid-cols-12 md:gap-8 items-start relative">
                
                {/* Desktop timeline line & dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-2 bottom-[-48px] w-px bg-white/10 last:bottom-0 z-0"></div>
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-2 w-3 h-3 rounded-full bg-cyan-400 border-[3px] border-black z-10"></div>
                
                {/* Mobile dot */}
                <div className="md:hidden absolute left-2.5 top-2 w-3 h-3 rounded-full bg-cyan-400 border-[3px] border-black z-10"></div>

                {/* Left side: Duration */}
                <div className="md:col-span-5 md:text-right mb-2 md:mb-0">
                  <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-gray-300 backdrop-blur-sm">
                    {exp.duration}
                  </span>
                </div>
                
                {/* Center marker space (handled absolute for desktop) */}
                <div className="hidden md:block md:col-span-2"></div>
                
                {/* Right side: Content */}
                <div className="md:col-span-5 pb-6">
                  <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                  <h4 className="text-xl text-purple-400 mb-4">{exp.company}</h4>
                  <p className="text-gray-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>

              </div>
            </div>
          ))}

          {/* Education items */}
          {education.map((edu, index) => (
            <div 
              key={`edu-${index}`}
              className="exp-item relative pl-8 md:pl-0"
            >
              {/* Timeline line - visible only on mobile left, desktop center */}
              <div className="md:hidden absolute left-[15px] top-2 bottom-[-48px] w-px bg-white/10 last:bottom-0"></div>
              
              <div className="md:grid md:grid-cols-12 md:gap-8 items-start relative">
                
                {/* Desktop timeline line & dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-2 bottom-[-48px] w-px bg-white/10 last:bottom-0 z-0"></div>
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-2 w-3 h-3 rounded-full bg-orange-400 border-[3px] border-black z-10"></div>
                
                {/* Mobile dot */}
                <div className="md:hidden absolute left-2.5 top-2 w-3 h-3 rounded-full bg-orange-400 border-[3px] border-black z-10"></div>

                {/* Left side: Duration (flipped for visual variety since it's after exp, or just keep same) */}
                <div className="md:col-span-5 md:text-right mb-2 md:mb-0">
                  <span className="inline-block px-4 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-gray-300 backdrop-blur-sm">
                    {edu.duration}
                  </span>
                </div>
                
                {/* Center marker space (handled absolute for desktop) */}
                <div className="hidden md:block md:col-span-2"></div>
                
                {/* Right side: Content */}
                <div className="md:col-span-5 pb-6">
                  <h3 className="text-2xl font-bold mb-1">{edu.role}</h3>
                  <h4 className="text-xl text-purple-400 mb-4">{edu.company}</h4>
                  <p className="text-gray-400 leading-relaxed">
                    {edu.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
