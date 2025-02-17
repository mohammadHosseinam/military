import React from 'react'
import logo from "../../../public/images/logo.png"

function Footer() {
  return (
    <div className='flex items-center w-full gap-16 bg-blue-200 px-20 py-8'>
         <img src={logo} alt="logo" />
         <div className='flex gap-6'>
          <a className='text-base text-neutral-800 font-semibold' href="/">صفحه اصلی</a>
          <a className='text-base text-neutral-800 font-semibold' href="/">پنل کاربری</a>
          <a className='text-base text-neutral-800 font-semibold' href="/">موتور جستجو</a>
         </div>
      </div>
  )
}

export default Footer