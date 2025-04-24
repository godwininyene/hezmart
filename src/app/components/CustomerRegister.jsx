"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from 'next/link';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const customerRegisterSchema = z.object({
  fullName: z.string().min(2, "Must be atleast 2 characters"),
  email: z.string().min(6, "Invalid email address").regex(emailRegex, {
    message: "Please enter a valid email address",
  }),
  phoneNumber: z.string().min(6, "Must be a minimum of 6 characters"),
  phoneNumberTwo: z.string().min(6, "Must be a minimum of 6 characters"),
  nin: z
    .number()
    .min(11, "Must be a minimum of 11 characters")
    .max(11, "Must be a maximum of 11 characters"),
  address: z.string().min(6, "Must be a minimum of 6 characters"),
});

function CustomerRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(customerRegisterSchema),
  });
  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="px-4 mt-9 border-solid border-2 border-gray-200 rounded-lg py-5 max-w-238">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-xl text-[#111111] font-semibold">
          Personal information
        </h1>
        <div className="my-5">
          <label htmlFor="fullName" className="text-md text-[#5A607F]">
            Full Name
          </label>
          <input
            {...register("fullName")}
            placeholder="Emmanuel Abraham"
            type="text"
            id="fullName"
            className="w-full py-3 px-4 border-1 border-solid border-[#D9E1EC] placeholder-[#A1A7C4] text-black rounded-lg"
          />
          {errors.fullName && (
            <span className="text-red-500">{errors.fullName.message}</span>
          )}
        </div>
        <div className="my-5">
          <label htmlFor="email" className="text-md text-[#5A607F]">
            Email
          </label>
          <input
            {...register("email")}
            placeholder="emmanuel@gmail.com"
            type="email"
            id="email"
            className="w-full py-3 px-4 border-1 border-solid border-[#D9E1EC] placeholder-[#A1A7C4] text-black rounded-lg"
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="flex flex-col lg:flex-row gap-x-5">
          <div className="my-5 lg:w-1/2">
            <label htmlFor="telOne" className="text-md text-[#5A607F]">
              Phone Number
            </label>
            <input
              {...register("phoneNumber")}
              placeholder="+2340915257910"
              type="tel"
              id="telOne"
              className="w-full py-3 px-4 border-1 border-solid border-[#D9E1EC] placeholder-[#A1A7C4] text-black rounded-lg"
            />
            {errors.phoneNumber && (
              <span className="text-red-500">{errors.phoneNumber.message}</span>
            )}
          </div>
          <div className="my-5 lg:w-1/2">
            <label htmlFor="telTwo" className="text-md text-[#5A607F]">
              Phone Number 2
            </label>
            <input
              {...register("phoneNumberTwo")}
              placeholder="+2340915257910"
              type="tel"
              id="telTwo"
              className="w-full py-3 px-4 border-1 border-solid border-[#D9E1EC] placeholder-[#A1A7C4] text-black rounded-lg"
            />
            {errors.phoneNumberTwo && (
              <span className="text-red-500">
                {errors.phoneNumberTwo.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col my-5">
          <label htmlFor="nin" className="text-md text-[#5A607F]">
            NIN
          </label>
          <input
            {...register("nin")}
            placeholder="******************"
            type="text"
            id="nin"
            className="w-full py-3 px-4 border-1 border-solid border-[#D9E1EC] placeholder-[#A1A7C4] text-black rounded-lg"
          />
          {errors.nin && (
            <span className="text-red-500">{errors.nin.message}</span>
          )}
        </div>
        <div className="my-5">
          <label htmlFor="address" className="text-md text-[#5A607F]">
            Address
          </label>
          <textarea
            {...register("address")}
            placeholder="No 17 Adankolo road, lokogoma, Lokoja, Kogi state."
            className="w-full py-3 px-4 border-1 border-solid border-[#D9E1EC] placeholder-[#A1A7C4] text-black rounded-lg"
          />
          {errors.address && (
            <span className="text-red-500">{errors.address.message}</span>
          )}
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-[#E67002] to-[#992002] text-white text-2xl w-full py-3
          rounded-2xl mt-5 max-w-177 mx-auto block
          "
        >
          <Link href="/">Complete</Link>
        </button>
      </form>
    </div>
  );
}

export default CustomerRegister;