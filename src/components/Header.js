import React, { useEffect, useState } from "react";
import { Logo, LogoDark, LogoWhite } from "../assets";

const Header = () => {
  const [header, setHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
  });
  return (
    <header
      className={`${
        header ? "bg-white py-6 shadow-lg" : "bg-transparent py-8"
      } fixed z-50 w-full transition-all duration-300`}
    >
      <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
        <div className="">
          <a
            className={`${
              header ? "text-dark" : "text-white"
            } capitalize font-primary font-semibold text-[18px]`}
            href="/"
          >
            <img src={header ? LogoDark : LogoWhite} alt="" />
            {/* Bain ziani */}
          </a>
        </div>
        <nav
          className={`${
            header ? "text-primary" : " text-white"
          } flex gap-x-4 lg:gap-x-8 font-tertiary tracking-[3px] text-[15px] items-center uppercase`}
        >
          <a href="/">Home</a>
          <a href="">About</a>
          <a href="">Beauty</a>
          <a href="">Book now</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
