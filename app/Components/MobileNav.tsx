"use client";
import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import burgerIcon from "../../public/Vector.svg";
import avater from "../../public/avater.svg";
import logo from "../../public/logo.svg";
import home from "../../public/home.svg";
import orders from "../../public/orders.svg";
import repeat from "../../public/repeat.svg";
import people from "../../public/bi_people.svg";
import drop from "../../public/drop.svg";
import box from "../../public/package.svg"
import discount from "../../public/discount.svg"
import report from "../../public/report.svg"


import Image from "next/image";

const overlayLeft = " transition ease-in-out translate-x-[0%] duration-500";
const overlayRight = " transition ease-in-out translate-x-[-100%] duration-700";

const MobileNav = () => {
  const [active, setActive] = useState(false);
  const [toggleDropDown, setToggleDropDown] = useState(true);

  useEffect(() => {
    if (active) {
      document.body.style.position = "relative";
      document.body.style.overflow = "hidden";
      document.body.style.width = "100%";
      document.body.style.height = "100vh";
    }

    return () => {
      document.body.style.position = "";
      document.body.style.overflow = "";
      document.body.style.width = "";
      document.body.style.height = "";
    };
  }, [active]);

  return (
    <div className="lg:hidden">
      {" "}
      <nav
        className={`absolute top-0 left-0 w-full h-screen overflow-hidden z-10 max-w-lg bg-white py-8 md:py-12 px-4 md:px-10 overflow-y-scroll${
          active ? overlayLeft : overlayRight
        }`}
      >
        <div className="flex justify-between items-center">
          <button
            onClick={() => {
              setActive(!active);
            }}
          >
            <Image src={burgerIcon} width={30} height={30} alt="burger icon" />
          </button>

          <Image src={logo} width={100} height={100} alt="logo icon" />
        </div>
        <ul className="capitalize w-3/4 mx-auto flex flex-col gap-1  mt-4 ">
          <li className="py-2">
            <Link
              href={"/"}
              onClick={() => setActive(false)}
              className="flex gap-2 items-center"
            >
              <Image src={home} alt="home" width={30} height={30} />
              home
            </Link>
          </li>
          <li className="py-2">
            <Link
              href={"/orders"}
              onClick={() => setActive(false)}
              className="flex gap-2 items-center"
            >
              <Image src={orders} alt="orders" width={30} height={30} />
              orders
            </Link>
          </li>
          <li className="py-2">
            <Link
              href={"/subscription"}
              onClick={() => setActive(false)}
              className="flex gap-2 items-center"
            >
              <Image src={repeat} alt="repeat" width={30} height={30} />
              subscription
            </Link>
          </li>
          <li className="py-2">
            <Link
              href={"/customers"}
              onClick={() => setActive(false)}
              className="flex gap-2 items-center"
            >
              <Image src={people} alt="people" width={30} height={30} />
              customer
            </Link>
          </li>
          <li className="py-2">
            <div
              onClick={() => setToggleDropDown(!toggleDropDown)}
              
              className="flex gap-2 items-center mb-1"
            >
              
              <Image src={box} alt="box" width={30} height={30} />

              <span>products</span>
              <Image src={drop} width={20} height={20} alt="dropdown icon" className={`ml-auto ${toggleDropDown ? 'rotate-180' : ''}`}/>
            </div>
            <ul
              className={`${
                toggleDropDown ? "block" : "hidden"
              } animate-dropdown origin-top flex flex-col gap-1`}
            >
              <li className="py-2 pl-10 bg-grey-1 rounded-lg">
                <Link href={"/"} onClick={() => setActive(false)}>
                All products
                </Link>
                </li>
              <li className="py-2 pl-10">categories</li>
              <li className="py-2 pl-10">attributes</li>
              <li className="py-2 pl-10">gift cards</li>
              <li className="py-2 pl-10">purchase links</li>
            </ul>
          </li>
          <li className="py-2">
            <Link href={"/discount"} onClick={() => setActive(false)} className="flex gap-2">
              <Image src={discount} width={30} height={30} alt="discount icon" />
              <span>discount</span>
              <Image src={drop} width={20} height={20} alt="dropdown icon" className="ml-auto"/>
            </Link>
          </li>
          <li className="py-2">
            <Link href={"/reporting"} onClick={() => setActive(false)} className="flex gap-2">
            <Image src={report} width={30} height={30} alt="report icon" />

              reporting
            </Link>
          </li>

          <div className="flex items-center justify-between mt-11">
            <div className="flex items-center gap-4">
              <Image src={avater} width={50} height={50} alt="profile image" />
              Oluwafemi
            </div>
            <Image src={drop} width={20} height={20} alt="dropdown icon" />
          </div>
        </ul>
      </nav>
      <div className="flex justify-between py-2">
        <button
          onClick={() => {
            setActive(!active);
          }}
        >
          <Image src={burgerIcon} width={30} height={30} alt="burger icon" />
        </button>
        <div className="flex items-center gap-4">
          <Image src={avater} width={50} height={50} alt="profile image" />
          Oluwafemi
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
