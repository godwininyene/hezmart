"use client"
import React from 'react';
import Image from 'next/image';
import logo from '../../../public/favicon.svg';
import facebook from '../../../public/facebook.svg';
import instagram from '../../../public/instagram.svg';
import twitter from '../../../public/twitter.svg';
import Link from 'next/link';
import callIcon from '../../../public/call-icon.svg';
import message from '../../../public/message.svg';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const newsLetterSchema = z.object({
  email: z.string().regex(emailRegex, {
    message: "Must be a valid email"
  })
})

const onSubmit = (data) => {
  console.log("Form submitted:", data);
};
function Footer() {
  
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(newsLetterSchema)
  })

  return (
    <div className='max-w-[1440px] w-screen'>
      <footer className="lg:px-20 lg:py-6 p-4 mt-15 bg-[#FCF4ED]">
        <div className="flex justify-between">
          <Image src={logo} alt="logo" />
          <div className="flex items-center w-29 justify-between">
            <Link href="/">
              <Image src={facebook} width={30} height={30} />
            </Link>
            <Link href="/">
              <Image src={instagram} width={30} height={30} />
            </Link>
            <Link href="/">
              <Image src={twitter} width={30} height={30} />
            </Link>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
          <div>
            <p className="text-[#111827] text-sm">Do You Need Help ?</p>
            <div className="flex gap-x-4 mt-8">
              <Image src={callIcon} alt="call-icon" width={28} height={28} />
              <div className="flex flex-col">
                <small className="text-[#111827]">
                  Monday-Friday: 08am-9pm
                </small>
                <h6 className="text-xl font-semibold text-[#111827]">
                  +234 901345502
                </h6>
              </div>
            </div>
            <div className="flex gap-x-4 mt-8">
              <Image src={message} alt="call-icon" width={28} height={28} />
              <div className="flex flex-col">
                <small className="text-[#111827]">
                  Need help with your order?
                </small>
                <h6 className="text-lg font-semibold text-[#111827]">
                  Herztmart@gmail.com
                </h6>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mt-5">
              <h5 className="text-xl font-bold text-[#111827]">
                Join our newsletter
              </h5>
              <p className="text-[10px] text-[#6B7280] mt-2">
                Register now to get latest updates on promotions &
                coupons.Don&apos;t worry, we not spam!
              </p>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex max-w-80 mt-5"
            >
              <input
                register={"...email"}
                type="email"
                placeholder="Your Email"
                className="py-2 px-5 bg-white w-2/3"
              />
              <button className="text-white w-1/3 rounded-r-sm bg-gradient-to-r from-[#E67002] to-[#992002] py-3">
                <Link href="/">Subscribe</Link>
              </button>
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </form>
            <small className="text-[#6B7280] text-xs">
              By subscribing you agree to our&nbsp;
              <Link
                href="/"
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#E67002] to-[#992002]"
              >
                Terms & Conditions and Privacy
              </Link>
            </small>
          </div>
          <h4 className="text-[#737373] text-lg mt-5 mb-25">Privacy Policy</h4>
        </div>
      </footer>
      <div className="py-6 flex justify-center bg-[#EF821D]">
        <h3 className="text-2xl text-white">&copy; {new Date().getFullYear()} Hezmart</h3>
      </div>
    </div>
  );
}

export default Footer
