import Link from 'next/link'
import React from 'react'

const header = () => {
  return (
    <div  className="flex flex-col text-center font-semibold justify-center bg-[#b0c8e9] p-4">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
        Learning Data Fetching Methods In Nextjs
      </h1>
      <div  className="flex justify-center gap-5 mt-5">
      <Link href={"/"}>
          Home
        </Link>
      </div >
    </div>
  )
}

export default header
