import React from 'react'
import Time from './Time';
function SalesHeader() {
  return (
    <header className="py-5 px-5 bg-[#FF4545] flex lg:flex-row 
    flex-col items-center absolute left-0 right-0
    lg:justify-between gap-y-4 mt-10">
      <Time />
      <h1 className='text-3xl text-white'>Weekly Sales</h1>
      <h2 className='text-2xl text-white'>See more</h2>
    </header>
  );
}

export default SalesHeader