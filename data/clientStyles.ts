// Alternative Client Logo Styles
// You can use these styles in page.tsx by importing the appropriate version

import { Client } from './clients';

// Style 1: Minimal text logos (like in your original design)
export const minimalClients: Client[] = [
  { name: 'ESU', logo: 'ESU', color: 'from-gray-700 to-gray-600' },
  { name: 'BI', logo: 'BI', color: 'from-yellow-500 to-yellow-600' },
  { name: 'Infinity', logo: '∞', color: 'from-gray-700 to-gray-600' },
  { name: 'BOOST', logo: 'BOOST', color: 'from-gray-700 to-gray-600' }
];

// Style 2: Modern gradient logos
export const modernClients: Client[] = [
  { 
    name: 'Quantum Labs', 
    logo: 'QL', 
    color: 'from-cyan-500 via-blue-500 to-purple-600',
    description: 'Quantum computing research'
  },
  { 
    name: 'Nexus Digital', 
    logo: 'ND', 
    color: 'from-pink-500 via-red-500 to-orange-500',
    description: 'Digital transformation experts'
  },
  { 
    name: 'Velocity Inc', 
    logo: 'VI', 
    color: 'from-green-400 via-emerald-500 to-teal-600',
    description: 'Fast-track development'
  },
  { 
    name: 'Apex Studios', 
    logo: 'AS', 
    color: 'from-violet-500 via-purple-500 to-fuchsia-600',
    description: 'Premium design studio'
  },
  { 
    name: 'Zenith Corp', 
    logo: 'ZC', 
    color: 'from-amber-500 via-orange-500 to-red-500',
    description: 'Enterprise solutions'
  },
  { 
    name: 'Pulse Media', 
    logo: 'PM', 
    color: 'from-blue-500 via-indigo-500 to-purple-600',
    description: 'Media & entertainment'
  }
];

// Style 3: Tech company logos
export const techClients: Client[] = [
  { name: 'CloudSync', logo: 'CS', color: 'from-sky-400 to-blue-500' },
  { name: 'DataFlow', logo: 'DF', color: 'from-indigo-500 to-purple-600' },
  { name: 'CodeBase', logo: 'CB', color: 'from-green-500 to-emerald-600' },
  { name: 'NetCore', logo: 'NC', color: 'from-orange-500 to-red-500' },
  { name: 'ByteWorks', logo: 'BW', color: 'from-pink-500 to-rose-600' },
  { name: 'LogicLabs', logo: 'LL', color: 'from-teal-500 to-cyan-600' }
];
