import React from 'react';

export const metadata = {
  title: "Email confirmation - Hezmart",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function ConfirmEmailLayout({ children }) {
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