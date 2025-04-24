"use client"
import React, { useState } from 'react'
import logoWhite from '../../../public/logo-white.svg';
import Image from 'next/image';
import logo from '../../../public/favicon.svg';
import Searchbar from './Searchbar';
import { useRouter } from "next/navigation";
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
const navItems = [
  {
    id: 1,
    icon: cart,
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

  const router = useRouter();
  return (
    <div className="max-w-[1440px]">
      <div className="bg-[#EF821D] flex items-center px-4 lg:px-20 py-2">
        <p className="text-white lg:text-base text-xs">Sell on Hezmart</p>
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
            className="text-white bg-gradient-to-r rounded-xl px-4 py-2 from-[#E67002] to-[#992002] px-5"
          >
            Signup
          </button>

          <button onClick={() => router.push("/signin")}>
            <div className="p-[2px] rounded-xl bg-gradient-to-r from-[#E67002] to-[#992002]">
              <div className="bg-white rounded-xl px-4">
                <p className="px-4 py-2 text-transparent bg-clip-text bg-gradient-to-r from-[#E67002] to-[#992002]">
                  Login
                </p>
              </div>
            </div>
          </button>
        </div>
        <div className="bg-[#EF821D] p-2">
          <Image src={cart} alt="cart" />
        </div>
      </nav>
      <nav className="px-5 py-4 flex justify-between items-center relative">
        <Image src={logo} alt="logo" />
        <div className="flex gap-x-2">
          <Image src={gradientSearch} alt="search" className="cursor-pointer" />
          <Image
            src={gradientMenu}
            alt="menu"
            className="cursor-pointer"
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
        {showMenu && (
          <div className="pt-11 bg-[#FFC38B] absolute -top-10 left-0 w-[90%] px-4">
            <div className="flex justify-between items-center">
              <h3 className="text-3xl text-[#111111]">Menu</h3>
              <IoClose className="size-8" onClick={() => {setShowMenu(!showMenu)}}/>
            </div>
            {navItems.map(({ id, icon, text, right }) => {
              return (
                <div key={id} className='flex justify-between px-8'>
                  <div className="flex">
                    <Image src={icon} alt="icon" />
                    <p className="text-base text-[#111111]">{text}</p>
                  </div>
                  <div>{right}</div>
                </div>
              );
            })}
          </div>
        )}
      </nav>
    </div>
  );
}

export default LandingNavbar