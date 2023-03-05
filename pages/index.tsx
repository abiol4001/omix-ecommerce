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
        <div className='w-2/3 flex flex-col justify-center '>
          <h1 className='text-[50px] w-[500px]'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h1>
          <p className='font-[200]'>Pay only for what fits and suits you!</p>
        </div>
      </div>
    </div>
  )
}
