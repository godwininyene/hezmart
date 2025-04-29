import React from 'react'
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CiSearch } from "react-icons/ci";

const searchSchema = z.object({
  query: z.string().min(1, "Search cannot be empty"),
});

function Searchbar({width}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(searchSchema),
  });

  const onSubmit = (data) => {
    onSearch(data.query);
    reset();
  };
  return (
    <div className={` w-full flex`}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center justify-center space-x-2 w-full"
      >
        <div className="relative w-1/2">
          <input
            {...register("query")}
            type="text"
            placeholder="Search Categories, items or Products here"
            className="w-full px-4 py-2 pl-10 rounded-lg bg-white text-[#667085] border border-gray-700 
            focus:outline-none focus:ring-2 focus:ring-[#992002] outline-none"
          />
          <CiSearch
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#667085]"
            size={20}
          />
          {errors.query && (
            <p className="text-red-500 text-xs mt-1">{errors.query.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg 
          bg-gradient-to-r from-[#E67002] to-[#992002]"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Searchbar