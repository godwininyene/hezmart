"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from 'next/link';
import axios from '../../lib/axios';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const customerRegisterSchema = z
  .object({
    firstName: z.string().min(2, "Must be atleast 2 characters"),
    lastName: z.string().min(2, "Must be atleast 2 characters"),
    email: z.string().min(6, "Invalid email address").regex(emailRegex, {
      message: "Please enter a valid email address",
    }),
    primaryPhone: z.string().min(6, "Must be a minimum of 6 characters"),
    secondaryPhone: z.string().min(6, "Must be a minimum of 6 characters").optional(),
    primaryAddress: z.string().min(6, "Must be a minimum of 6 characters"),
    secondaryAddress: z.string().min(6, "Must be a minimum of 6 characters").optional(),
    city: z.string().min(1, "It must not be empty"),
    region: z.string().min(1, "It must not be empty"),
    country: z.string().min(1, "It must not be empty"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[^A-Za-z0-9]/,
        "Password must contain at least one special character"
      ),

    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

function CustomerRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(customerRegisterSchema),
  });
  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const response = await axios.post("/api/v1/users/signup", formData);
    console.log(response);
  };

  return (
    <div className="px-4 mt-9 border-solid border-2 border-gray-200 rounded-lg py-5 max-w-238">
      <form 
      
      onSubmit={submit}>
        <h1 className="text-xl text-[#111111] font-semibold">
          Personal information
        </h1>
        <input type="hidden" value="customer" />
        <div className="grid grid-cols-12 grid-rows-12 gap-x-5">
          <div className="my-5 col-span-12 row-span-6 lg:col-span-6 lg:row-span-12">
            <label htmlFor="firstName" className="text-md text-[#5A607F]">
              First Name
            </label>
            <input
              {...register("firstName")}
              placeholder="Enter First name"
              type="text"
              name="firstName"
              id="firstName"
              className="w-full py-3 px-4 border-1 border-solid border-[#D9E1EC] placeholder-[#A1A7C4] text-black rounded-lg"
            />
            {errors.firstName && (
              <span className="text-red-500">{errors.firstName.message}</span>
            )}
          </div>
          <div className="my-5 col-span-12 row-span-6 lg:col-span-6 lg:row-span-12">
            <label htmlFor="lastName" className="text-md text-[#5A607F]">
              Last Name
            </label>
            <input
              {...register("lastName")}
              placeholder="Enter Last name"
              name="lastName"
              type="text"
              id="lastName"
              className="w-full py-3 px-4 border-1 border-solid border-[#D9E1EC] placeholder-[#A1A7C4] text-black rounded-lg"
            />
            {errors.lastName && (
              <span className="text-red-500">{errors.lastName.message}</span>
            )}
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-x-5">
          <div className="my-5 lg:w-1/2">
            <label htmlFor="primaryPhone" className="text-md text-[#5A607F]">
              Phone Number
            </label>
            <input
              {...register("primaryPhone")}
              placeholder="Enter phone number"
              type="tel"
              id="primaryPhone"
              name="primaryPhone"
              className="w-full py-3 px-4 border-1 border-solid border-[#D9E1EC] placeholder-[#A1A7C4] text-black rounded-lg"
            />
            {errors.primaryPhone && (
              <span className="text-red-500">
                {errors.primaryPhone.message}
              </span>
            )}
          </div>
          <div className="my-5 lg:w-1/2">
            <label htmlFor="secondaryPhone" className="text-md text-[#5A607F]">
              Phone Number 2
            </label>
            <input
              {...register("secondaryPhone")}
              placeholder="Enter phone number"
              type="tel"
              name="secondaryPhone"
              id="secondaryPhone"
              className="w-full py-3 px-4 border-1 border-solid border-[#D9E1EC] placeholder-[#A1A7C4] text-black rounded-lg"
            />
            {errors.secondaryPhone && (
              <span className="text-red-500">
                {errors.secondaryPhone.message}
              </span>
            )}
          </div>
        </div>
        <div className="my-5">
          <label htmlFor="email" className="text-md text-[#5A607F]">
            Email Address
          </label>
          <input
            {...register("email")}
            placeholder="Enter your email"
            type="email"
            id="email"
            className="w-full py-3 px-4 border-1 border-solid border-[#D9E1EC] placeholder-[#A1A7C4] text-black rounded-lg"
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="my-5">
          <label htmlFor="primaryAddress" className="text-md text-[#5A607F]">
            Primary Address
          </label>
          <textarea
            {...register("primaryAddress")}
            id="primaryAddress"
            placeholder="No 17 Adankolo road, lokogoma, Lokoja, Kogi state."
            name="primaryAddress"
            className="w-full py-3 px-4 border-1 border-solid border-[#D9E1EC] placeholder-[#A1A7C4] text-black rounded-lg"
          />
          {errors.primaryAddress && (
            <span className="text-red-500">
              {errors.primaryAddress.message}
            </span>
          )}
        </div>
        <div className="my-5">
          <label htmlFor="secondaryAddress" className="text-md text-[#5A607F]">
            Secondary Address
          </label>
          <textarea
            {...register("secondaryAddress")}
            id="secondaryAddress"
            placeholder="No 17 Adankolo road, lokogoma, Lokoja, Kogi state."
            name="secondaryAddress"
            className="w-full py-3 px-4 border-1 border-solid border-[#D9E1EC] placeholder-[#A1A7C4] text-black rounded-lg"
          />
          {errors.secondaryAddress && (
            <span className="text-red-500">
              {errors.secondaryAddress.message}
            </span>
          )}
        </div>
        <div className="my-5">
          <label htmlFor="city" className="text-md text-[#5A607F]">
            City
          </label>
          <input
            {...register("city")}
            type="text"
            id="city"
            name="city"
            placeholder="Enter city"
            className="w-full py-3 px-4 border-1 border-solid border-[#D9E1EC] placeholder-[#A1A7C4] text-black rounded-lg"
          />
        </div>
        <div className="my-5">
          <label htmlFor="region" className="text-md text-[#5A607F]">
            Region
          </label>
          <input
            {...register("region")}
            type="text"
            id="region"
            name="region"
            placeholder="Enter region"
            className="w-full py-3 px-4 border-1 border-solid border-[#D9E1EC] placeholder-[#A1A7C4] text-black rounded-lg"
          />
        </div>
        <div className="my-5">
          <label htmlFor="country" className="text-md text-[#5A607F]">
            Country
          </label>
          <input
            {...register("country")}
            type="text"
            id="country"
            name="country"
            placeholder="Enter country"
            className="w-full py-3 px-4 border-1 border-solid border-[#D9E1EC] placeholder-[#A1A7C4] text-black rounded-lg"
          />
        </div>
        <div className="my-5">
          <label htmlFor="password" className="text-md text-[#5A607F]">
            Password
          </label>
          <input
            type="password"
            {...register("password")}
            id="password"
            name="password"
            placeholder="Enter password"
            className="w-full py-3 px-4 border-1 border-solid border-[#D9E1EC] placeholder-[#A1A7C4] text-black rounded-lg"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>

        <div className="my-5">
          <label htmlFor="passwordConfirm" className="text-md text-[#5A607F]">
            Confirm Password
          </label>
          <input
            type="password"
            {...register("passwordConfirm")}
            id="passwordConfirm"
            name="passwordConfirm"
            placeholder="Confirm password"
            className="w-full py-3 px-4 border-1 border-solid border-[#D9E1EC] placeholder-[#A1A7C4] text-black rounded-lg"
          />
          {errors.passwordConfirm && (
            <p className="text-red-500">{errors.passwordConfirm.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-[#E67002] to-[#992002] text-white text-2xl w-full py-3
          rounded-2xl mt-5 max-w-177 mx-auto block cursor-pointer
          "
        >
          Complete
        </button>
      </form>
    </div>
  );
}

export default CustomerRegister;