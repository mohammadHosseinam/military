import React from 'react'
import logo from "/images/logo.png"
function Header() {
  return (
    <div className='w-full bg-white px-20 py-6 flex justify-between items-center'>
        <div className='flex gap-3'>
            <a className='text-base text-neutral-800 font-semibold' href="/dashboard">صفحه اصلی</a>
            <a className='text-base text-neutral-800 font-semibold' href="/">موتور جستجو</a>
        </div>
        <img src={logo} alt="logo"/>
        <button className='text-white bg-blue-700 py-2 px-6 rounded-3xl'>پنل</button>
    </div>
  )
}

export default Header