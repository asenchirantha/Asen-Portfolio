import Section from '../../components/Section'
import PortfolioFilter from '../../components/PortfolioFilter'
import projects from '../../data/projects'

export default function PortfolioPage() {
  return (
    <Section>
      <h2 className="text-3xl font-bold mb-6">Portfolio</h2>
      <PortfolioFilter />
    </Section>
  )
}
