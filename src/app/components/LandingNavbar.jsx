"use client"
import React, { useState } from 'react'
import logoWhite from '../../../public/logo-white.svg';
import Image from 'next/image';
import logo from '../../../public/favicon.svg';
import Searchbar from './Searchbar';
import { useRouter } from "next/navigation";
import cartDark from '../../../public/cart-dark.svg';
import cart from '../../../public/mynaui_cart.svg';
import gradientSearch from '../../../public/gradient-search.svg';
import gradientMenu from '../../../public/gradient-menu.svg';
import { IoClose } from "react-icons/io5";
import shop from '../../../public/solar_shop-outline.svg';
import notification from '../../../public/mynaui_notification-solid.svg'
import profile from '../../../public/radix-icons_avatar.svg';
import appliances from '../../../public/iconoir_washing-machine.svg';
import { MdChevronRight } from "react-icons/md";
import phone from '../../../public/phone.svg';
import home from '../../../public/home.svg';
import electronics from '../../../public/electronics.svg';
import fashion from '../../../public/fashion.svg';
import baby from '../../../public/baby.svg';
import gaming from '../../../public/gaming.svg';
import food from '../../../public/food.svg';
import { motion, AnimatePresence } from 'motion/react';
const navItems = [
  {
    id: 1,
    icon: cartDark,
    text: "Cart",
    right: 4,
  },
  {
    id: 2,
    icon: shop,
    text: "Shops",
    right: "",
  },
  {
    id: 3,
    icon: notification,
    text: "Notification",
    right: "",
  },
  {
    id: 4,
    icon: profile,
    text: "Profile",
    right: "",
  },
  {
    id: 5,
    icon: appliances,
    text: "Appliances",
    right: <MdChevronRight />,
  },
  {
    id: 6,
    icon: phone,
    text: "Phones and tech",
    right: <MdChevronRight />,
  },
  {
    id: 7,
    icon: home,
    text: "Home & Office",
    right: <MdChevronRight />,
  },
  {
    id: 8,
    icon: electronics,
    text: "Electronics",
    right: <MdChevronRight />,
  },
  {
    id: 9,
    icon: fashion,
    text: "Fashion",
    right: <MdChevronRight />,
  },
  {
    id: 10,
    icon: baby,
    text: "Baby Products",
    right: <MdChevronRight />,
  },
  {
    id: 11,
    icon: gaming,
    text: "Gaming",
    right: <MdChevronRight />,
  },
  {
    id: 12,
    icon: food,
    text: "Food",
    right: <MdChevronRight />,
  },
];


const width="w-3/5"
function LandingNavbar() {

  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const router = useRouter();
  return (
    <div className="max-w-[1440px]">
      <div className="bg-[#EF821D] flex items-center px-4 lg:px-20 py-2">
        <button
          onClick={() => router.push("vendor-register")}
          className="text-white lg:text-base text-xs cursor-pointer"
        >
          Sell on Hezmart
        </button>
        <Image
          src={logoWhite}
          alt="logo-white"
          width={76}
          className="mx-auto -translate-x-8"
        />
      </div>
      <nav className="hidden lg:px-20 lg:p-4 lg:flex lg:items-center lg:justify-between">
        <Image src={logo} alt="logo" />
        <Searchbar width={width} />
        <div className="flex gap-3">
          <button
            onClick={() => router.push("/customer-register")}
            className="text-white bg-gradient-to-r rounded-xl px-4 py-2 from-[#E67002] to-[#992002] px-5
            cursor-pointer
            "
          >
            Signup
          </button>

          <button
            onClick={() => router.push("/signin")}
            className="cursor-pointer"
          >
            <div className="p-[2px] rounded-xl bg-gradient-to-r from-[#E67002] to-[#992002]">
              <div className="bg-white rounded-xl px-4">
                <p className="px-4 py-2 text-transparent bg-clip-text bg-gradient-to-r from-[#E67002] to-[#992002]">
                  Login
                </p>
              </div>
            </div>
          </button>
        </div>
        <div className="bg-[#EF821D] p-2 ml-4">
          <Image src={cart} alt="cart" />
        </div>
      </nav>
      <nav
        className="px-5 py-4 flex justify-between items-center relative
      lg:hidden
      "
      >
        <Image src={logo} alt="logo" />
        <div className="flex gap-x-2">
          <Image
            src={gradientSearch}
            alt="search"
            className="cursor-pointer"
            onClick={() => setShowSearch(!showSearch)}
          />
          <Image
            src={gradientMenu}
            alt="menu"
            className="cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          />

          {showSearch && (
            <div className="absolute mt-4 w-4/5 top-8 right-4 left-4">
              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-2 
                focus:outline-none text-orange-500"
              />

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute bottom-0 left-0 h-0.5 bg-orange-500 w-full"
              />
            </div>
          )}
        </div>
        <AnimatePresence>
          {showMenu && (
            <motion.div
              className="pt-11 bg-[#FFC38B] absolute -top-10 left-0 w-[90%] px-4
          h-screen lg:hidden
          "
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 0.5,
              }}
              exit={{ width: 0 }}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-3xl text-[#111111]">Menu</h3>
                <IoClose
                  className="size-8"
                  onClick={() => {
                    setShowMenu(!showMenu);
                  }}
                />
              </div>
              {navItems.map(({ id, icon, text, right }) => {
                return (
                  <div
                    key={id}
                    className="flex justify-between items-center py-4 px-5 my-6 rounded-lg 
                  transition-colors duration-300 hover:bg-gradient-to-r 
                  hover:from-[#E67002] hover:to-[#992002] active:bg-gradient-to-r 
                  active:from-[#E67002] active:to-[#992002]"
                  >
                    <div className="flex items-center gap-2 cursor-pointer text-[#111111]">
                      <Image src={icon} alt="icon" />
                      <p className="text-base">{text}</p>
                    </div>
                    <div className="cursor-pointer">{right}</div>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}

export default LandingNavbar
