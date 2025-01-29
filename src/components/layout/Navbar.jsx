import React from 'react';
import { MdArrowDropDown } from "react-icons/md";
import { ButtonSolid } from '../common/base/buttons/Button';


const logo = "/images/logo-zaya.svg";

export default function Navbar() {
  const menuStyle = 'text-[16px] text-[rgba(0,0,0,0.9)] font-[500] px-5 py-1'; 
  const menuStyleHover = 'hover:bg-black hover:text-white rounded-full transition-all duration-300'; 
  const dropdownStyle = 'absolute left-0 bg-white shadow-lg rounded-lg whitespace-nowrap'; 

  return (
    <div>
      <nav className="flex justify-between items-center px-8 py-5 bg-white w-full">
        <img src={logo} alt="Logo" />
        <ul className="gap-2 items-center relative hidden md:flex">
          <li className={`${menuStyle} bg-[#219ed3] rounded-full !text-white`}>Home</li>

          {/* About Us with dropdown */}
          <li className="relative group">
            <span className={`${menuStyle} ${menuStyleHover} cursor-pointer flex items-center`}>About Us <MdArrowDropDown size={20}/></span>
            <ul className={`${dropdownStyle} hidden group-hover:block`}>
              <li className="text-[rgba(0,0,0,0.8)] py-2 px-4 rounded-t-[10px] hover:bg-[#219ed3] hover:text-white font-[500] mb-3">About Zaya AI</li>
              <li className="text-[rgba(0,0,0,0.8)] py-2 px-4 rounded-b-[10px] hover:bg-[#219ed3] hover:text-white font-[500]">Team</li>
            </ul>
          </li>

          {/* Products with dropdown */}
          <li className="relative group">
            <span className={`${menuStyle} ${menuStyleHover} cursor-pointer  flex items-center`}>Products <MdArrowDropDown size={20}/></span>
            <ul className={`${dropdownStyle} hidden group-hover:block`}>
              <li className="text-[rgba(0,0,0,0.8)] py-2 px-4 rounded-t-[10px]  hover:bg-[#219ed3] hover:text-white font-[500] mb-3">ZayaAI Dx</li>
              <li className="text-[rgba(0,0,0,0.8)] py-2 px-4 hover:bg-[#219ed3] hover:text-white font-[500] mb-3">ZayaAI Telepathology Dx</li>
              <li className="text-[rgba(0,0,0,0.8)] py-2 px-4 rounded-b-[10px]  hover:bg-[#219ed3] hover:text-white font-[500]">ZayaAI Pathology LIS</li>
            </ul>
          </li>

          <li className={`${menuStyle} ${menuStyleHover}`}>Resources</li>
          <li className={`${menuStyle} ${menuStyleHover}`}>Contact Us</li>
        </ul>
        <button className='block md:hidden bg-[#219ed3] text-white px-4 py-3 rounded-xl'>Connect Wallet</button>
      </nav>
    </div>
  );
}
