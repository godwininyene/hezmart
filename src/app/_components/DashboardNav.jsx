import React from 'react';
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { CiBellOn } from "react-icons/ci";

function DashboardNav() {
  return (
    <header>
      <Image src={logo} alt="logo" width={150} height={25}/>
      <nav className='hidden lg:flex'>
        <div className="relative">
          <FaSearch className="absolute top-2 left-4" />
          <input type="search" name="search" placeholder="Search..." />
        </div>
        <div>
          <IoCartOutline />
          <MdOutlineMessage />
          <CiBellOn />
        </div>
      </nav>
    </header>
  );
}

export default DashboardNav