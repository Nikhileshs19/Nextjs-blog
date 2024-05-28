// components/BlogCarousel.js
import Link from 'next/link'

export default function BlogCarousel({ posts }) {
  return (
    // <div className="carousel carousel-vertical rounded-box space-x-4">
    //   {posts.map(({ slug, title, thumbnail }) => (
    //     <div key={slug} className="carousel-item ">
    //       <Link href={`/posts/${slug}`}>
    //         <div className="cursor-pointer w-full h-full">
    //           <img src={thumbnail} alt={title} className="rounded-box" />
    //           <div className="p-2">
    //             <h2 className="text-xl font-bold">{title}</h2>
    //           </div>
    //         </div>
    //       </Link>
    //     </div>
    <div className="flex justify-between">
      {posts.map(({ slug, title, thumbnail }) => (
        <div
          key={slug}
          className="bg-red-500 h-32 w-full sm:w-auto flex-shrink-0"
        >
          <Link href={`/posts/${slug}`}>
            <div className="cursor-pointer w-full h-full">
              <img src={thumbnail} alt={title} className="rounded-box" />
              <div className="p-2">
                <h2 className="text-xl font-bold">{title}</h2>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>

    //   ))}
    // </div>
  )
}
