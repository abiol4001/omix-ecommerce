import React from 'react'

const FooterForm = () => {
  return (
    <div className='py-[64px] px-[112px] lg:flex'>
        <div className='lg:w-1/2'>
              <h3 className='text-[24px] font-[700]'>Subscribe to newsletter</h3>
              <p className='font-[200]'>and get 10% off your first purchase!</p>
        </div>
          <form className='lg:w-1/2'>
              <input type="text" className='rounded-2xl border border-[#B6B6B6] h-[48px] w-[380px] px-3 lg:mr-10 outline-none' placeholder='Enter your Email' />
              <input type="submit" value="Subscribe" className='rounded-2xl bg-[#212429] text-white h-[48px] w-[178px]' />
        </form>
    </div>
  )
}

export default FooterForm