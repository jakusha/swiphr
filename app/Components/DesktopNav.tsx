"use client"

import Link from "next/link";
import React, { useState } from "react";

const DesktopNav = () => {
  const [toggleDropDown, setToggleDropDown] = useState(true);
  return (
    <nav className="hidden lg:block w-[20%]">
      <ul>
        <li>
          <Link href={"/"}>home</Link>
        </li>
        <li>
          <Link href={"/orders"}>orders</Link>
        </li>
        <li>
          <Link href={"/subscription"}>subscription</Link>
        </li>
        <li>
          <Link href={"/customers"}>customer</Link>
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
          <Link href={"/discount"}>discount</Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
