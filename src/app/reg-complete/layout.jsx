import React from 'react';

export const metadata = {
  title: "Registration Complete - Hezmart",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RegCompleteLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={'bg-[#F5F6FA]'}
      >
        {children}
      </body>
    </html>
  );
}