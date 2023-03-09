import React from 'react'
import { TbTruckDelivery } from 'react-icons/tb'
import { GiReturnArrow } from 'react-icons/gi'
import { BsTelephone } from 'react-icons/bs'
import { CiMail } from 'react-icons/ci'
import { TbBrandTelegram } from 'react-icons/tb'
import { SlSocialTwitter, SlSocialYoutube, SlSocialFacebook, SlSocialInstagram } from 'react-icons/sl'
import Link from 'next/link'


const footerContact = [
    {
        name: "Deliver",
        image: <TbTruckDelivery />
    },
    {
        name: "Return and Exchange",
        image: <GiReturnArrow />
    },
    {
        name: "+234 (80) 749-18-234 ",
        image: <BsTelephone />
    },
    {
        name: "shop@omix.com",
        image: <CiMail />
    },
]
const Footer = () => {
    return (

        <footer className='h-[584px] bg-[#212429] py-[88px] px-[112px] text-[#FFFFFF]'>
            <div className='flex justify-between'>
                {footerContact.map(item => (
                    <div className='flex justify-between items-center gap-2'>
                        <div className='text-black text-[30px] bg-white rounded-[50%] p-3'>{item.image}</div>
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
            <div className='md:flex justify-between mt-[50px] font-[300]'>
                <div className='lg:w-2/4 '>
                    <h2 className='text-[24px] font-[700] mb-[21px]'>Customers</h2>
                    <div className='md:flex md:justify-start gap-40 text-[rgba(255,255,255,0.64)]'>
                        <ul className="leading-9">
                            <li>
                                <Link href="#">Payment</Link>
                            </li>
                            <li>
                                <Link href="#">Personal data policy</Link>
                            </li>
                            <li>
                                <Link href="#">Stocks</Link>
                            </li>
                            <li>
                                <Link href="#">Gift certificates</Link>
                            </li>
                        </ul>
                        <ul className="leading-9">
                            <li>
                                <Link href="#">Affiliate program</Link>
                            </li>
                            <li>
                                <Link href="#">Rules for using promo codes</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='lg:w-1/4'>
                    <h2 className='text-[24px] font-[700] mb-[21px]'>About company</h2>
                    <ul className='text-[rgba(255,255,255,0.64)] leading-9'>
                        <li>
                            <Link href="#">About Us</Link>
                        </li>
                        <li>
                            <Link href="#">Contacts</Link>
                        </li>
                        <li>
                            <Link href="#">News</Link>
                        </li>
                        <li>
                            <Link href="#">Jobs</Link>
                        </li>
                    </ul>
                </div>
                <div className='lg:w-1/4'>
                    <h2 className='text-[24px] font-[700] mb-[21px]'>Our social networks</h2>
                    <ul className='text-white flex gap-5 text-[25px] '>
                        <li>
                            <Link href="#"><SlSocialYoutube /></Link>
                        </li>
                        <li>
                            <Link href="#"><SlSocialTwitter /></Link>
                        </li>
                        <li>
                            <Link href="#"><SlSocialFacebook /></Link>
                        </li>
                        <li>
                            <Link href="#"><SlSocialInstagram /></Link>
                        </li>
                        <li>
                            <Link href="#"><TbBrandTelegram /></Link>
                        </li>
                        <li>
                            <Link href="#"></Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='md:flex justify-between py-[90px] font-[300] text-[12px] text-[#737373]'>
                <div className='w-1/4'>
                    <p>© 2020 – 2023 Omix Store LLC.</p>
                    <p>All rights reserved.</p>
                </div>
                <div className='w-1/4'>
                    <p>Limited Liability Company "Omix Store", legal address: 220020, Minsk, Pobediteley Ave., 100, of. 203</p>
                </div>
                <div className='w-1/4'>
                    <p>
                        In the commercial register since June 23, 2010, registration number 00000
                    </p>
                </div>
                <div className=''>
                    <img src="payment.png" alt="payment" className='h-20px w-[208px]' />
                </div>
            </div>
        </footer>

    )
}

export default Footer