"use client"
import Link from "next/link";
import React from "react";
import { useState } from "react";


const overlayLeft = " transition ease-in-out translate-x-[0%] duration-500";
const overlayRight = " transition ease-in-out translate-x-[-100%] duration-700";

const MobileNav = () => {

  const [active, setActive] = useState(false);
  const [toggleDropDown, setToggleDropDown] = useState(true);

  return (
    <div className="lg:hidden">
      {" "}
      <nav
        className={`absolute top-6 left-0 w-full h-full z-10 max-w-lg bg-blue-300 ${
          active ? overlayLeft : overlayRight
        }`}
      >
        <ul>
        <li>
          <Link href={"/"} onClick={()=> setActive(false)}>home</Link>
        </li>
        <li>
          <Link href={"/orders"} onClick={()=> setActive(false)}>orders</Link>
        </li>
        <li>
          <Link href={"/subscription"} onClick={()=> setActive(false)}>subscription</Link>
        </li>
        <li>
          <Link href={"/customers"} onClick={()=> setActive(false)}>customer</Link>
        </li>
        <li>
          <button onClick={()=> setToggleDropDown(!toggleDropDown)} className="mb-2">products</button> 
          <ul className={`${toggleDropDown ? 'block': 'hidden'} animate-dropdown origin-top`}>
            <li>All products</li>
            <li>categories</li>
            <li>attributes</li>
            <li>gift cards</li>
            <li>purchase links</li>
          </ul>
        </li>
        <li>
          <Link href={"/discount"} onClick={()=> setActive(false)}>discount</Link>
        </li>
        </ul>
      </nav>
      <div className="flex justify-between border-2 border-red-300">
        <button
          onClick={() => {
            setActive(!active);
          }}
        >
          expand
        </button>
        <div>Oluwafemi</div>
      </div>
    </div>
  );
};

export default MobileNav;
