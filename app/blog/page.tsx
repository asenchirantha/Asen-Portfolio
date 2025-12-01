import Section from '../../components/Section'
import { getAllPosts } from '../../lib/posts'
import Link from 'next/link'

export default async function BlogPage() {
  const posts = await getAllPosts()

  return (
    <Section>
      <h2 className="text-3xl font-bold mb-6">Blog</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((p) => (
          <article key={p.slug} className="glass-card">
            <h3 className="text-xl font-semibold">{p.data.title}</h3>
            <p className="text-sm text-muted-foreground">{p.data.description}</p>
            <Link href={`/blog/${p.slug}`} className="mt-3 inline-block text-primary">Read →</Link>
          </article>
        ))}
      </div>
    </Section>
  )
}
