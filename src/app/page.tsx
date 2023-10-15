import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='w-[90%] max-w-[1000px] mx-auto my-10 flex flex-col gap-3'>
      <Link href="/mobile-legends" className='w-full flex justify-center items-center p-5 bg-white rounded-lg font-bold text-blue-600'>
        Mobile-legends
      </Link>
      <Link href="/salary-calculating" className='w-full flex justify-center items-center p-5 bg-white rounded-lg font-bold text-blue-600'>
        Salary-Calculating
      </Link>
      <Link href="/current-converter" className='w-full flex justify-center items-center p-5 bg-white rounded-lg font-bold text-blue-600'>
        Current-Converter
      </Link>
      <Link href="/meme-generator" className='w-full flex justify-center items-center p-5 bg-white rounded-lg font-bold text-blue-600'>
        meme
      </Link>
    </div>
  )
}
