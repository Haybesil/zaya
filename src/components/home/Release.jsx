import React, { useState } from 'react';
const logo = '/images/logo-zaya.svg';
import chart from '../../../public/images/chart.webp';
import team from '../../../public/images/team.webp';
import press from '../../../public/images/zaya_press_release.webp';
import { HiArrowNarrowRight } from "react-icons/hi";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";




const Release = () => {
  const firstParagraphStyle = 'text-[18px] font-light pt-[60px]';
const buttonStyle = 'text-[#219ed3] text-[18px] pt-6 flex items-center hover:text-black'  

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = 4; // Total number of carousel items

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalItems - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel relative flex overflow-hidden">
        <button
          onClick={handlePrevClick}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-[#219ed3] hover:bg-[#219ed3] hover:text-white p-2 rounded-full z-10"
        >
          <HiArrowNarrowLeft size={30}/>
        </button>

        <div
          className="carousel-track flex gap-8  transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 25}%)` }}
        >
          <div className="carousel-item flex-shrink-0 w-1/4 card bg-white rounded-lg shadow-lg p-6">
            <div className="">
              <h3 className="text-base font-semibold mb-4">Press Release</h3>
              <img src={logo} alt="" />
              <p className={firstParagraphStyle}>23 February 2024</p>
              <p className="text-[22px] font-light pt-3">
                ZayaAI Welcomes Kimberly Gasuad to its Boards of Directors
              </p>
              <p className="text-[17px] font-light pt-3">
                [Bucharest, October,14, 2024] - ZayaAI, a pioneer in AI-driven
                solutions for healthcare, is thrilled...
              </p>
              <button className={buttonStyle}>Read More <MdKeyboardDoubleArrowRight /></button>
            </div>
          </div>
          <div className="carousel-item flex-shrink-0 w-1/4 card bg-white rounded-lg shadow-lg p-6">
            <div className="">
              <h3 className="text-base font-semibold mb-4">Press Release</h3>
              <img src={logo} alt="" />
              <p className={firstParagraphStyle}>18 October 2024</p>
              <p className="text-[22px] font-light pt-3">
                ZayaAI and Extra Horizon announce collaboration to bring Zaya Ai
                Dx platform faster to market stage
              </p>
              <p className="text-[17px] font-light pt-3">
                October 27, 2022 ZayaAI will use the Extra Horizon Medical
                Backend-as-a-Service platform to reach the...
              </p>
              <button className={buttonStyle}>Read More <MdKeyboardDoubleArrowRight /></button>
            </div>
          </div>
          <div className="carousel-item flex-shrink-0 w-1/4 card bg-white rounded-lg shadow-lg p-6">
            <div className="">
              <h3 className="text-base font-semibold mb-4">Press Release</h3>
              <img src={logo} alt="" />
              <p className={firstParagraphStyle}>23 February 2024</p>
              <p className="text-[22px] font-light pt-3">
                ZayaAI Welcomes Pamela Penman to its Board of Advisors
              </p>
              <p className="text-[17px] font-light pt-3">
                [Bucharest, 23 February 2024] – ZayaAI, a leader in the
                development of cutting-edge artificial intelligence...
              </p>
              <button className={buttonStyle}>Read More <MdKeyboardDoubleArrowRight /></button>
            </div>
          </div>
          <div className="carousel-item flex-shrink-0 w-1/4 card bg-white rounded-lg shadow-lg p-6">
            <div className="">
              <h3 className="text-base font-semibold mb-4">Press Release</h3>
              <img src={logo} alt="" />
              <p className={firstParagraphStyle}>11 December 2023</p>
              <p className="text-[22px] font-light pt-3">
                ZayaAI Announces Strategic Collaboration with Healthcare
                Financing Expert Christophe Bourrilly
              </p>
              <p className="text-[17px] font-light pt-3">
                [Bucharest, 11 December 2023] – ZayaAI, a pioneering leader in
                the field of artificial intelligence,...
              </p>
              <button className={buttonStyle}>Read More <MdKeyboardDoubleArrowRight /></button>
            </div>
          </div>
          <div className="carousel-item flex-shrink-0 w-1/4 card bg-white rounded-lg shadow-lg p-6">
            <div className="">
              <h3 className="text-base font-semibold mb-4">Press Release</h3>
              <img src={logo} alt="" />
              <p className={firstParagraphStyle}>30 November 2023</p>
              <p className="text-[22px] font-light pt-3">
                Zaya Pathology Laboratory, a Division of ZayaAI, Announces Alina
                Clont as New Business Development Consultant
              </p>
              <p className="text-[17px] font-light pt-3">
                [Bucharest, 30-November-2023] – Zaya Pathology Laboratory, a
                leading division of ZayaAI known for its...
              </p>
              <button className={buttonStyle}>Read More <MdKeyboardDoubleArrowRight /></button>
            </div>
          </div>
          <div className="carousel-item flex-shrink-0 w-1/4 card bg-white rounded-lg shadow-lg p-6">
            <div className="">
              <h3 className="text-base font-semibold mb-4">Press Release</h3>
              <img src={logo} alt="" />
              <p className={firstParagraphStyle}>13 February 2023</p>
              <p className="text-[22px] font-light pt-3">
                ZayaAI announce collaboration with Heather D. Couture, PhD, from
                Pixel Scientia Labs
              </p>
              <p className="text-[17px] font-light pt-3">
                February 10, 2023 – ZayaAI announce collaboration with Heather
                D. Couture, PhD, from Pixel Scientia...
              </p>
              <button className={buttonStyle}>Read More <MdKeyboardDoubleArrowRight /></button>
            </div>
          </div>
          <div className="carousel-item flex-shrink-0 w-1/4 card bg-white rounded-lg shadow-lg pb-10">
            <div className="">
              <img src={chart} alt="" className='h-[150px] w-full rounded-tr-lg rounded-tl-lg object-cover'/>
              <p className={`${firstParagraphStyle} pl-6`}>31 October 2022</p>
              <p className="text-[22px] font-light pt-3 pl-6">
                A New Artificial Intelligence-Based Method for Identifying
                Mycobacterium Tuberculosis in Ziehl–Neelsen Stain on Tissue
              </p>
              <p className="text-[17px] font-light pl-6">
                Abstract Mycobacteria identification is crucial to diagnose
                tuberculosis. Since the bacillus is very...
              </p>
              <button className={`${buttonStyle} pb-6 pl-6`}>Read More <MdKeyboardDoubleArrowRight /></button>
            </div>
          </div>
          <div className="carousel-item flex-shrink-0 w-1/4 card bg-white rounded-lg shadow-lg">
            <div className="">
              <img src={team} alt="" className='h-[150px] w-full rounded-tr-lg rounded-tl-lg object-cover'/>
              <p className={`${firstParagraphStyle} pl-6`}>31 October 2022</p>
              <p className="text-[22px] font-light pt-3 pl-6">
                Zaya AI, the start-up that brings artificial intelligence to
                pathology diagnosis launch a seed round of 600,000 euros
              </p>
              <p className="text-[17px] font-light pt-3 pl-6">
                Zaya AI is a Romanian start-up that has created a telepathology
                platform dedicated to doctors and that...
              </p>
              <button className={`${buttonStyle} pb-6 pl-6`}>Read More <MdKeyboardDoubleArrowRight /></button>
            </div>
          </div>
          <div className="carousel-item flex-shrink-0 w-1/4 card bg-white rounded-lg shadow-lg p-6">
            <div className="">
              <img src={press} alt="" className='h-[150px] w-full rounded-tr-lg rounded-tl-lg object-cover'/>
              <p className={`${firstParagraphStyle} pl-6`}>27 October 2022</p>
              <p className="text-[22px] font-light pt-3 pl-6">
                ZayaAI and Extra Horizon announce collaboration to bring Zaya Ai
                Dx platform faster to market stage
              </p>
              <p className="text-[17px] font-light pt-3 pl-6">
                October 27, 2022 ZayaAI will use the Extra Horizon Medical
                Backend-as-a-Service platform to reach the...
              </p>
              <button className={`${buttonStyle} pb-6 pl-6`}>Read More <MdKeyboardDoubleArrowRight /></button>
            </div>
          </div>
        </div>

        {/* Right Button */}
        <button
          onClick={handleNextClick}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-[#219ed3] hover:bg-[#219ed3] hover:text-white p-2 rounded-full"
        >
          <HiArrowNarrowRight size={30}/>
        </button>

        {/* Dots for navigation */}
        <div className="dots-navigation absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {[...Array(totalItems)].map((_, index) => (
            <button
              key={index}
              className={`dot w-2 h-2 rounded-full ${
                currentIndex === index ? 'bg-black' : 'bg-gray-300'
              }`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Release;
