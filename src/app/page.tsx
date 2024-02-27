import Link from 'next/link'
import { getPosts } from '@/services/entries/post'
import { dateId, formattedDate } from '@/utils'
import BlogImage from '@/components/BlogImage'
import type { Post } from '@/types/post'

export default async function Home() {
  const res = await getPosts()
  const posts = res.data?.items.map(item => item.fields) ?? []

  return (
    <div className='app-container'>
      <div className='flex flex-col gap-4'>
        {posts.map((post, index) => (
          <PostItem key={index} {...post} />
        ))}
      </div>
    </div>
  )
}

function PostItem(post: Post) {
  return (
    <Link href={`/${dateId(post.date)}/${[post.slug]}`}>
      <div className='flex justify-between items-end py-4 border-b-2 border-gray-300 border-dashed'>
        <div className='flex-1 truncate flex flex-col [&>*]:truncate'>
          <span className='text-3xl font-bold truncate text-appBlue '>
            {post.title}
          </span>
          <span className='text-red-700 text-xs'>
            {formattedDate(post.date)}
          </span>
          <span className='opacity-90 font-normal text-sm'>{post.spoiler}</span>
        </div>
        <BlogImage src={`https:${post.image.fields.file.url}`} />
      </div>
    </Link>
  )
}
