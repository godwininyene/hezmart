"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from './common/InputField';
import SelectField from './common/SelectField';
import Button from './common/Button';
import axios from '../../lib/axios';
import { useRouter } from 'next/navigation';


const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const customerRegisterSchema = z
  .object({
    firstName: z.string().trim().min(2, "Must be at least 2 characters"),
    lastName: z.string().trim().min(2, "Must be at least 2 characters"),
    email: z
      .string()
      .trim()
      .min(1, "Email is required")
      .regex(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Please enter a valid email address"
      ),
    primaryPhone: z
      .string()
      .trim()
      .min(6, "Must be a minimum of 6 characters"),
    secondaryPhone: z
      .string()
      .trim()
      .min(6, "Must be a minimum of 6 characters")
      .optional()
      .or(z.literal("")), // allows an empty string
    primaryAddress: z
      .string()
      .trim()
      .min(6, "Must be a minimum of 6 characters"),
    secondaryAddress: z
      .string()
      .trim()
      .min(6, "Must be a minimum of 6 characters")
      .optional()
      .or(z.literal("")),
    city: z.string().trim().min(1, "It must not be empty"),
    region: z.string().trim().min(1, "It must not be empty"),
    country: z.string().trim().min(1, "It must not be empty"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters long"),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "Passwords do not match",
    path: ["passwordConfirm"],
  });


function CustomerRegister() {
  const router = useRouter();


  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(customerRegisterSchema)
  });


  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/api/v1/users/signup', data);
      
      if (response.data.status === 'success') {
        console.log("User successfully registered");
        // Redirect to email confirmation page
        router.push('/email-confirmation');
      }
    } catch (err) {
      console.log('error ', err)
      if (err.response?.data?.errors) {
        // Handle field-specific validation errors from backend
        const backendErrors = err.response.data.errors;
        // Loop through all backend errors and set them to the appropriate fields
        Object.entries(backendErrors).forEach(([fieldName, errorMessage]) => {
          setError(fieldName, {
            type: 'server',
            message: errorMessage 
          });
        });
      } else if (err.response?.data?.message) {
        // Handle non-field specific error message
        setError('root.serverError', {
          type: 'server',
          message: err.response.data.message
        });
      } else {
        // Handle unexpected errors
        setError('root.serverError', {
          type: 'server',
          message: 'An unexpected error occurred. Please try again.'
        });
        console.log('Unexpected Error:', err);
      }
    }
  };

  return (
    <div className="px-4 mt-9 border-solid border-2 border-gray-200 rounded-lg py-5 max-w-238">
      <form  onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-xl text-[#111111] font-semibold">
          Personal information
        </h1> 
        {/* Display root/server errors */}
         {errors.root?.serverError && (
          <div className="mb-4 p-4 text-red-700 bg-red-100 rounded-lg">
            {errors.root.serverError.message}
          </div>
        )}
        <div className="grid grid-cols-12 grid-rows-12 gap-x-5">
          <div className="my-5 col-span-12 row-span-6 lg:col-span-6 lg:row-span-12">
            <InputField
              label="First Name"
              name="firstName"
              register={register}
              placeholder="Enter First name"
              error={errors.firstName?.message}
            />
          </div>
          <div className="my-5 col-span-12 row-span-6 lg:col-span-6 lg:row-span-12">
            <InputField
              label="Last Name"
              name="lastName"
              register={register}
              placeholder="Enter Last name"
              error={errors.lastName?.message}
            />
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-x-5">
          <div className="my-5 lg:w-1/2">
            <InputField
              label="Phone Number"
              name="primaryPhone"
              register={register}
              placeholder="Enter phone number"
              type="tel"
              error={errors.primaryPhone?.message}
            />
          </div>
          <div className="my-5 lg:w-1/2">
            <InputField
              label="Phone Number 2 (Optional)"
              name="secondaryPhone"
              register={register}
              placeholder="Enter phone number"
              type="tel"
              error={errors.secondaryPhone?.message}
              isRequired={false}
            />
          </div>
        </div>
        
        <div className="my-5">
          <InputField
            label="Email Address"
            name="email"
            register={register}
            placeholder="Enter your email"
            type="email"
            error={errors.email?.message}
          />
        </div>
        
        <div className="my-5">
          <InputField
            label="Primary Address"
            name="primaryAddress"
            register={register}
            placeholder="No 17 Adankolo road, lokogoma, Lokoja, Kogi state."
            as="textarea"
            error={errors.primaryAddress?.message}
          />
        </div>
        
        <div className="my-5">
          <InputField
            label="Secondary Address (Optional)"
            name="secondaryAddress"
            register={register}
            placeholder="No 17 Adankolo road, lokogoma, Lokoja, Kogi state."
            as="textarea"
            error={errors.secondaryAddress?.message}
            isRequired={false}
          />
        </div>
        
        <div className="my-5">
          <InputField
            label="City"
            name="city"
            register={register}
            placeholder="Enter city"
            error={errors.city?.message}
          />
        </div>
        
        <div className="my-5">
          <InputField
            label="Region"
            name="region"
            register={register}
            placeholder="Enter region"
            error={errors.region?.message}
          />
        </div>
        
        <div className="my-5">
          <SelectField
            name="country"
            label="Country"
            register={register}
            options={[
              { value: "us", label: "United States" },
              { value: "ca", label: "Canada" },
              { value: "uk", label: "United Kingdom" }
            ]}
            // defaultValue="us"
            error={errors.country?.message}
          />
        </div>
        
        <div className="my-5">
          <InputField
            label="Password"
            name="password"
            register={register}
            placeholder="Enter password"
            type="password"
            error={errors.password?.message}
          />
        </div>
        
        <div className="my-5">
          <InputField
            label="Confirm Password"
            name="passwordConfirm"
            register={register}
            placeholder="Confirm password"
            type="password"
            error={errors.passwordConfirm?.message}
          />
        </div>
        
        <Button
          type="submit"
          disabled={isSubmitting}
          isLoading={isSubmitting}
          loadingText="Processing..."
        >
          Create Account
        </Button>
      </form>
    </div>
  );
}

export default CustomerRegister;