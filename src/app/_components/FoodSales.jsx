import React from 'react';

import nutella from '../../../public/nutella.png';
import cornFlakes from '../../../public/corn-flakes.png';
import pizza from '../../../public/pizza.png';
import coconut from '../../../public/coconut.png';
import kitKat from '../../../public/kit-kat.png';
import { CiHeart } from "react-icons/ci";

const pct = 0.56
const foodSalesData = [
  {
    id: 1,
    img: nutella,
    price: 12500,
  },
  {
    id: 2,
    img: cornFlakes,
    price: 10000,
  },
  {
    id: 3,
    img: pizza,
    price: 10500
  },
  {
    id: 4,
    img: coconut,
    price: 4500
  },
  {
    id: 5,
    img: kitKat,
    price: 13000
  },
];

function FoodSales() {
  return (
    <div className='grid grid-cols-12 grid-rows-12 lg:grid-cols-5 mt-60'>
      {
        foodSalesData.map(({id, img, price}) => {
          return (
            <div
              className="col-span-12 row-span-4 lg:col-span-1 lg:row-span-12 relative
            w-48 border-gray-400 border-1 border-solid mx-auto rounded-lg
            "
            >
              <CiHeart className="absolute top-2 left-2" />
              <div className="top-2 left-2 bg-[#FF4545] text-white inline-flex
              justify-center items-center p-3
              ">-56%</div>
            </div>
          );
        })
      }
    </div>
  )
}

export default FoodSales