'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
}

export default function ScrollReveal({ children, className = '', direction = 'up', delay = 0, duration = 0.8 }: ScrollRevealProps) {
  const directions = {
    up: { hidden: { opacity: 0, y: 100 }, visible: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -100 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: 100 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: -100 }, visible: { opacity: 1, x: 0 } },
  };

  return (
    <motion.div
      className={className}
      variants={directions[direction]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration, delay }}
      suppressHydrationWarning
    >
      {children}
    </motion.div>
  );
}
