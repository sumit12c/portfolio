import { motion, useScroll, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    title: "Resqverse",
    description: "Gamified disaster preparedness platform featuring a robust PIN-based alert system for rapid response coordination.",
    category: "Full Stack",
    accent: "bg-cyan-500 text-white",
    img: "/images/resqverse.png",
    link: "https://resqverse.onrender.com"
  },
  {
    title: "Kracit",
    description: "An intelligent AI mock interview simulator designed to help candidates practice and perfect their interview skills.",
    category: "AI / Web",
    accent: "bg-purple-500 text-white",
    img: "/images/kracit.png",
    link: "https://kracit.onrender.com"
  },
  {
    title: "fileflick,File Transfer App",
    description: "A lightning-fast, secure file sharing application facilitating seamless wireless transfer between local devices.",
    category: "Networking / Web",
    accent: "bg-orange-500 text-white",
    img: "/images/fileflick.png"
  },
  {
    title: "Portfolio Website",
    description: "This premium, interactive personal portfolio website featuring smooth GSAP-inspired animations and 3D backgrounds.",
    category: "Frontend",
    accent: "bg-white text-black",
    img: "/images/portfolio.png"
  }
];

export default function Projects() {
  return (
    <section className="section-white py-32 md:py-40" id="projects">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-gray-900 tracking-tight">Featured Work</h2>
            <div className="w-24 h-1.5 bg-gradient-accent rounded-full"></div>
          </motion.div>
          <motion.a 
            href="https://github.com/sumit12c/" target="_blank" rel="noreferrer"
            className="text-gray-900 font-medium inline-flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            View GitHub <ArrowUpRight size={18} />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {projects.map((project, index) => {
            return <ProjectCard key={index} project={project} index={index} />;
          })}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
  const isOffset = index % 2 !== 0;
  
  const handleProjectClick = () => {
    if (project.link) {
      window.open(project.link, '_blank');
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className={`group cursor-pointer ${isOffset ? 'md:mt-24' : ''} transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2`}
      onClick={handleProjectClick}
    >
      <div className="relative w-full aspect-[4/5] md:aspect-[3/4] rounded-[2rem] overflow-hidden bg-gray-100 mb-8 z-10 shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
        <div className={`absolute top-6 left-6 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider z-20 ${project.accent}`}>
          {project.category}
        </div>
        
        {/* Parallax Image inside Card */}
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={project.img} 
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
          />
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center translate-y-8 group-hover:translate-y-0 transition-all duration-500 shadow-xl opacity-0 group-hover:opacity-100">
            <ArrowUpRight className="text-gray-900" size={32} />
          </div>
        </div>
      </div>
      
      <div className="px-2">
        <h3 className="text-3xl font-display font-bold mb-4 text-gray-900 group-hover:text-cyan-600 transition-colors tracking-tight">{project.title}</h3>
        <p className="text-gray-600 leading-relaxed text-lg font-light">{project.description}</p>
      </div>
    </motion.div>
  );
}
