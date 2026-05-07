import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, PenTool, LayoutTemplate, Network } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    title: "UI/UX & Creative Design",
    description: "Designing intuitive interfaces with Figma & 3D elements in Spline.",
    icon: PenTool,
    color: "text-purple-400"
  },
  {
    title: "Web Development",
    description: "Crafting modern, responsive, and animated user interfaces.",
    icon: LayoutTemplate,
    color: "text-orange-400"
  },
  {
    title: "Backend Development",
    description: "Developing robust APIs and server logic with Express.js.",
    icon: Code,
    color: "text-cyan-400"
  },
  {
    title: "Networking & Tools",
    description: "CCNA 1, 2, & 3 certified. Strong understanding of network architecture.",
    icon: Network,
    color: "text-green-400"
  }
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".skills-header", 
      { opacity: 0, y: 30 },
      {
        scrollTrigger: {
          trigger: ".skills-header",
          start: "top 85%",
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }
    );

    gsap.fromTo(".skill-card", 
      { opacity: 0, y: 50 },
      {
        scrollTrigger: {
          trigger: ".skills-grid",
          start: "top 80%",
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out"
      }
    );
  }, { scope: containerRef });

  return (
    <section className="section-black py-24 md:py-32" id="services" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="skills-header text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Services</h2>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A comprehensive toolset combining creative vision tightly integrated with complex technical execution.
          </p>
        </div>

        <div className="skills-grid grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${skill.color}`}>
                <skill.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-3">{skill.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
