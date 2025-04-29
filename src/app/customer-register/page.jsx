import React from "react";
import { HezmartBreadcrumb } from "../_components/Breadcrumb";
import CustomerRegister from "../_components/CustomerRegister";
function page() {
  return (
    <div className="max-w-[1440px] w-screen lg:px-20 lg:py-6 p-4">
      <HezmartBreadcrumb href="buy" text="Buy on Hezmart" />
      <CustomerRegister />
    </div>
  );
}

export default page;
