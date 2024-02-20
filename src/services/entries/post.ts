import { client } from '../client'
import { responseHandler } from '../responseHandler'
import type { Post } from '@/types/post'

interface PostResponse {
  //...
  items: {
    fields: Post
  }[]
}

export const getPosts = () => {
  return responseHandler<PostResponse, unknown>(() =>
    client.getEntries({
      content_type: 'post',
      select: ['fields'],
    })
  )
}

export const POST_KEY = 'POST'
