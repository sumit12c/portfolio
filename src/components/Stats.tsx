import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: "4", label: "Projects Completed" },
  { value: "10+", label: "GitHub Repositories" },
  { value: "12+", label: "Technologies Learned" },
  { value: "50", label: "Days LeetCode Challenge" },
];

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(".stat-item", 
      { opacity: 0, scale: 0.8, y: 40 },
      {
        scrollTrigger: {
          trigger: ".stats-grid",
          start: "top 85%",
        },
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.5)"
      }
    );
  }, { scope: containerRef });

  return (
    <section className="section-white py-20 border-b border-gray-100" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-transparent md:divide-gray-200">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="stat-item text-center px-4"
            >
              <h2 className="text-5xl md:text-6xl font-light text-gray-900 mb-2">
                {stat.value}
              </h2>
              <p className="text-sm md:text-base font-semibold text-gray-500 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
