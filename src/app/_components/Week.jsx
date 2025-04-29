import React from 'react'
import weekOne from '../../../public/weekOne.png';
import weekTwo from "../../../public/weekTwo.png";
import weekThree from "../../../public/weekThree.png";
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';

const weekData = [
  {
    id: 1,
    text: "Fruits for better living",
    img: weekOne,
  },
  {
    id: 2,
    text: "Snacks at discount prices",
    img: weekTwo,
  },
  {
    id: 3,
    text: "Snacks at discount prices",
    img: weekThree
  },
];

function Week() {
  return (
    <div className="grid grid-cols-12 grid-rows-12 gap-x-4 gap-y-5 px-2 lg:p-0 mt-5">
      {weekData.map(({ id, text, img }) => {
        return (
          <div key={id}
            className="col-span-12 row-span-4 lg:col-span-4 lg:row-span-12 
            bg-gradient-to-r from-[#E67002] to-[#992002] rounded-2xl
              py-10 px-6 relative lg:mx-0 mx-auto lg:max-w-full max-w-[320px]
            "
          >
            <div className="flex flex-col gap-y-3 items-start max-w-50">
              <small className="text-white text-base relative z-20">Weekly offer</small>
              <p className="text-white text-xl font-semibold relative z-20">{text}</p>
              <p className="text-white text-base relative z-20">Shop from us</p>
              <button className="bg-white px-4 py-2 flex gap-x-3 items-center z-20
              relative
              rounded-full">
                Shop Now
                <FaArrowRight />
              </button>
            </div>
            <Image src={img} alt={text}
            className="absolute right-0 bottom-0 lg:w-50 w-40 z-5"/>
          </div>
        );
      })}
    </div>
  );
}

export default Week