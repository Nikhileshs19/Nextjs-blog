// pages/index.js
import { useState } from 'react'
import { getSortedPostsData } from '../functions/posts'
import BlogList from '../components/BlogList'
import BlogCarousel from '../components/BlogCarousel'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPosts = allPostsData.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <input
        type="text"
        placeholder="Search posts"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 mb-6 border border-gray-300 rounded"
      />
      {/* <BlogCarousel posts={filteredPosts} /> */}
      <BlogList posts={filteredPosts} />
    </div>
  )
}
