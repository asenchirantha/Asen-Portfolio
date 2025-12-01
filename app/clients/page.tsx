import Section from '../../components/Section'

export default function ClientsPage() {
  const clients = [
    { name: 'Company A', logo: '/logos/a.png' },
    { name: 'Company B', logo: '/logos/b.png' },
    { name: 'Company C', logo: '/logos/c.png' }
  ]

  return (
    <Section>
      <h2 className="text-3xl font-bold mb-6">Clients</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {clients.map((c) => (
          <div key={c.name} className="glass-card flex items-center justify-center h-24">
            <span className="font-semibold">{c.name}</span>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-semibold mt-12 mb-4">Testimonials</h3>
      <div className="glass-card">
        <p className="italic">"Great work and attention to detail!"</p>
        <p className="text-sm text-muted-foreground mt-2">— Client Name</p>
      </div>
    </Section>
  )
}
