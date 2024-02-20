export interface Post {
  id: string
  title: string
  spoiler: string
  content: string
  date: string
  tags: string
  image: {
    fields: {
      title: string
      description: string
      file: {
        url: string
      }
    }
  }
}
