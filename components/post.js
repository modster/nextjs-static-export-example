import Link from 'next/link'

export default function Post({ title, body, id }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{body}</p>
      <Link href={`/nextjs-static-export-template/post/${id}`}>
        <a>Read more...</a>
      </Link>
    </article>
  )
}
