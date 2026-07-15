'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  speed?: number;
}

export default function FloatingCard({ children, className = '', delay = 0, speed = 2 }: FloatingCardProps) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: speed, repeat: Infinity, delay, ease: 'easeInOut' }}
      whileHover={{ scale: 1.05, y: -30 }}
      whileTap={{ scale: 0.98 }}
      suppressHydrationWarning
    >
      {children}
    </motion.div>
  );
}
