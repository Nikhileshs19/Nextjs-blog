// components/BlogPost.js
import Link from 'next/link'

export default function BlogPost({ postData }) {
  const { title, contentHtml, date, author } = postData

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 bg-gray-500 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-4">{title}</h1>
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
      <div className="mt-6 text-gray-500 text-sm">
        <p>{date}</p>
        <p>by {author}</p>
      </div>
    </div>
  )
}
