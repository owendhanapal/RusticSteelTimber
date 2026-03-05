import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'motion/react';

export interface RevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "zoom";
  delay?: number;
  key?: React.Key;
}

export const Reveal = ({ children, className = "", direction = "up", delay = 0 }: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
      y: direction === "up" ? 40 : 0,
      scale: direction === "zoom" ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.21, 1, 0.36, 1] as const,
        delay: delay,
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};
