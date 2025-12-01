import { getPostBySlug } from '../../../lib/posts'
import Section from '../../../components/Section'

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  return (
    <Section>
      <article className="prose dark:prose-invert max-w-none">
        <h1>{post.data.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </Section>
  )
}
