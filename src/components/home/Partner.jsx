import React from 'react';
import Image1 from '/images/sofimar.svg';
import Image2 from '/images/extra-horizon.svg';
import Image3 from '/images/clinica-life.svg';

export default function Partner() {
  return (
    <div>
      <h2 className=" text-[40px] md:text-[50px] pt-12 font-light pl-0 md:pl-6 text-center text-[rgba(20,22,44,0.8)]">
        We are trusted by the best in domain
      </h2>
      <div id="indicators-carousel" className="relative w-full mt-8">
        {/* Desktop: Show all 5 images side by side */}
        <div className="hidden lg:flex justify-between px-[4vw]">
          <img src={Image1} className="w-[180px]" alt="Partner 1" />
          <img src={Image2} className="w-[180px]" alt="Partner 2" />
          <img src={Image1} className="w-[180px]" alt="Partner 3" />
          <img src={Image3} className=" w-[180px]" alt="Partner 4" />
          <img src={Image2} className=" w-[180px]" alt="Partner 5" />
        </div>

        {/* Mobile: Carousel to show only two images at a time */}

        <div
          id="default-carousel"
          className="relative w-full block lg:hidden"
          data-carousel="slide"
        >
          {/* Carousel wrapper */}
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            {/* Item 1 */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src={Image1}
                className="absolute block w-[280px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            {/* Item 2 */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src={Image2}
                className="absolute block w-[280px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            {/* Item 3 */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src={Image1}
                className="absolute block w-[280px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            {/* Item 4 */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src={Image3}
                className="absolute block w-[280px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            {/* Item 5 */}
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src={Image2}
                className="absolute block w-[280px] -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
          </div>
          {/* Slider indicators */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button
              type="button"
              className="w-2 h-2 rounded-full bg-black"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              className="w-2 h-2 rounded-full bg-black"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
             className="w-2 h-2 rounded-full bg-black"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
            <button
              type="button"
              className="w-2 h-2 rounded-full bg-black"
              aria-current="false"
              aria-label="Slide 4"
              data-carousel-slide-to="3"
            ></button>
            <button
              type="button"
              className="w-2 h-2 rounded-full bg-black"
              aria-current="false"
              aria-label="Slide 5"
              data-carousel-slide-to="4"
            ></button>
          </div>
          {/* Slider controls */}
          {/* <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black  group-hover:bg-white/50  group-focus:ring-4 group-focus:ring-white  group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button> */}
          {/* <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-black  group-hover:bg-white/50  group-focus:ring-4 group-focus:ring-white  group-focus:outline-none">
              <svg
                className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button> */}
        </div>
      </div>
    </div>
  );
}
