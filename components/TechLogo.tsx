"use client"
import { m as motion } from 'framer-motion';

const m = motion as any;

interface TechLogoProps {
  name: string;
  delay?: number;
}

export default function TechLogo({ name, delay = 0 }: TechLogoProps) {
  return (
    <m.div
      className="flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.1, y: -5 }}
    >
      <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-white font-bold">
        {name.substring(0, 2).toUpperCase()}
      </div>
      <span className="text-sm text-gray-400">{name}</span>
    </m.div>
  );
}
