/* eslint-disable @next/next/no-img-element */

import { cn } from '@/utils'

interface BlogImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
  defaultTransparent?: boolean
}

export default function BlogImage(props: BlogImageProps) {
  const { src, className, defaultTransparent = false, ...rest } = props

  return (
    <div
      style={{ backgroundImage: `url(${src})` }}
      className={cn(
        'bg-cover bg-center w-[130px] h-[80px] rounded',
        { 'opacity-25': defaultTransparent },
        className
      )}
      {...rest}
    ></div>
  )
}
