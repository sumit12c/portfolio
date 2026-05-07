import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function Testimonial() {
  return (
    <section className="section-white py-24 relative overflow-hidden">
      <div className="absolute top-0 right-10 opacity-5 pointer-events-none transform -translate-y-1/2">
        <Quote size={300} />
      </div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <div className="w-16 h-16 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-8 shadow-sm border border-gray-100">
            <Quote className="text-cyan-500" size={24} />
          </div>
          
          <h2 className="text-2xl md:text-4xl font-serif italic text-gray-900 leading-tight md:leading-snug mb-8">
            "Working with Sumit is seamless. He brings creativity, technical skills, and reliability to every project."
          </h2>
          
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-tr from-purple-500 to-orange-500"></div>
            </div>
            <div className="text-left">
              <h4 className="font-bold text-gray-900 text-lg">Sumit Patel</h4>
              <p className="text-gray-500 text-sm">Web Developer (Self-Reflection)</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
