'use client';

import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export default function AnimatedText({ text, className = '', delay = 0, duration = 0.5 }: AnimatedTextProps) {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  };

  const child = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration },
    },
  };

  return (
    <motion.div 
      className={className} 
      variants={container} 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: '-100px' }}
      suppressHydrationWarning
    >
      {words.map((word, idx) => (
        <motion.span key={idx} variants={child} className="inline-block mr-2" suppressHydrationWarning>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
