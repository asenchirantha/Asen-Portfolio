import Section from '../../components/Section'
import Card from '../../components/Card'

export default function ServicesPage() {
  const services = [
    { title: 'UI/UX Design', desc: 'Designing user-centered interfaces' },
    { title: 'Frontend Development', desc: 'React & Next.js development' },
    { title: 'Motion Design', desc: 'Micro-interactions and animations' }
  ]

  return (
    <Section>
      <h2 className="text-3xl font-bold mb-6">Services</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <Card key={s.title} title={s.title} description={s.desc} />
        ))}
      </div>
    </Section>
  )
}
