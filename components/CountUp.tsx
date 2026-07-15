'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface CountUpProps {
  from?: number;
  to: number;
  duration?: number;
  className?: string;
  suffix?: string;
}

export default function CountUp({ from = 0, to, duration = 2, className = '', suffix = '' }: CountUpProps) {
  const [count, setCount] = useState(from);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const start = Date.now();
    const timer = setInterval(() => {
      const now = Date.now();
      const progress = Math.min((now - start) / (duration * 1000), 1);
      setCount(Math.floor(from + (to - from) * progress));

      if (progress === 1) clearInterval(timer);
    }, 16);

    return () => clearInterval(timer);
  }, [from, to, duration]);

  if (!mounted) return <span className={className}>{from}{suffix}</span>;

  return (
    <motion.span 
      className={className} 
      suppressHydrationWarning
    >
      {count}
      {suffix}
    </motion.span>
  );
}
