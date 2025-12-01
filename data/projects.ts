export interface Project {
  id: string
  title: string
  description: string
  category: string
  url?: string
  image?: string
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Social Media Campaign',
    description: 'Instagram and Facebook ad designs',
    category: 'Social Media Advertisements'
  },
  {
    id: '2',
    title: 'E-commerce Redesign',
    description: 'Full UX case study for online store',
    category: 'UX Case Studies'
  },
  {
    id: '3',
    title: 'Mobile Banking App',
    description: 'Interactive prototype with Figma',
    category: 'Prototypes'
  },
  {
    id: '4',
    title: 'Agency Landing Page',
    description: 'Modern responsive website',
    category: 'Webpages'
  },
  {
    id: '5',
    title: 'Fitness Tracker',
    description: 'React Native mobile app',
    category: 'Mobile Apps'
  },
  {
    id: '6',
    title: 'Brand Identity Kit',
    description: 'Logo, colors, and style guide',
    category: 'Graphics'
  },
  {
    id: '7',
    title: 'SaaS Dashboard',
    description: 'Full-stack web application',
    category: 'Software Development'
  }
]

export default projects
