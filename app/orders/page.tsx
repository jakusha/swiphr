"use client"

import React from 'react'
import Link from 'next/link'
import backBtn from "../../public/back-btn.svg"
import Image from 'next/image'

const Orders = () => {
  return (
    <div>
      
      <Link
        href={"/"}
        className="flex items-center gap-2 p-2 max-w-max bg-grey-1 rounded-lg mt-8
        "
      >
        {" "}
        <Image src={backBtn} alt="back button" height={25} width={25} />
        Back
      </Link>
      
      <h2 className="capitalize text-2xl font-semibold mt-4">Orders</h2></div>
  )
}

export default Orders