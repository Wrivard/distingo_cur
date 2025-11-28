import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

// ============================================
// FADE UP - Classic premium entrance
// ============================================
export function FadeUp({ 
  children, 
  delay = 0,
  duration = 0.8,
  className = ""
}: { 
  children: ReactNode; 
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ 
        duration, 
        delay,
        ease: [0.25, 0.4, 0.25, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// FADE IN - Simple opacity fade
// ============================================
export function FadeIn({ 
  children, 
  delay = 0,
  duration = 0.6,
  className = ""
}: { 
  children: ReactNode; 
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// SLIDE IN - Horizontal entrance
// ============================================
export function SlideIn({ 
  children, 
  direction = "left",
  delay = 0,
  className = ""
}: { 
  children: ReactNode; 
  direction?: "left" | "right";
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const x = direction === "left" ? -60 : 60;
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x }}
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.25, 0.4, 0.25, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// SCALE UP - Elegant scale entrance
// ============================================
export function ScaleUp({ 
  children, 
  delay = 0,
  className = ""
}: { 
  children: ReactNode; 
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ 
        duration: 0.7, 
        delay,
        ease: [0.25, 0.4, 0.25, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// STAGGER CHILDREN - Animate children sequentially
// ============================================
export function StaggerChildren({ 
  children, 
  staggerDelay = 0.1,
  className = ""
}: { 
  children: ReactNode; 
  staggerDelay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });
  
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
};

// ============================================
// TEXT REVEAL - Character by character
// ============================================
export function TextReveal({ 
  text, 
  className = "",
  delay = 0
}: { 
  text: string; 
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const words = text.split(" ");
  
  return (
    <motion.span
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.05,
            delayChildren: delay,
          }
        }
      }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "100%", opacity: 0 },
              visible: { 
                y: 0, 
                opacity: 1,
                transition: {
                  duration: 0.5,
                  ease: [0.25, 0.4, 0.25, 1]
                }
              }
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

// ============================================
// PARALLAX IMAGE - Subtle depth effect
// ============================================
export function ParallaxImage({ 
  src, 
  alt,
  className = "",
  speed = 0.5
}: { 
  src: string; 
  alt: string;
  className?: string;
  speed?: number;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [speed * -100, speed * 100]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });
  
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y: smoothY }}
        className="w-full h-[120%] object-cover"
      />
    </div>
  );
}

// ============================================
// MAGNETIC BUTTON - Subtle follow cursor
// ============================================
export function MagneticWrapper({ 
  children,
  className = ""
}: { 
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - left - width / 2) * 0.15;
    const y = (clientY - top - height / 2) * 0.15;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  };
  
  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0, 0)';
  };
  
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-300 ease-out ${className}`}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// REVEAL LINE - Animated underline
// ============================================
export function RevealLine({ 
  className = "",
  delay = 0
}: { 
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ scaleX: 0 }}
      animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
      transition={{ 
        duration: 1, 
        delay,
        ease: [0.25, 0.4, 0.25, 1] 
      }}
      style={{ originX: 0 }}
      className={`h-px bg-gradient-to-r from-accent via-accent/50 to-transparent ${className}`}
    />
  );
}

// ============================================
// BLUR IN - Premium blur entrance
// ============================================
export function BlurIn({ 
  children, 
  delay = 0,
  className = ""
}: { 
  children: ReactNode; 
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={isInView 
        ? { opacity: 1, filter: "blur(0px)" } 
        : { opacity: 0, filter: "blur(10px)" }
      }
      transition={{ 
        duration: 0.8, 
        delay,
        ease: [0.25, 0.4, 0.25, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// COUNTER - Animated number
// ============================================
export function Counter({ 
  target, 
  duration = 2,
  className = ""
}: { 
  target: number; 
  duration?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const springValue = useSpring(0, { duration: duration * 1000 });
  
  if (isInView) {
    springValue.set(target);
  }
  
  return (
    <motion.span ref={ref} className={className}>
      {Math.round(springValue.get())}
    </motion.span>
  );
}

// ============================================
// PAGE TRANSITION WRAPPER
// ============================================
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

// ============================================
// SMOOTH CURSOR FOLLOWER (optional premium touch)
// ============================================
export function CursorGlow() {
  const cursorRef = useRef<HTMLDivElement>(null);
  
  const handleMouseMove = (e: MouseEvent) => {
    if (!cursorRef.current) return;
    cursorRef.current.style.left = `${e.clientX}px`;
    cursorRef.current.style.top = `${e.clientY}px`;
  };
  
  // Add event listener
  if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', handleMouseMove);
  }
  
  return (
    <div
      ref={cursorRef}
      className="fixed w-64 h-64 pointer-events-none z-0 opacity-20 hidden md:block"
      style={{
        background: 'radial-gradient(circle, rgba(139,154,125,0.15) 0%, transparent 70%)',
        transform: 'translate(-50%, -50%)',
        transition: 'left 0.5s ease-out, top 0.5s ease-out',
      }}
    />
  );
}

