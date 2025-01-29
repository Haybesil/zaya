import React from 'react';
import Bg from '/images/background.jpg';
import Image1 from '/images/shot-microscope.png';
import { ButtonSolid } from '../common/base/buttons/Button';
import { RiArrowRightSLine } from 'react-icons/ri';

export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflowX: 'hidden',
      }}
      className="relative bg-cover min-h-screen flex items-center"
    >
      <div className="flex justify-center w-full px-4">
        <div className="bg-[rgba(255,255,255,0.8)] md:mt-[280px] px-7 md:px-28 py-10 md:py-16 rounded-tl-[90px] md:rounded-tl-[110px] rounded-tr-[70px] md:rounded-tr-[50px] pb-16 md:pb-32 md:text-left rounded-br-[120px] md-rounded-br-0">
          <h1 className="text-3xl md:text-[80px] max-w-[100%] md:max-w-[800px] font-light leading-tight md:leading-[80px]">
            Enhance the <span className="font-bold">POWER</span> of{' '}
            <span className="font-bold">PATHOLOGISTS</span>
          </h1>
          <p className="text-lg md:text-[30px] font-extralight pt-4 md:pt-6">
            Fast and accurate diagnosis of disease
          </p>
          <div className="flex justify-start">
            <ButtonSolid
              text="Learn More"
              title="Learn More"
              className="mt-6 md:mt-8"
            >
              <RiArrowRightSLine size={20} md:size={25} />
            </ButtonSolid>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[120px] md:bottom-[80px] lg:bottom-[-60px] left-[190px] md:left-[100px] lg:left-auto lg:right-[50px]">
        <img
          src={Image1}
          alt=""
          className="w-[250px] md:w-[350px] lg:w-[500px]"
        />
      </div>
    </section>
  );
}
