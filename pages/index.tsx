import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="py-10">
      <div className='flex'>
        <div className='w-1/3'>
          <img
            src="hero-image.png"
            alt="hero_image"
            className="h-[750px] w-[497px]"
          />
        </div>
        <div className='w-2/3 flex flex-col justify-center mx-auto '>
          <div>
            <h1 className='text-[70px] w-[500px] leading-tight'>
              Lorem ipsum dolor sit, amet consectetur.
            </h1>
          </div>
          <p className='font-[200] my-10'>Pay only for what fits and suits you!</p>
          <div className='flex gap-5'>
            <button className='bg-[#F6B750] rounded-xl w-[130px] py-2 font-[200] hover:bg-[#dd9b30] focus:bg-[#b47c22] transition-all'>For Men</button>
            <button className='border border-[#212429] rounded-xl w-[130px] py-2 font-[200] hover:bg-[#212429] hover:text-white focus:bg-[#212429] active:bg-[#15171b] transition-all duration-300'>For Women</button>
          </div>
        </div>
      </div>
    </div>
  )
}
