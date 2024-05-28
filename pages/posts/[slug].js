// pages/posts/[slug].js
import { getPostData, getAllPostSlugs } from '../../functions/posts'
import BlogPost from '../../components/BlogPost'
import { remark } from 'remark'
import html from 'remark-html'

export async function getStaticPaths() {
  const paths = getAllPostSlugs()
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.slug)
  const processedContent = await remark().use(html).process(postData.content)
  const contentHtml = processedContent.toString()

  return {
    props: {
      postData: {
        ...postData,
        contentHtml,
      },
    },
  }
}

export default function Post({ postData }) {
  return <BlogPost postData={postData} />
}
