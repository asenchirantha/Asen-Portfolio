export interface Client {
  name: string;
  logo: string;
  color: string;
  description?: string;
}

export const clients: Client[] = [
  { 
    name: 'TechCorp', 
    logo: 'TC', 
    color: 'from-blue-500 to-cyan-500',
    description: 'Leading technology solutions provider'
  },
  { 
    name: 'Innovate Solutions', 
    logo: 'IS', 
    color: 'from-purple-500 to-pink-500',
    description: 'Innovation and digital transformation'
  },
  { 
    name: 'Digital Studios', 
    logo: 'DS', 
    color: 'from-orange-500 to-red-500',
    description: 'Creative digital agency'
  },
  { 
    name: 'Future Brands', 
    logo: 'FB', 
    color: 'from-green-500 to-emerald-500',
    description: 'Next-generation branding'
  },
  { 
    name: 'Creative Agency', 
    logo: 'CA', 
    color: 'from-indigo-500 to-blue-500',
    description: 'Full-service creative studio'
  },
  { 
    name: 'Global Tech', 
    logo: 'GT', 
    color: 'from-yellow-500 to-orange-500',
    description: 'Global technology partner'
  }
];

// Alternative client logos with different styles
export const clientLogosAlternative = [
  { name: 'ESU', logo: 'ESU', style: 'text' },
  { name: 'BI', logo: 'BI', style: 'circle' },
  { name: 'Infinity', logo: '∞', style: 'symbol' },
  { name: 'BOOST', logo: 'BOOST', style: 'text' }
];
