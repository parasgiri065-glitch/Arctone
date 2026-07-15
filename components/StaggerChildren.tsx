'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface StaggerChildrenProps {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
  duration?: number;
}

export default function StaggerChildren({ children, className = '', staggerDelay = 0.1, delayChildren = 0, duration = 0.6 }: StaggerChildrenProps) {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration },
    },
  };

  return (
    <motion.div className={className} variants={container} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}>
      {Array.isArray(children) &&
        children.map((child, idx) => (
          <motion.div key={idx} variants={item}>
            {child}
          </motion.div>
        ))}
    </motion.div>
  );
}
