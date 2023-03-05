import React from 'react'
import { GrClose } from "react-icons/gr";
import Link from 'next/link';
import { navbarList } from '@/data/navbar';

type SetIsOpenCallback = (isOpen: boolean) => void;
type MobileNavBarProps = {
    setIsOpen: SetIsOpenCallback;
}
const mobileNavBar = ({ setIsOpen }: MobileNavBarProps) => {
  return (
      <div className="fixed bg-[#C5D7D9] z-50 w-[100%] h-[100vh]  right-0 top-0 overflow-y-hidden">
          <button
              className="absolute right-[12%] top-[1.5%] text-white text-[22px]"
              onClick={() => setIsOpen(false)}
          >
              <GrClose />
          </button>
          <ul className="mt-[60px]">
              {navbarList.navList.map(({ page, link }) => (
                  <Link key={link} href={link} onClick={() => setIsOpen(false)}>
                      <li className="p-4 text-[24px] font-[700] mx-3 text-black">
                          {page}
                      </li>
                  </Link>
              ))}
          </ul>
      </div>
  )
}

export default mobileNavBar