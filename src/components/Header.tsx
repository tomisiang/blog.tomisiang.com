import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className='app-container py-2 flex'>
      <Link href='/'>
        <div className='flex gap-2 items-end [&>img]:rounded'>
          <Image
            src='/assets/me.jpg'
            alt='Picture of the author'
            width={45}
            height={45}
          />
          <span className='text-xl font-semibold appBlue'>Tom Isiang</span>
        </div>
      </Link>
    </header>
  )
}
