import React from "react";
import { Facebook, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";

const logo = "../../../public/images/Logo-gri.svg";

const  ProductLinks= [
  { name: "ZayaAI Dx" },
  { name: "ZayaAI Telepathology Dx" },
  { name: "ZayaAI Pathology LIS" },
];

const  UsefulLinks = [
  { name: "About Zaya AI" },
  { name: "Team" },
  { name: "Resources" },
  { name: "Contact Us" },
];

export const Footer = () => {
  const footerStyle = "grid grid-cols-6 gap-12 lg:gap-16 py-12 px-4 lg:px-16";

  const titleStyle =
    "text-[20px] text-2xl font-bold mb-6 text-[#2A3342] uppercase tracking-wide";

  const iconStyle =
    "flex items-center justify-center w-12 h-12 bg-[rgba(255,255,255,0.2)] rounded-full hover:bg-white hover:text-p-primary transition-all duration-200 cursor-pointer";

  const currentYear = new Date().getFullYear();

  return (
    <div
      className="bg-[#e7f0ff] text-[rgba(13,10,32,0.8)] pt-24"
    >
      <footer className="section-paddings">
        <div className="border-t border-gray-400"></div>
        <section className={footerStyle}>
          <div className="col-span-6 lg:col-span-2 space-y-6">
            <img
              src={logo}
              alt="logo"
              className="mx-auto lg:mx-0"
            />
            <p className="text-center lg:text-left text-lg">
              © {currentYear} ZAYA | All Rights Reserved.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <span className={iconStyle}>
                <Facebook size={22} />
              </span>
              <span className={iconStyle}>
                <Twitter size={22} />
              </span>
              <span className={iconStyle}>
                <Linkedin size={22} />
              </span>
              <span className={iconStyle}>
                <Youtube size={22} />
              </span>
            </div>
          </div>

          <div className="col-span-6 md:col-span-2 lg:col-span-1">
            <h2 className={titleStyle}>Products</h2>
            <ul className="space-y-4 pr-5">
              {ProductLinks.map((link, index) => (
                <li key={index} className="cursor-pointer text-base font-normal transition-colors hover:text-p-secondary-1 whitespace-nowrap text-[25px]">
                  {link.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2 lg:col-span-1">
            <h2 className={titleStyle}>Company</h2>
            <ul className="space-y-4">
              {UsefulLinks.map((link, index) => (
                <li key={index} className="cursor-pointer text-base font-normal transition-colors hover:text-p-secondary-1 text-[25px]">
                  {link.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2 lg:col-span-2">
            <h2 className={`${titleStyle} whitespace-nowrap`}>Subscribe to our newsletter</h2>
            <p className="text-[25px] md:text-[30px] mb-6">Receive all the latest Zaya news and updates straight to your inbox.</p>
            <form className="mb-9 flex flex-col gap-4 lg:items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="rounded-full border border-[#D5DAE1] px-4 py-3 text-[16px] font-normal text-[#2A3342] focus:border-none focus:outline-none w-full md:w-[20vw]"
                required
              />
              <button
                className="rounded-full border border-transparent bg-[#219ed3] px-4 py-3 text-white transition-all duration-200 hover:bg-white hover:text-p-primary w-full md:w-[20vw]"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </footer>
    </div>
  );
};
