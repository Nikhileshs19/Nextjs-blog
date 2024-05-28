// components/BlogList.js
import Link from 'next/link'

export default function BlogList({ posts }) {
  return (
    <ul>
      {posts.map(({ slug, title, date, summary }) => (
        <li
          key={slug}
          className="mb-6 border-2 border-black-400 border-solid p-4"
        >
          <Link href={`/posts/${slug}`}>
            <div>
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="text-gray-700">{summary}</p>
              <small className="text-gray-500">{date}</small>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
