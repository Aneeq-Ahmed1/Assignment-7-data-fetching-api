import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="bg-slate-300 h-screen">
      <div className="text-center justify-center items-center h-screen flex flex-col">
      <h1 className="text-2xl md:text-3xl lg:4xl font-bold ">
          Class Assignment 07 Data Fetching
        </h1>
        <Link
          href={"/clientSide"}
          className="py-3 px-8 bg-blue-600 rounded-md mt-6 hover:scale-95 hover:bg-red-500"
        >
          Client side
        </Link>
        <Link
          href={"/serverSide"}
          className="py-3 px-8 bg-blue-600 rounded-md mt-6 hover:scale-95 hover:bg-red-500"
        >
          Server side
        </Link>
      </div>
    </div>
  )
}

export default page
