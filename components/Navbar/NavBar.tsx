import React, { useState } from 'react'
import Link from 'next/link'
import { navbarList } from '@/data/navbar'
import { BiMenu } from "react-icons/bi";
import { FiUser } from "react-icons/fi"
import { MdOutlineFavoriteBorder, MdOutlineShoppingCart } from "react-icons/md";
import MobileNav from './MobileNav';


type NavbarItemType = {
    page: string,
    link: string
}

type StylingProps = {
    isActive?: boolean,
    fontWeight?: string,
    borderBottom?: string
}

const NavBar: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);
  return (
      <div className="px-4 py-4 md:px-[120px] max-w-[1600px] w-[100%] md:mt-4 mx-auto flex justify-evenly items-center">
          <Link href="/">
              <img src="omix_logo.svg" alt="logo" className="w-[120px] h-[60px]" />
          </Link>

          <div className=" md:w-[80%] lg:w-[65%] ">
              <ul className="hidden md:flex items-center justify-center">
                  {navbarList.navList.map(({ page, link }: NavbarItemType) => (
                      <Link
                          className="mx-3 "
                          key={link}
                          href={link}
                        //   style={({ isActive }: StylingProps) => ({
                        //       borderBottom: isActive ? "2px solid #2B5C5F" : "none",
                        //       fontWeight: isActive ? "700" : "400",
                        //   })}
                      >
                          <li className="p-3 mb-2 md:mb-0 text-[#696869] navbar hover:text-[#2B5C5F]">
                              {page}
                          </li>
                      </Link>
                  ))}
              </ul>
          </div>

          <div className="flex gap-4 relative">
              <FiUser size={20} />
              <MdOutlineFavoriteBorder size={20} />
              <MdOutlineShoppingCart size={20} />
              <div className='absolute -right-1 -top-2 rounded-[50%] bg-orange-400 text-[12px] h-2 w-2 p-2 text-center flex items-center justify-center border-none font-[100]'>0</div>
          </div>

          {!isOpen && (
              <div className="md:hidden" onClick={() => setIsOpen(true)}>
                  <BiMenu size={30} />
              </div>
          )}

          {isOpen && <MobileNav setIsOpen={setIsOpen} />}
      </div>
  )
}

export default NavBar