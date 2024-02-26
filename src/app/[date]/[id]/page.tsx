import { getPosts } from '@/services/entries/post'
import { Post } from '@/types/post'
import { dateId, formattedDate } from '@/utils'
import BlogImage from '@/components/BlogImage'
import { MDXRemote } from 'next-mdx-remote/rsc'
import './markdown.css'

interface PostParams {
  params: {
    id: string
    date: string
  }
}

export default async function Post({ params }: PostParams) {
  const { id } = params

  const res = await getPosts()
  const post = res.data?.items.find(item => item.fields.id === id)?.fields

  if (!post) return null

  return (
    <article className='app-container flex flex-col gap-4'>
      <div className='flex items-end gap-3 border-b-2 py-4 border-gray-300 border-dashed'>
        <BlogImage src={`https:${post.image.fields.file.url}`} />
        <div className='flex-1 truncate flex flex-col [&>*]:truncate'>
          <span className='text-3xl font-bold truncate text-appBlue '>
            {post.title}
          </span>
          <span className='text-red-700 text-xs'>
            {formattedDate(post.date)}
          </span>
        </div>
      </div>
      <div className='markdown'>
        <MDXRemote source={post.content} />
      </div>
    </article>
  )
}

export const dynamicParams = false

export async function generateStaticParams() {
  const res = await getPosts()

  if (res.error || !res.data) return []

  return res.data.items.map(post => ({
    date: dateId(post.fields.date),
    id: post.fields.id,
  }))
}

export async function generateMetadata({ params }: PostParams) {
  const { id } = params

  const res = await getPosts()
  const post = res.data?.items.find(item => item.fields.id === id)?.fields

  return {
    title: (post?.title ?? '') + ' — Tom Isiang | Blog',
    description: post?.spoiler ?? '',
    openGraph: {
      images: [`http://${post?.image.fields.file.url}`],
    },
  }
}
