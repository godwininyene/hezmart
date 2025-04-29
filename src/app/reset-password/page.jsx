"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

const resetPasswordSchema = z
  .object({
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


function ResetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(resetPasswordSchema),
  });
  const router = useRouter();
  
  return (
    <form className="bg-white shadow-lg w-[540px] px-15">
      <h1
        className="
        text-3xl text-center font-bold text-[#111111] mt-8 mb-2"
      >
        Reset Password
      </h1>
      <p className="text-base text-[#5A607F] text-center">
        We Will Help You Reset your Password
      </p>
      <div className="mt-10 mb-5">
        <label htmlFor="password" className="text-md text-[#5A607F]">
          New Password
        </label>
        <input
          {...register("email")}
          placeholder="New Password"
          type="password"
          id="password"
          className="w-full py-3 px-4 border-1 border-solid border-[#D9E1EC] placeholder-[#A1A7C4] text-black rounded-lg"
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </div>
      <div className="mt-10 mb-5">
        <label htmlFor="confirmPassword" className="text-md text-[#5A607F]">
          Confirm Password
        </label>
        <input
          {...register("email")}
          placeholder="Confirm Password"
          type="password"
          id="confirmPassword"
          className="w-full py-3 px-4 border-1 border-solid border-[#D9E1EC] placeholder-[#A1A7C4] text-black rounded-lg"
        />
        {errors.confirmPassword && (
          <span className="text-red-500">{errors.confirmPassword.message}</span>
        )}
      </div>
      <button
        type="submit"
        className="bg-gradient-to-r from-[#E67002] to-[#992002] text-white text-2xl w-full py-3
          rounded-2xl mt-5 max-w-177 mx-auto block cursor-pointer mb-20
          "
      >
        Submit
      </button>
    </form>
  );
}

export default ResetPassword;
