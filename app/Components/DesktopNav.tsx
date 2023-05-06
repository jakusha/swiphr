"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import avater from "../../public/avater.svg";
import logo from "../../public/logo.svg";
import home from "../../public/home.svg";
import orders from "../../public/orders.svg";
import repeat from "../../public/repeat.svg";
import people from "../../public/bi_people.svg";
import drop from "../../public/drop.svg";
import box from "../../public/package.svg";
import discount from "../../public/discount.svg";
import report from "../../public/report.svg";

const DesktopNav = () => {
  const [toggleDropDown, setToggleDropDown] = useState(true);
  return (
    <nav className="hidden lg:block h-screen overflow-auto w-[450px] border-r-2 px-8 pb-12 capitalize">
      <Image
        src={logo}
        width={120}
        height={120}
        alt="logo icon"
        className="my-12"
      />

      <ul className="">
        <li className="py-2">
          <Link href={"/"} className="flex gap-2 items-center">
            <Image src={home} alt="home" width={30} height={30} />
            home
          </Link>
        </li>
        <li className="py-2 flex gap-2 items-center">
          <Image src={orders} alt="orders" width={30} height={30} />
          orders
        </li>
        <li className="py-2 flex gap-2 items-center">
          <Image src={repeat} alt="repeat" width={30} height={30} />
          subscription
        </li>
        <li className="py-2 flex gap-2 items-center">
          <Image src={people} alt="people" width={30} height={30} />
          customer
        </li>
        <li className="py-2">
          <div
            onClick={() => setToggleDropDown(!toggleDropDown)}
            className="flex gap-2 items-center mb-1 cursor-pointer"
          >
            <Image src={box} alt="box" width={30} height={30} />

            <span>products</span>
            <Image
              src={drop}
              width={20}
              height={20}
              alt="dropdown icon"
              className={`ml-auto ${toggleDropDown ? "rotate-180" : ""}`}
            />
          </div>
          <ul
            className={`${
              toggleDropDown ? "block" : "hidden"
            } animate-dropdown origin-top flex flex-col gap-1`}
          >
            <li className="py-2 pl-10 bg-grey-1 rounded-lg">All products</li>
            <li className="py-2 pl-10">categories</li>
            <li className="py-2 pl-10">attributes</li>
            <li className="py-2 pl-10">gift cards</li>
            <li className="py-2 pl-10">purchase links</li>
          </ul>
        </li>
        <li className="py-2 flex gap-2">
          <Image src={discount} width={30} height={30} alt="discount icon" />
          <span>discount</span>
          <Image
            src={drop}
            width={20}
            height={20}
            alt="dropdown icon"
            className="ml-auto"
          />
        </li>
        <li className="py-2 flex gap-2">
          <Image src={report} width={30} height={30} alt="report icon" />
          reporting
        </li>

        <div className="flex items-center justify-between mt-20">
          <div className="flex items-center gap-4">
            <Image src={avater} width={50} height={50} alt="profile image" />
            Oluwafemi
          </div>
          <Image src={drop} width={20} height={20} alt="dropdown icon" />
        </div>
      </ul>
    </nav>
  );
};

export default DesktopNav;
