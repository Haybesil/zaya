import React from 'react';
import { HiArrowNarrowRight } from "react-icons/hi";


export default function Product() {
  const cards = [
    {
      image: '/images/microscope.jpeg',
      title: 'ZayaAI Telepathology Dx',
      text: 'Zaya Telepathology Dx enables easy remote access, second opinion diagnosis and collaboration, regardless of where the participants are. Pathologists or researchers can access images from anywhere, at any time, helping them improve diagnosis quality and patient outcomes.',
    },
    {
      image: '/images/AI.jpeg',
      title: 'ZayaAI Dx',
      text: 'ZayaAI Dx provides intelligent viewing and selection of areas with high density of tumoral cells displaying the results of image analysis in different magnifications and enables the user to move in different x-y-z locations.',
    },
    {
      image: '/images/doctorMicroscope.jpeg',
      title: 'ZayaAI Pathology LIS',
      text: 'ZayaAI’s all-in-one pathology LIS (Laboratory Information Management System) allows you to streamline an array of lab operations, increase efficiency, and speed up your research outcomes, saving you time and money',
    },
  ];
  return (
    <div>
      <h2 className="text-[50px] md:text-[90px] font-light pt-10 pl-6 ">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-y-0 md:gap-6 p-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-[30px] shadow-lg bg-[#c6d1de] flex flex-col hover:shadow-xl transition-shadow pb-3"
          >
            <div className="overflow-hidden rounded-t-[30px] w-full">
              <img
                src={card.image}
                alt={`Card ${index + 1}`}
                className="object-cover transform transition-transform duration-300"
              />
            </div>
            <h3 className="pt-4 pl-6 text-lg font-medium text-gray-700">
              {card.title}
            </h3>
            <p className="pt-2 pl-6 pb-2 text-[16px] font-medium text-gray-700">
              {card.text}
            </p>
            <div className='flex justify-end pr-5'>
              <button className='flex gap-2 items-center text-[18px] font-medium transform transition-transform duration-300 hover:scale-110 text-[rgba(0,0,0,0.8)]'>Read More <HiArrowNarrowRight /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
