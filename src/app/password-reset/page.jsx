"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";


const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const loginSchema = z
  .object({
    email: z.string().min(6, "Invalid email address").regex(emailRegex, {
      message: "Please enter a valid email address",
    }),
})


function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const router = useRouter();
  
  return (
    <form className="bg-white shadow-lg w-[540px] px-15">
      <h1
        className="
        text-3xl text-center font-bold text-[#111111] mt-8 mb-2"
      >
        Password Reset
      </h1>
      <p className="text-base text-[#5A607F] text-center">
        We Will Help You Reset your Password
      </p>
      <div className="mt-10 mb-5">
        <label htmlFor="email" className="text-md text-[#5A607F]">
          Email
        </label>
        <input
          {...register("email")}
          placeholder="Enter Email Address"
          type="email"
          id="email"
          className="w-full py-3 px-4 border-1 border-solid border-[#D9E1EC] placeholder-[#A1A7C4] text-black rounded-lg"
        />
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </div>

      <button
        type="submit"
        className="bg-gradient-to-r from-[#E67002] to-[#992002] text-white text-2xl w-full py-3
          rounded-2xl mt-5 max-w-177 mx-auto block cursor-pointer
          "
      >
        Reset Password
      </button>
      <hr className="text-[#D7DBEC] my-6" />
      <p className="text-[#CE0303] text-center my-6">
        Remembered your Password?
      </p>
      <button
        onClick={() => router.push("/signin")}
        className="cursor-pointer mt-6 w-full mb-12
       border-solid border-1 border-[#D7DBEC] rounded-2xl
      "
      >
        <p
          className="px-4 py-2 text-2xl
        text-transparent bg-clip-text bg-gradient-to-r from-[#E67002] to-[#992002]"
        >
          Back to Sign in
        </p>
      </button>
    </form>
  );
}

export default Login;
