import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";

// Cross SVG
const Cross = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 2v20m10-10H2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

// Empty Circle SVG
const Circle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" />
  </svg>
);

// Rectangle SVG
const Rectangle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="3" y="3" width="18" height="18" stroke="currentColor" strokeWidth="1" />
  </svg>
);

// Triangle SVG
const Triangle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <polygon points="12,2 22,20 2,20" stroke="currentColor" strokeWidth="1" />
  </svg>
);


interface Shape {
  id: number;
  type: 'cross' | 'circle' | 'rectangle' | 'triangle';
  x: number;
  y: number;
  size: number;
  color: string;
  speed: number;
  rotationSpeed: number;
}

export default function FloatingShapes() {
  const [shapes, setShapes] = useState<Shape[]>([]);
  const { scrollY } = useScroll();

  // Generate random shapes on mount
  useEffect(() => {
    const types = ['cross', 'circle', 'rectangle', 'triangle'] as const;
    const colors = ['text-cyan-500/20', 'text-purple-500/20', 'text-orange-500/20', 'text-white/10'];
    
    const newShapes: Shape[] = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      type: types[Math.floor(Math.random() * types.length)],
      x: Math.random() * 100, // percentage string later
      y: Math.random() * 100,
      size: Math.random() * 24 + 16, // 16 to 40px
      color: colors[Math.floor(Math.random() * colors.length)],
      speed: Math.random() * 0.5 + 0.1, // speed multiplier for scroll
      rotationSpeed: (Math.random() - 0.5) * 45 // rotation deg per scroll unit
    }));
    
    setShapes(newShapes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {shapes.map((shape) => {
        return <ShapeItem key={shape.id} shape={shape} scrollY={scrollY} />;
      })}
    </div>
  );
}

function ShapeItem({ shape, scrollY }: { shape: Shape, scrollY: any }) {
  const yOffset = useTransform(scrollY, [0, 5000], [0, -2000 * shape.speed]);
  const rotate = useTransform(scrollY, [0, 5000], [0, shape.rotationSpeed * 50]);

  const getShapeComponent = () => {
    const props = { className: `w-full h-full ${shape.color}` };
    switch (shape.type) {
      case 'cross': return <Cross {...props} />;
      case 'circle': return <Circle {...props} />;
      case 'rectangle': return <Rectangle {...props} />;
      case 'triangle': return <Triangle {...props} />;
    }
  };

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${shape.x}%`,
        top: `${shape.y}vh`,
        width: shape.size,
        height: shape.size,
        y: yOffset,
        rotate: rotate
      }}
    >
      {getShapeComponent()}
    </motion.div>
  );
}
