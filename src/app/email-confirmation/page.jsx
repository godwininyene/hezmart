"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from 'next/link'
const verifySchema = z.object({
  verify: z
    .number()
    .min(6, "Must be at least 6 characters")
    .max(6, "Must be at most 6 characters"),
});

function Page() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(verifySchema),
  });


  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="bg-[#F5F6FA] flex justify-center items-center w-screen h-screen ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white max-w-135 border-1 border-solid border-[#D9E1EC] shadow-sm
      lg:px-15 py-12 px-4"
      >
        <h1 className="text-2xl text-[#131523] font-bold text-center mb-2">
          Confirm Email
        </h1>
        <p className="text-[#5A607F] text-sm text-center mb-8">
          Check Your Email and Enter Confirmation Code
        </p>
        <label htmlFor="verify-email" className="text-md text-[#5A607F]">
          Confirmation Code
        </label>
        <input
          {...register("verify")}
          className="w-full py-3 px-4 border-1 border-solid border-[#D9E1EC] 
          mb-8
          placeholder-[#A1A7C4] text-black rounded-lg"
          id="verify-email"
          type="text"
          placeholder="Enter Code"
        />
        {errors.verify && (
          <span className="text-red-500">{errors.verify.message}</span>
        )}
        <button
          type="submit"
          className="bg-gradient-to-r from-[#E67002] to-[#992002] text-white text-2xl w-full py-3
          rounded-2xl mt-5 mx-auto block"
        >
          <Link href="/reg-complete">
            Confirm Email
          </Link>
        </button>
        <hr className="text-[#D7DBEC] my-8" />
        <button
          type="submit"
          className="text-white text-2xl w-full py-3 border-1 border-solid border-[#D7DBEC]
          rounded-2xl mt-5 mx-auto block"
        >
          <Link
            href="/"
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#E67002] to-[#992002]"
          >
            Resend Code
          </Link>
        </button>
      </form>
    </div>
  );
}

export default Page;
