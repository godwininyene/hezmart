"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from 'next/link';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const vendorRegisterSchema = z
  .object({
    firstName: z.string().min(2, "Must be atleast 2 characters"),
    lastName: z.string().min(2, "Must be atleast 2 characters"),
    email: z.string().min(6, "Invalid email address").regex(emailRegex, {
      message: "Please enter a valid email address",
    }),
    primaryPhone: z.string().min(6, "Must be a minimum of 6 characters"),
    secondaryPhone: z.string().min(6, "Must be a minimum of 6 characters"),
    primaryAddress: z.string().min(6, "Must be a minimum of 6 characters"),
    secondaryAddress: z.string().min(6, "Must be a minimum of 6 characters"),
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

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
    businessName: z.string().min(2, "Must be atleast 2 characters"),
    businessCategoryId: z
      .number()
      .min(1, "Invalid Business Registration Number"),
    image: z
      .any()
      .refine((file) => file?.length === 1, {
        message: "Image is required",
      })
      .refine((file) => file?.[0]?.type?.startsWith("image/"), {
        message: "Only image files are allowed",
      })
      .refine(
        (file) =>
          ["image/jpeg", "image/png", "image/webp", "image/svg+xml"].includes(
            file?.[0]?.type
          ),
        {
          message: "Only JPG, PNG, WEBP, or SVG files are allowed",
        }
      )
      .refine((file) => file?.[0]?.size <= 5 * 1024 * 1024, {
        message: "Image must be less than 5MB",
      }),
    nin: z
      .number()
      .min(11, "Must be a minimum of 11 characters")
      .max(11, "Must be a maximum of 11 characters"),
  });

function VendorRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(vendorRegisterSchema),
  });
  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="px-4 mt-9 border-solid border-2 border-gray-200 rounded-lg py-5 max-w-238">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-xl text-[#111111] font-semibold">
          Business information
        </h1>
        <input type="hidden" value="vendor" name="role" />
        <div className="my-5">
          <label htmlFor="firstName" className="text-md text-[#5A607F]">
            First Name
          </label>
          <input
            {...register("firstName")}
            placeholder="Emmanuel"
            type="text"
            name="firstName"
            id="firstName"
            className="w-full py-3 px-4 border-1 border-solid border-[#D9E1EC] placeholder-[#A1A7C4] text-black rounded-lg"
          />
          {errors.firstName && (
            <span className="text-red-500">{errors.firstName.message}</span>
          )}
        </div>
        <div className="my-5">
          <label htmlFor="lastName" className="text-md text-[#5A607F]">
            Last Name
          </label>
          <input
            {...register("lastName")}
            placeholder="Abraham"
            name="lastName"
            type="text"
            id="lastName"
            className="w-full py-3 px-4 border-1 border-solid border-[#D9E1EC] placeholder-[#A1A7C4] text-black rounded-lg"
          />
          {errors.lastName && (
            <span className="text-red-500">{errors.lastName.message}</span>
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
            <label htmlFor="primaryPhone" className="text-md text-[#5A607F]">
              Phone Number
            </label>
            <input
              {...register("primaryPhone")}
              placeholder="+2340915257910"
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
              placeholder="+2340915257910"
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
          <label htmlFor="primaryAddress" className="text-md text-[#5A607F]">
            Primary Address
          </label>
          <textarea
            {...register("primaryAddress")}
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
          <label className="text-md text-[#5A607F]">Password</label>
          <input
            type="password"
            {...register("password")}
            name="password"
            className="w-full py-3 px-4 border-1 border-solid border-[#D9E1EC] placeholder-[#A1A7C4] text-black rounded-lg"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>

        <div className="my-5">
          <label className="text-md text-[#5A607F]">Confirm Password</label>
          <input
            type="password"
            {...register("confirmPassword")}
            name="confirmPassword"
            className="w-full py-3 px-4 border-1 border-solid border-[#D9E1EC] placeholder-[#A1A7C4] text-black rounded-lg"
          />
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}
        </div>
        <div className="my-5">
          <label htmlFor="businessName" className="text-md text-[#5A607F]">
            Business Name
          </label>
          <input
            {...register("businessName")}
            placeholder="Emmanuel Abraham"
            type="text"
            id="fullName"
            className="w-full py-3 px-4 border-1 border-solid border-[#D9E1EC] placeholder-[#A1A7C4] text-black rounded-lg"
          />
          {errors.businessName && (
            <span className="text-red-500">{errors.businessName.message}</span>
          )}
        </div>
        <div className="my-5">
          <label htmlFor="businessRegNum">
            <div className="flex justify-between items-center">
              <p className="text-sm text-[#5A607F]">
                Business Registration Number
              </p>
              <p className="text-[10px] text-[#5A607F]">If Applicable</p>
            </div>
          </label>
          <input
            {...register("businessRegNum")}
            placeholder="emmanuel@gmail.com"
            type="email"
            id="email"
            className="w-full py-3 px-4 border-1 border-solid border-[#D9E1EC] placeholder-[#A1A7C4] text-black rounded-lg"
          />
          {errors.businessRegNum && (
            <span className="text-red-500">
              {errors.businessRegNum.message}
            </span>
          )}
        </div>
        <div>
          <p className="text-sm text-[#5A607F] mb-2">Upload Business Image</p>
          <label
            htmlFor="image-input"
            className="w-48 h-48 border-gray-400 bg-[#E3E3E3] flex justify-center items-center 
            text-gray-500 text-3xl font-semibold cursor-pointer rounded-2xl border-solid border-1
            border-gray-400
            "
          >
            +
            <input
              type="file"
              id="image-input"
              {...register("image")}
              className="hidden"
              accept="image/png, image/jpg, image/jpeg, image/webp, image/svg+xml"
            />
          </label>
          {errors.image && (
            <span className="text-red-500">{errors.image.message}</span>
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

export default VendorRegister;