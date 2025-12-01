'use client';

import { m as motion } from 'framer-motion';
import { Client } from '@/data/clients';

const m = motion as any;

interface ClientLogoProps {
  client: Client;
  index: number;
}

export default function ClientLogo({ client, index }: ClientLogoProps) {
  return (
    <m.div
      className="flex-shrink-0"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.1, y: -5 }}
    >
      <div className="relative group cursor-pointer">
        {/* Main logo container */}
        <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${client.color} flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-300`}>
          <span className="font-bold text-2xl text-white">{client.logo}</span>
        </div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Tooltip on hover */}
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-gray-900 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap">
            {client.name}
          </div>
        </div>
      </div>
    </m.div>
  );
}
