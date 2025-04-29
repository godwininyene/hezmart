import React from 'react'
import appliancesDark from '../../../public/appliances-dark.svg';
import phoneDark from '../../../public/phone-dark.svg';
import homeDark from '../../../public/home-dark.svg';
import electronicsDark from '../../../public/electronics-dark.svg';
import fashionDark from '../../../public/fashion-dark.svg';
import babyDark from '../../../public/baby-dark.svg';
import gamingDark from '../../../public/gaming-dark.svg';
import foodDark from '../../../public/food-dark.svg';
import healthDark from '../../../public/health-dark.svg';
import othersDark from '../../../public/others-dark.svg';
import Image from 'next/image';
import { MdChevronRight } from "react-icons/md";
const asideData = [
  {
    id: 1,
    text: "Appliances",
    img: appliancesDark,
  },
  {
    id: 2,
    text: "Phones and Tech",
    img: phoneDark,
  },
  {
    id: 3,
    text: "Home & Office",
    img: homeDark,
  },
  {
    id: 4,
    text: "Electronics",
    img: electronicsDark,
  },
  {
    id: 5,
    text: "Fashion",
    img: fashionDark,
  },
  {
    id: 6,
    text: "Baby Products",
    img: babyDark,
  },
  {
    id: 7,
    text: "Gaming",
    img: gamingDark
  },
  {
    id: 8,
    text: "Food",
    img: foodDark,
  },
  {
    id: 9,
    text: "Healthcare",
    img: healthDark,
  },
  {
    id: 10,
    text: "Others",
    img: othersDark
  }
]

function Aside() {
  return (
    <div className='hidden lg:flex lg:flex-col col-span-3 row-span-12 pr-6'>
      {
        asideData.map(({id, text, img}) => {
          return (
            <div key={id} className='flex justify-between my-3 items-center
            
            '>
              <div className='flex gap-x-3 items-center'>
                <Image src={img} alt={text} width={30} height={30} />
                <small>{text}</small>
              </div>
              <MdChevronRight />
          </div>
          )
        })
      }
    </div>
  )
}

export default Aside