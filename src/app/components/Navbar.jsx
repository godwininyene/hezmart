"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import logo from '../../../public/favicon.svg';
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import solarShop from '../../../public/solar_shop-outline.svg';
import notification from '../../../public/mynaui_notification-solid.svg';
import avatar from '../../../public/radix-icons_avatar.svg';
import cart  from '../../../public/mynaui_cart.svg';
import { IoClose } from "react-icons/io5";
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import Searchbar from './Searchbar';

function Navbar() {

  const [showNav, setShowNav] = useState(false);
  return (
    <header
      className="flex justify-between items-center bg-[#EF821D] relative
    max-w-[1440px] w-screen lg:px-20 lg:py-6 p-4
    "
    >
      <Image src={logo} alt="logo" />
      <nav className="flex gap-x-4 items-center lg:hidden">
        <CiSearch style={{ width: "30px", height: "30px" }} />
        <GiHamburgerMenu
          style={{ width: "30px", height: "30px" }}
          className="cursor-pointer"
          onClick={() => setShowNav(!showNav)}
        />
      </nav>
      <nav className="w-full hidden lg:flex justify-between items-center relative">
        <Searchbar />
        <div className="flex gap-x-5 items-center justify-self-end">
          <Link href="/">
            <Image src={solarShop} alt="solar_shop" />
          </Link>
          <Link href="/">
            <Image src={notification} alt="notification" />
          </Link>
          <Link href="/">
            <Image src={avatar} alt="avatar" />
          </Link>
          <Link href="/">
            <div className="p-2 bg-gradient-to-r from-[#E67002] to-[#992002] flex">
              <Image src={cart} alt="cart" />4
            </div>
          </Link>
        </div>
      </nav>
      <AnimatePresence>
        {showNav && (
          <motion.div
            className="bg-[#EF821D] flex flex-col items-center absolute top-0 right-0 gap-y-12
        w-full py-20 h-screen lg:hidden"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{
              duration: 0.5,
            }}
            exit={{ width: 0 }}
          >
            <IoClose
              onClick={() => setShowNav(!showNav)}
              style={{ width: "30px", height: "30px" }}
              className="cursor-pointer"
            />
            <Link href="/">
              <Image src={solarShop} alt="solar_shop" />
            </Link>
            <Link href="/">
              <Image src={notification} alt="notification" />
            </Link>
            <Link href="/">
              <Image src={avatar} alt="avatar" />
            </Link>
            <Link href="/">
              <div className="p-2 bg-gradient-to-r from-[#E67002] to-[#992002] flex">
                <Image src={cart} alt="cart" />4
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar