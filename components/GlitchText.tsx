'use client';

import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
}

export default function GlitchText({ text, className = '' }: GlitchTextProps) {
  const glitch = {
    animate: {
      textShadow: [
        '3px 0px #FF6B35, -3px -3px #00ff00',
        '-3px -3px #FF6B35, 3px 3px #00ff00',
        '3px 3px #FF6B35, -3px 0px #00ff00',
        '-3px 0px #FF6B35, 3px -3px #00ff00',
        '0px 0px #FF6B35, 0px 0px #00ff00',
      ],
    },
    transition: {
      duration: 0.3,
      repeat: Infinity,
      repeatDelay: 2,
    },
  };

  return (
    <motion.div className={className} variants={glitch} animate="animate" suppressHydrationWarning>
      {text}
    </motion.div>
  );
}
