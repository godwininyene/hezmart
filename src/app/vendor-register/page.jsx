import React from 'react'
import { HezmartBreadcrumb } from '../components/Breadcrumb'
import VendorRegister from '../components/VendorRegister';
function page() {
  return (
    <div className="max-w-[1440px] w-screen lg:px-20 lg:py-6 p-4">
      <HezmartBreadcrumb />
      <VendorRegister />
    </div>
  );
}

export default page