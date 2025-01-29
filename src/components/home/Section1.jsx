import React from 'react';
import { ButtonSolid } from '../common/base/buttons/Button';
import { RiArrowRightSLine } from 'react-icons/ri';
import VideoPlayer from './Video';
import Product from './Product';
import Partner from './Partner';
import Release from './Release';
import CTA from './CTA';

const Section1 = () => {
  const cards = [
    {
      image: '/images/bacteria1.png',
      text: 'We are a digital Pathology company that uses machine learning to better understand and diagnose disease',
    },
    {
      image: '/images/bacteria2.png',
      text: 'Our aim is to make it easier for Pathologists to Diagnose diseases by using AI to more quickly and accurately analyse images of tissues and cells',
    },
    {
      image: '/images/bacteria3.png',
      text: 'ZAYA is designed to be used by medical doctors in hospitals and by researchers in pharmaceutical companies',
    },
  ];

  return (
    <div className="bg-[#e7f0ff]">
      <h2 className="text-[50px] md:text-[90px] font-light pt-10 pl-0 md:pl-6 text-center md:text-left">What we do</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-[30px] shadow-lg bg-white flex flex-col items-center hover:shadow-xl transition-shadow"
          >
            <div className="overflow-hidden rounded-t-[30px] w-full">
              <img
                src={card.image}
                alt={`Card ${index + 1}`}
                className="object-cover transform transition-transform duration-300 hover:scale-110"
              />
            </div>
            <p className="pt-4 pl-6 pb-2 text-lg font-medium text-gray-700">
              {card.text}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:flex-row justify-between px-6 pt-10">
        <div className="">
          <h2 className="text-[50px] md:text-[90px] font-light pt-10 pl-6 ">How it works</h2>
          <p className="text-[23px] font-extralight pt-6 md:max-w-[55vw] leading-[35px]">
            Zaya enables easy remote access, second opinion diagnosis and
            collaboration, regardless of where the participants are.
            Pathologists or researchers can access images from anywhere, at any
            time, helping them improve diagnosis quality and patient outcomes.
            Access to specialists for efficient external readings and second
            opinions can also shorten waiting times for patients – helping you
            meet patient demand and regulatory compliance. Get your score
            results and check diagnostic score data and heatmaps for a new era
            in Pathology diagnosis.
          </p>
          <ButtonSolid text="Learn More" title="Learn More" className="mt-8">
            <RiArrowRightSLine size={25} />
          </ButtonSolid>
        </div>
        <div className='mt-7 md:mt-0 flex flex-col gap-10'>
          <div className="flex gap-5 border border-gray-500 px-5 py-5 rounded-3xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 80 96"
              fill="none"
            >
              <g clip-path="url(#clip0_39_136)">
                <path
                  d="M58.2501 94.9855C58.5829 94.9855 59.2486 94.658 59.5815 94.658L78.8872 76.6435C79.2201 76.3159 79.5529 75.9884 79.5529 75.3333C79.8858 75.0058 79.8858 74.6783 79.8858 74.3507V7.53333C79.8858 3.27536 76.5572 0 72.2301 0H7.65572C3.32858 0 0 3.27536 0 7.53333V87.7797C0 92.0377 3.32858 95.313 7.65572 95.313H56.9186C57.5844 95.313 57.9172 95.313 58.2501 94.9855ZM60.2472 89.0899V82.2116C60.2472 79.2638 62.5772 76.971 65.5729 76.971H73.2287L60.2472 89.0899ZM54.9215 91.3826H7.65572C5.65858 91.3826 4.32715 89.7449 4.32715 88.1072V7.53333C4.32715 5.56812 5.99144 4.25797 7.65572 4.25797H72.2301C74.2272 4.25797 75.5587 5.89565 75.5587 7.53333V72.058H65.5729C59.5815 72.058 54.9215 76.971 54.9215 82.5391V91.3826Z"
                  fill="#20C2E5"
                ></path>
                <path
                  d="M16.6428 27.8405H63.2429C64.5743 27.8405 65.24 26.8579 65.24 25.8753V21.9448C65.24 20.6347 64.2415 19.9796 63.2429 19.9796H16.6428C15.3114 19.9796 14.6457 20.9622 14.6457 21.9448V25.5477C14.3128 26.8579 15.3114 27.8405 16.6428 27.8405ZM16.9757 22.2724H62.91V25.2202H16.9757V22.2724Z"
                  fill="#20C2E5"
                ></path>
                <path
                  d="M16.6428 40.9419H63.2429C64.5743 40.9419 65.24 39.9593 65.24 38.9767V35.3738C65.24 34.0636 64.2415 33.4086 63.2429 33.4086H16.6428C15.3114 33.4086 14.6457 34.3912 14.6457 35.3738V38.9767C14.3128 39.9593 15.3114 40.9419 16.6428 40.9419ZM16.9757 35.3738H62.91V38.3216H16.9757V35.3738Z"
                  fill="#20C2E5"
                ></path>
                <path
                  d="M65.5726 51.7506V48.1477C65.5726 46.8376 64.574 46.1825 63.5754 46.1825H16.6425C15.3111 46.1825 14.6454 47.1651 14.6454 48.1477V51.7506C14.6454 53.0608 15.644 53.7158 16.6425 53.7158H63.2426C64.574 54.0434 65.5726 53.0608 65.5726 51.7506ZM62.9097 51.4231H16.9754V48.4752H62.9097V51.4231Z"
                  fill="#20C2E5"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_39_136">
                  <rect width="79.8858" height="95.313" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
            <div>
              <h3 className='text-[28px] font-medium'>Scan</h3>
              <p className='text-[23px] font-light whitespace-nowrap'>the image required for processing</p>
            </div>
          </div>
          <div className="flex gap-5 border border-gray-500 px-5 py-5 rounded-3xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 89 95"
              fill="none"
            >
              <g clip-path="url(#clip0_39_160)">
                <path
                  d="M85.5023 66.8174H77.5137C75.8494 66.8174 74.1852 68.1275 74.1852 70.0927V79.2638H14.9365V70.0927C14.9365 68.1275 13.6051 66.8174 11.6079 66.8174H3.61935C1.95506 66.8174 0.290771 68.1275 0.290771 70.0927V90.7275C0.290771 92.3652 1.6222 94.0029 3.61935 94.0029H85.8352C87.8323 94.0029 89.1637 92.3652 89.1637 90.7275V70.0927C88.8309 68.1275 87.4995 66.8174 85.5023 66.8174ZM84.8366 90.0725H4.28506V70.7478H10.9422V81.229C10.9422 82.2116 11.9408 83.1942 12.9394 83.1942H76.1823C77.1809 83.1942 78.1794 82.2116 78.1794 81.229V70.7478H84.8366V90.0725Z"
                  fill="#20C2E5"
                ></path>
                <path
                  d="M31.9119 74.3509H57.2091C59.2062 74.3509 60.8705 72.7132 60.8705 70.748V63.8697C60.8705 61.9045 59.2062 60.2668 57.2091 60.2668H31.9119C29.9148 60.2668 28.2505 61.9045 28.2505 63.8697V70.748C28.5833 72.7132 29.9148 74.3509 31.9119 74.3509ZM32.5776 64.5248H56.8762V70.4205H32.5776V64.5248Z"
                  fill="#20C2E5"
                ></path>
                <path
                  d="M10.609 39.3043C11.2748 40.942 13.2719 41.9246 15.269 41.9246H28.5833V54.0435C28.5833 55.6812 29.9148 57.3188 31.9119 57.3188H57.542C59.5391 57.3188 60.8705 56.0087 60.8705 54.0435V41.9246H73.852C75.8491 41.9246 77.8463 40.942 78.512 39.3043C79.1777 37.9942 78.8448 36.6841 77.8463 35.7014L63.5334 18.6696L48.8877 1.63768C47.8891 0.655072 46.2248 0 44.5605 0C42.8962 0 41.2319 0.655072 40.5662 1.63768L11.2748 35.7014C10.2762 36.6841 9.94332 37.9942 10.609 39.3043ZM43.5619 4.25797C43.5619 4.25797 44.2277 3.93043 44.5605 3.93043C45.2262 3.93043 45.5591 4.25797 45.5591 4.25797L60.2048 21.2899L74.5177 37.9942C74.1848 37.9942 74.1848 37.9942 73.852 37.9942H58.8734C57.8748 37.9942 56.8762 38.9768 56.8762 39.9594V53.3884H32.5776V39.9594C32.5776 38.9768 31.5791 37.9942 30.5805 37.9942H15.269C14.9362 37.9942 14.6033 37.9942 14.6033 37.9942L43.5619 4.25797Z"
                  fill="#20C2E5"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_39_160">
                  <rect
                    width="88.5401"
                    height="94.0029"
                    fill="white"
                    transform="translate(0.290771)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
            <div>
              <h3 className='text-[28px] font-medium'>Upload</h3>
              <p className='text-[23px] font-light whitespace-nowrap'>the scan on to the ZAYA platform</p>
            </div>
          </div>
          <div className="flex gap-5 border border-gray-500 px-5 py-5 rounded-3xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 89 95"
              fill="none"
            >
              <g clip-path="url(#clip0_39_173)">
                <g clip-path="url(#clip1_39_173)">
                  <path
                    d="M15.0299 75.3507H29.769V83.2116H16.34C15.3574 83.2116 14.3748 84.1942 14.3748 85.1768V92.3826C14.3748 93.3652 15.3574 94.3478 16.34 94.3478H71.0386C72.0212 94.3478 73.0038 93.3652 73.0038 92.3826V85.1768C73.0038 84.1942 72.0212 83.2116 71.0386 83.2116H57.6096V75.3507H72.3487C80.5372 75.3507 87.0879 68.8 87.0879 60.6116V15.7391C87.0879 7.55072 80.5372 1 72.3487 1H15.0299C6.8415 1 0.290771 7.55072 0.290771 15.7391V60.9391C0.290771 68.8 6.8415 75.3507 15.0299 75.3507ZM4.54874 15.7391C4.54874 9.84348 9.13425 5.25797 15.0299 5.25797H72.6763C78.5719 5.25797 83.1574 9.84348 83.1574 15.7391V60.9391C83.1574 66.8348 78.5719 71.4203 72.6763 71.4203H15.0299C9.13425 71.4203 4.54874 66.8348 4.54874 60.9391V15.7391ZM69.0734 90.4174H18.6328V87.4696H69.0734V90.4174ZM34.027 83.2116V75.3507H54.0067V83.2116H34.027Z"
                    fill="#1FCAE3"
                  ></path>
                  <path
                    d="M14.3752 40.9594V48.8202C14.3752 57.0087 20.9259 63.5594 29.1143 63.5594H58.5926C66.781 63.5594 73.3317 57.0087 73.3317 48.8202V41.2869C73.6592 40.9594 74.3143 40.6318 74.3143 39.9768C74.3143 39.3217 73.9868 38.9942 73.3317 38.6666V27.5304C73.3317 19.342 66.781 12.7913 58.5926 12.7913H29.1143C20.9259 12.7913 14.3752 19.342 14.3752 27.5304V38.3391C14.0476 38.6666 13.7201 38.9942 13.7201 39.6492C13.7201 40.3043 14.0476 40.6318 14.3752 40.9594ZM29.1143 17.0492H58.5926C64.4882 17.0492 69.0737 21.6347 69.0737 27.5304V38.0116H61.2128L58.265 28.513C57.9375 27.8579 57.2824 27.2029 56.6273 27.2029C55.9723 27.2029 55.3172 27.5304 54.9897 28.1855L49.7491 42.9246L44.5085 23.2724C44.181 22.6173 43.8534 22.2898 43.1984 21.9623C42.5433 21.9623 41.8882 22.2898 41.5607 22.6173L33.0447 38.0116H18.6331V27.5304C18.6331 21.6347 23.2186 17.0492 29.1143 17.0492ZM58.5926 59.3014H29.1143C23.2186 59.3014 18.6331 54.7159 18.6331 48.8202V41.2869H34.0273C34.6824 41.2869 35.0099 40.9594 35.3375 40.6318L42.8708 28.1855L48.4389 49.1478C48.7665 49.8029 49.094 50.4579 50.0766 50.4579C50.7317 50.4579 51.3868 50.1304 51.7143 49.4753L56.9549 34.4086L58.5926 39.9768C58.9201 40.6318 59.5752 41.2869 60.2302 41.2869H69.0737V48.8202C69.0737 54.7159 64.4882 59.3014 58.5926 59.3014ZM72.3491 40.6318H59.9027C59.5752 40.6318 59.2476 40.3043 59.2476 39.9768L56.9549 31.7884L51.0592 49.1478C51.0592 49.4753 50.7317 49.8029 50.4042 49.8029C50.0766 49.8029 49.7491 49.4753 49.7491 49.1478L43.5259 26.2202L34.6824 40.3043C34.6824 40.6318 34.3549 40.6318 34.0273 40.6318H15.3578C15.0302 40.6318 14.3752 40.3043 14.3752 39.6492C14.3752 39.3217 14.7027 38.6666 15.3578 38.6666H33.3723L42.5433 23.6C42.8708 23.2724 43.1984 23.2724 43.5259 23.2724C43.8534 23.2724 44.181 23.6 44.181 23.9275L50.0766 46.2L55.9723 28.8405C55.9723 28.513 56.2998 28.1855 56.6273 28.1855C56.9549 28.1855 57.2824 28.513 57.2824 28.8405L60.2302 38.9942H72.3491C72.6766 38.9942 73.3317 39.3217 73.3317 39.9768C73.3317 40.3043 73.0042 40.6318 72.3491 40.6318Z"
                    fill="#1FCAE3"
                  ></path>
                </g>
              </g>
              <defs>
                <clipPath id="clip0_39_173">
                  <rect
                    width="88.5401"
                    height="94.0029"
                    fill="white"
                    transform="translate(0.290771)"
                  ></rect>
                </clipPath>
                <clipPath id="clip1_39_173">
                  <rect
                    width="87.1246"
                    height="93.3478"
                    fill="white"
                    transform="translate(0.290771 1)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
            <div>
              <h3 className='text-[28px] font-medium'>Diagnosis</h3>
              <p className='text-[23px] font-light md:max-w-[300px]'>receive rapid and accurate diagnosis assistance for more patients</p>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-2'>
        <VideoPlayer/>
      </div>
      <div>
        <Product/>
        <Partner/>
      </div>
      <div className='my-[50px]'>
      <Release/>
      </div>
      <CTA/>
    </div>
  );
};

export default Section1;
