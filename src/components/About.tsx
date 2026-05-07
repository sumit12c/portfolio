import { motion } from "motion/react";

export default function About() {
  return (
    <section className="section-white py-32 md:py-48" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          <motion.div 
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-light mb-8 text-gray-900 tracking-tight leading-[1.1]">
              Engineering Interfaces, <br/>
              <span className="font-semibold italic text-cyan-600">Elevating</span> Experiences.
            </h2>
            <div className="w-24 h-1 bg-gray-900 mb-10 rounded-full"></div>
            <p className="text-gray-600 text-xl font-light leading-relaxed mb-6">
              I am a creative web developer with a strong design sense, passionate about building visually engaging websites that just work.
            </p>
            <p className="text-gray-600 text-xl font-light leading-relaxed">
              With experience spanning both frontend aesthetics and robust backends, I bridge the gap between design and functionality. I actively solve complex algorithms, having conquered over 100+ Data Structures and Algorithms problems to ensure my code is as efficient as it is beautiful.
            </p>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 lg:mt-0"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="p-10 rounded-[2rem] bg-gray-50 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
              <div className="text-purple-500 font-display font-bold text-3xl mb-6 group-hover:scale-110 transition-transform origin-left">01.</div>
              <h3 className="text-2xl font-display font-bold mb-4 text-gray-900 tracking-tight">Design Meets Code</h3>
              <p className="text-gray-600 text-lg font-light leading-relaxed">Proficient with Figma and Spline for 3D elements, bringing interactive prototypes to life.</p>
            </div>
            
            <div className="p-10 rounded-[2rem] bg-gray-50 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 sm:mt-16 group">
              <div className="text-cyan-500 font-display font-bold text-3xl mb-6 group-hover:scale-110 transition-transform origin-left">02.</div>
              <h3 className="text-2xl font-display font-bold mb-4 text-gray-900 tracking-tight">Backend Systems</h3>
              <p className="text-gray-600 text-lg font-light leading-relaxed">Building scalable server-side applications and robust APIs using Express.js.</p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
