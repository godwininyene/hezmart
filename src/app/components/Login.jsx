"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import googleIcon from '../../../public/google-icon.svg';
import facebookIcon from '../../../public/facebook-icon.svg';
import Image from 'next/image';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const loginSchema = z
  .object({
    email: z.string().min(6, "Invalid email address").regex(emailRegex, {
      message: "Please enter a valid email address",
    }),
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
    keepSignedIn: z.boolean().optional(),
  });

function Login() {

  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: zodResolver(loginSchema),
  });

  return (
    <form className="bg-white shadow-lg w-[540px] px-15">
      <h1
        className="
        text-3xl text-center font-bold
      text-transparent bg-clip-text bg-gradient-to-r from-[#E67002] to-[#992002] mt-8 mb-2"
      >
        Sign In
      </h1>
      <p className="text-base text-[#5A607F] text-center">
        New to Our Product?{" "}
        <span
          className="!font-semibold 
        !text-transparent !bg-clip-text !bg-gradient-to-r from-[#E67002] to-[#992002]"
        >
          Create Account
        </span>
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
      <div className="my-5">
        <label htmlFor="password" className="text-md text-[#5A607F]">
          Password
        </label>
        <input
          type="password"
          {...register("password")}
          id="password"
          name="password"
          placeholder="Enter Password"
          className="w-full py-3 px-4 border-1 border-solid border-[#D9E1EC] placeholder-[#A1A7C4] text-black rounded-lg"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
      </div>
      <div className="flex gap-x-2 items-center">
        <input
          type="checkbox"
          {...register("keepSignedIn")}
          className="accent-orange"
        />
        <label htmlFor="keepSignedIn" className="text-[#5A607F]">
          Keep me signed in
        </label>
      </div>
      <button
        type="submit"
        className="bg-gradient-to-r from-[#E67002] to-[#992002] text-white text-2xl w-full py-3
          rounded-2xl mt-5 max-w-177 mx-auto block cursor-pointer
          "
      >
        Sign in
      </button>
      <p className="text-[#CE0303] text-center my-6">Forgot your password?</p>
      <hr className="text-[#D7DBEC] my-6" />
      <p className="text-center text-[#5A607F] mb-9">Or sign in using:</p>
      
      <button className="text-base text-[#3567A6] items-center flex justify-center gap-x-4 mx-auto
        bg-white border-1 border-solid border-[#D7DBEC] my-6 py-3 w-full rounded-sm
      ">
        <Image src={googleIcon} alt="googleIcon" />
        Continue with Google
      </button>
      <button className="text-base text-[#3567A6] items-center flex justify-center gap-x-4 mx-auto
        bg-white border-1 border-solid border-[#D7DBEC] mb-12 py-3 w-full rounded-sm
      ">
        <Image src={facebookIcon} alt="facebookIcon" />
        Continue with Facebook
      </button>
    </form>
  );
}

export default Login