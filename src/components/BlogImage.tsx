/* eslint-disable @next/next/no-img-element */

interface BlogImageProps {
  src: string
}

export default function BlogImage(props: BlogImageProps) {
  const { src } = props

  return (
    <div
      style={{ backgroundImage: `url(${src})` }}
      className='bg-cover bg-center w-[130px] h-[80px] rounded'
    ></div>
  )
}
