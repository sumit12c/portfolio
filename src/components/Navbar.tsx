import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false); // Close mobile menu if open
    }
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "glass-nav py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        <a href="#home" onClick={(e) => handleSmoothScroll(e, "#home")} className="text-2xl font-bold font-display tracking-tight z-50 relative cursor-pointer">
          Sumit<span className="text-cyan-500">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleSmoothScroll(e, link.href)}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors uppercase tracking-widest relative group cursor-pointer"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a href="/images/SumitPatel_Resume.pdf" download="SumitPatel_Resume.pdf" className="ml-4 px-5 py-2 text-sm font-medium border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all rounded-full uppercase tracking-widest cursor-pointer">
            Resume
          </a>
          <a href="#contact" onClick={(e) => handleSmoothScroll(e, "#contact")} className="ml-2 px-5 py-2 text-sm font-medium border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all rounded-full uppercase tracking-widest cursor-pointer">
            Contact Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white z-50 relative p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-zinc-950/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="text-3xl font-display font-medium text-gray-200 hover:text-white hover:text-cyan-400 transition-colors cursor-pointer"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="/images/SumitPatel_Resume.pdf"
              download="SumitPatel_Resume.pdf"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 px-8 py-3 text-lg font-medium border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all rounded-full uppercase tracking-widest cursor-pointer"
            >
              Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}
