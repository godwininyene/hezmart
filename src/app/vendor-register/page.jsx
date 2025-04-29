import React from "react";
import { HezmartBreadcrumb } from "../_components/Breadcrumb";
import VendorRegister from "../_components/VendorRegister";
function page() {
  return (
    <div className="max-w-[1440px] w-screen lg:px-20 lg:py-6 p-4">
      <HezmartBreadcrumb href="sell" text="Sell on Hezmart" />
      <VendorRegister />
    </div>
  );
}

export default page;
