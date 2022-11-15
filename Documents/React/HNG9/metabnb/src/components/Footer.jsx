import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#1D1D1E] text-white py-10 font-[400]">
      <div className="flex flex-col md:flex-row md:justify-around pr-[40px]">
        <div className="mb-9">
          <img src="Footer--logo.svg" alt="Footer Logo" className="mb-10" />
          <div className="flex py-10 gap-8">
            <a href="facebook.com">
              <FaFacebookF size={18} color="white" />
            </a>
            <a href="instagram.com">
              <FaInstagram size={18} color="white" />
            </a>
            <a href="twitter.com/4biol4">
              <FaTwitter size={18} color="white" />
            </a>
          </div>
          <p>
            <span className="text-[20px]">© </span> 2022 Metabnb
          </p>
        </div>
        <div className="mb-9">
          <p className="text-[18px] mb-4">Community</p>
          <ul className="text-[14px] font-[400] leading-9">
            <a href="">
              <li className="hover:opacity-70 duration-200">NFT</li>
            </a>
            <a href="">
              <li className="hover:opacity-70 duration-200">Tokens</li>
            </a>
            <a href="">
              <li className="hover:opacity-70 duration-200">Landlords</li>
            </a>
            <a href="">
              <li className="hover:opacity-70 duration-200">Discord</li>
            </a>
          </ul>
        </div>
        <div className="mb-9">
          <p className="text-[18px] mb-4">Places</p>
          <ul className="text-[14px] font-[400] leading-9">
            <a href="#">
              <li className="hover:opacity-70 duration-200">Castle</li>
            </a>
            <a href="#">
              <li className="hover:opacity-70 duration-200">Farms</li>
            </a>
            <a href="#">
              <li className="hover:opacity-70 duration-200">Beach</li>
            </a>
            <a href="#">
              <li className="hover:opacity-70 duration-200">Learn more</li>
            </a>
          </ul>
        </div>
        <div className="mb-9">
          <p className="text-[18px] mb-4">About us</p>
          <ul className="text-[14px] font-[400] leading-9">
            <a href="#">
              <li className="hover:opacity-70 duration-200">Road map</li>
            </a>
            <a href="#">
              <li className="hover:opacity-70 duration-200">Creators</li>
            </a>
            <a href="#">
              <li className="hover:opacity-70 duration-200">Career</li>
            </a>
            <a href="#">
              <li className="hover:opacity-70 duration-200">Contact us</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
