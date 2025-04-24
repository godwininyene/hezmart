"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from 'next/link';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const vendorRegisterSchema = z.object({
  businessName: z.string().min(2, "Must be atleast 2 characters"),
  businessRegNum: z.string()
    .min(6, "Invalid Business Registration Number")
    .regex(emailRegex, {
      message: "Enter a valid business registration number",
    }),
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