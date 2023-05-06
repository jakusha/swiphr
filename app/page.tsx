"use client";

import Link from "next/link";
import Image from "next/image";
import backBtn from "../public/back-btn.svg";
import box from "../public/package.svg"
import card from "../public/card.svg"
import stack from "../public/stack.svg"
import gift from "../public/gift.svg"
import photocard from "../public/photocard.svg"
import { useState } from "react";


export default function Home() {
  const [activeTab, setActiveTab] = useState(1)
  return (
    <div>
      <Link
        href={"/"}
        className="flex items-center gap-2 p-2 max-w-max bg-grey-1 rounded-2xl mt-8 text-sm
        "
      >
        {" "}
        <Image src={backBtn} alt="back button" height={20} width={20} />
        Back
      </Link>

      <div className="flex justify-between items-center py-5 lg:py-0">
        <h2 className="capitalize text-2xl lg:text-3xl font-semibold">New product</h2>

        <button className="bg-green-1 text-white p-4 rounded-lg text-base capitalize hover:opacity-80">
          Save product
        </button>
      </div>

      <div className="flex gap-4 flex-col lg:flex-row lg:mt-12">
        <div className="flex-1 flex flex-col gap-1">
          <label className="font-semibold" htmlFor="product1">Product name</label>
          <input type="text" className="border-2 p-4 w-full rounded-lg bg-white " id="product1" />
        </div>

        <div className="flex-2 flex flex-col gap-1">
          <label className="font-semibold" htmlFor="product">Product name</label>
          <input
            type="text"
            className="border-2 p-4 w-full rounded-lg bg-white "
            placeholder="Optional"
            id="product"
          />
        </div>
      </div>
      
      <h3 className="mt-8 lg:mt-12 mb-2 text-lg font-semibold ">Type</h3>

      <div className="flex flex-col lg:flex-row gap-4">
        <div className={`border-2 p-4 py-5 rounded-lg cursor-pointer bg-white ${activeTab === 1 ? "border-[#5ECB75]": ''}`} onClick={()=> setActiveTab(1)}>
          <h3 className="flex gap-4 items-center mb-2 font-semibold">
            <Image src={box} height={40} width={40} alt="box"/>
            Physical
          </h3>
          <p className="w-4/5">Item has weight and needs shipping or customer pickup</p>
        </div>

        <div className={`border-2 p-4 py-5 rounded-lg cursor-pointer bg-white ${activeTab === 2 ? "border-[#5ECB75]": ''}`} onClick={()=> setActiveTab(2)}>
          <h3 className="flex gap-4 items-center mb-2 font-semibold">
            <Image src={card} height={40} width={40} alt="card"/>
            Digital
          </h3>
          <p className="w-4/5">Item is delivered digitally or provided as a service</p>
        </div>

        <div className={`border-2 p-4 py-5 rounded-lg cursor-pointer bg-white  ${activeTab === 3 ? "border-[#5ECB75]": ''}`} onClick={()=> setActiveTab(3)}>
          <h3 className="flex gap-4 items-center mb-2 font-semibold">
            <Image src={stack} height={40} width={40} alt="stack"/>
            Bundle
          </h3>
          <p className="w-4/5">Items are grouped into several physical or digital products</p>
        </div>


        <div className={`border-2 p-4 py-5 rounded-lg cursor-pointer bg-white  ${activeTab === 4 ? "border-[#5ECB75]": ''}`} onClick={()=> setActiveTab(4)}>
          <h3 className="flex gap-4 items-center mb-2 font-semibold">
            <Image src={gift} height={40} width={40} alt="gift"/>
            Gift card
          </h3>
          <p className="w-4/5">Generate a unique code for store credit when purchased</p>
        </div>
      </div>
      <h3 className="mt-8 lg:mt-12 mb-2 text-lg font-semibold ">Type</h3>

      <div className="border-2 grid place-content-center py-16 lg:py-24 rounded-lg bg-white">

        <div className="flex flex-col items-center">
          <Image src={photocard} height={40} width={40} alt="photo card"/>
          <span className="font-semibold ">Add Image</span> 
          <span className="text-sm text-slate-400">Drag & drop upload</span>          
        </div>
      </div>
      
      <h3 className="mt-8 lg:mt-12 mb-2 text-lg font-semibold bg-white ">Categories</h3>
      <div className="border-2 p-6 w-full rounded-lg mb-8"></div>

    </div>
  );
}
