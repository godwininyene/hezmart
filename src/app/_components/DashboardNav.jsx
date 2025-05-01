"use client";

import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { CiBellOn } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from 'next/image';
import logo from '../../../public/logo.svg';
import { IoHomeOutline } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoIosPricetag } from "react-icons/io";
import { FaFolder } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { FaRegStar } from "react-icons/fa";
import { AiOutlineShop } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "motion/react";

function DashboardNav() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div>
      <header
        className="bg-[#EF821D] p-4 flex justify-between relative items-center max-w-[1440px]
    lg:px-20 lg:hidden
    "
      >
        <Image src={logo} alt="logo" width={120} height={25} />
        <GiHamburgerMenu
          style={{ width: "30px", height: "30px" }}
          className="cursor-pointer lg:hidden inline"
          onClick={() => setShowNav(!showNav)}
        />
        <AnimatePresence>
          {showNav && (
            <motion.nav
              className="flex flex-col items-center gap-y-6 
        *:text-2xl *:flex *:items-center *:gap-x-3 pt-20 absolute w-full
        right-0 top-0 bg-[#EF821D] h-screen *:text-white
        "
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 0.5,
              }}
              exit={{ width: 0 }}
            >
              <IoClose
                onClick={() => setShowNav(!showNav)}
                className="!text-3xl"
              />
              <div>
                <IoCartOutline />
                Cart
              </div>
              <div>
                <MdOutlineMessage />
                Messages
              </div>
              <div>
                <CiBellOn />
                Notification
              </div>
              <div>
                <IoHomeOutline />
                Dashboard
              </div>
              <div>
                <TfiMenuAlt />
                Orders
              </div>
              <div>
                <IoIosPricetag />
                Products
              </div>
              <div>
                <FaFolder />
                Categories
              </div>
              <div>
                <HiOutlineUsers />
                Customers
              </div>
              <div>
                <TbBrandGoogleAnalytics />
                Reports
              </div>
              <div>
                <FaRegStar />
                Coupons
              </div>
              <div>
                <MdOutlineMessage />
                Inbox
              </div>
              <div>
                <AiOutlineShop />
                Shop
              </div>
              <div>
                <IoSettingsOutline />
                Settings
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
        <nav className="hidden lg:flex">
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
      <header
        className="lg:flex max-w-[1440px] hidden
    "
      >
        <aside className="bg-[#EF821D] p-6 w-[250px] h-[1174px] flex flex-col items-center">
          <Image src={logo} alt="logo" width={135} height={25} />
          <div
            className="mt-10 flex flex-col gap-y-5 
    *:text-xl *:text-white *:flex *:gap-x-3 *:items-center 
    *:py-2 *:px-10 *:rounded-lg 
    *:hover:bg-white *:hover:text-[#EF821D] 
    *:transition-colors *:duration-200 *:cursor-pointer"
          >
            <div>
              <IoHomeOutline />
              Dashboard
            </div>
            <div>
              <TfiMenuAlt />
              Orders
            </div>
            <div>
              <IoIosPricetag />
              Products
            </div>
            <div>
              <FaFolder />
              Categories
            </div>
            <div>
              <HiOutlineUsers />
              Customers
            </div>
            <div>
              <TbBrandGoogleAnalytics />
              Reports
            </div>
            <div>
              <FaRegStar />
              Coupons
            </div>
            <div>
              <MdOutlineMessage />
              Inbox
            </div>
            <div>
              <AiOutlineShop />
              Shop
            </div>
            <div>
              <IoSettingsOutline />
              Settings
            </div>
          </div>
        </aside>
        <nav className='bg-white py-4 px-8 flex w-full items-center h-20 shadow-sm'>
          <div className="relative w-3/5">
            <FaSearch className="absolute top-4 left-4" />
            <input
              type="search"
              name="search"
              placeholder="Search..."
              className="text-black pt-2.5 pl-10 rounded-lg focus:outline-black focus:ring-0"
            />
          </div>
          <div className='w-2/5 *:text-3xl gap-x-6 flex items-center'>
            <IoCartOutline />
            <MdOutlineMessage />
            <CiBellOn />
            <div className='w-12 h-12 border-1 border-solid border-gray-300 rounded-full'>

            </div>
            <p>Name</p>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default DashboardNav