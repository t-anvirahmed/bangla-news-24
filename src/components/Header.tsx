import Image from "next/image";
import React from "react";
import NavLinks from "./NavLinks";
import Link from "next/link";
import UserInfo from "./UserInfo";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", { dateStyle: "full" });
  return (
    <div className="container mx-auto my-4">
      <div className="relative flex min-h-16 w-full items-center justify-between px-2 sm:px-4">
        {/* Logo and Text */}
        <div className="flex items-center justify-center gap-2 md:absolute md:left-1/2 md:-translate-x-1/2">
          <Image
            className="h-10 w-10 shrink-0 sm:h-12 sm:w-12"
            height={50}
            width={50}
            src="/logo.png"
            alt="logo"
          />
          <div>
            <h2 className="whitespace-nowrap text-sm text-red-700 font-light sm:text-3xl">
              BanglaNews24
            </h2>
            <p className="whitespace-nowrap text-xs sm:text-sm">{date}</p>
          </div>
        </div>
        {/* Right-side Buttons */}
        <UserInfo />
      </div>
      <NavLinks />
    </div>
  );
};

export default Header;
