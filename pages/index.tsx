import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { category, newCollections } from '@/data/category'
import SimpleSlider from '@/components/Slider/SimpleSlider'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      {/* //Hero Section */}
      <section className="py-10">
        <div className='flex'>
          <div className='w-1/3'>
            <img
              src="hero-image.png"
              alt="hero_image"
              className="h-[750px] w-[497px]"
            />
          </div>
          <div className='w-2/3 flex flex-col justify-center items-center mx-auto '>
            <div className='mx-auto  w-[500px]'>
              <h1 className='text-[70px] leading-tight'>
                Lorem ipsum dolor sit, amet consectetur.
              </h1>

              <p className='font-[200] my-10'>Pay only for what fits and suits you!</p>

              <div className='flex gap-5'>
                <button className='bg-[#F6B750] rounded-xl w-[130px] py-2 font-[200] hover:bg-[#dd9b30] focus:bg-[#b47c22] transition-all'>For Men</button>
                <button className='border border-[#212429] rounded-xl w-[130px] py-2 font-[200] hover:bg-[#212429] hover:text-white focus:bg-[#212429] active:bg-[#15171b] transition-all duration-300'>For Women</button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Actual Section  */}
      <section className='px-[112px] my-[80px]'>
        <div>
          <h4 className='text-[32px] font-[700] mb-8'>Actual</h4>
          <div className='flex items-center justify-between'>
            {category.map(item => (
              <div key={item.name}>
                <img src={item.image} alt={item.name} className="w-[150px] h-[150px]" />
                <p className='text-center text-[15px] font-[300] mt-4'>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Selling Section */}
      <section className='px-[112px] my-[80px]'>
        <h4 className='text-[32px] font-[700] mb-8'>Best Selling</h4>
              <SimpleSlider />
      </section>
      {/* New collections Section */}
      <section className='px-[112px] my-[80px]'>
        <h4 className='text-[32px] font-[700] mb-8'>New collections</h4>
        <div className='flex justify-between'>
          {newCollections.map(item => (
            <div >
              <img src={item.image} alt={item.name} className="w-[380px] h-[380px]" />
              <p className='text-center text-[15px] font-[300] mt-4'>{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sport Section */}
      <section className='bg-[url("/sport.png")] bg-contain md:h-[700px]'>
        <div className='translate-x-1/2 translate-y-64'>
          <p className='text-[16px] font-[300]'>Free shipping on all orders</p>
          <p className='text-[40px] font-[700] mb-8'>SPORT COLLECTION</p>
          <button className='border border-black rounded-3xl py-2 w-[130px] '>View here</button>
        </div>

      </section>
    </div>
  )
}
