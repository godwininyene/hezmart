import React from 'react'
import { HezmartBreadcrumb } from '../components/Breadcrumb'
import CustomerRegister from '../components/CustomerRegister';
function page() {
  return (
    <div className="max-w-[1440px] w-screen lg:px-20 lg:py-6 p-4">
      <HezmartBreadcrumb />
      <CustomerRegister />
    </div>
  );
}

export default page