import React from 'react';
import Image from 'next/image';
import mail from '../../../public/mail.svg';
import Link from 'next/link'
function page() {
  return (
    <div className="bg-[#F5F6FA] flex justify-center items-center w-screen h-screen">
      <div
        className="bg-white max-w-135 border-1 border-solid border-[#D9E1EC] shadow-sm
      lg:px-15 py-12 px-4"
      >
        <Image src={mail} width={200} height={200} className="block mx-auto" />
        <h1 className="text-2xl text-[#131523] font-bold text-center mb-2">
          Almost There!
        </h1>
        <p className="text-[#5A607F] text-sm text-center mt-8 mb-8">
          Check your email inbox and confirm your account
        </p>
        <hr className="text-[#D7DBEC] my-8" />
        <p className="text-center text-[#5A607F]">
          Didn&apos;t receive any mail?
        </p>
        <button
          type="submit"
          className="text-white text-2xl w-full py-3 border-1 border-solid border-[#D7DBEC]
          rounded-2xl mt-5 mx-auto block"
        >
          <Link
            href="/"
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#E67002] to-[#992002]"
          >
            Resend Confirmation
          </Link>
        </button>
      </div>
    </div>
  );
}

export default page