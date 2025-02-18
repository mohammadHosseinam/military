import React from 'react'
import Sidebar from '../../layout/sidebar'

function Dashboard() {
    return (
        <div className='bg-[#F4F5F9] w-screen h-screen flex'>
            <div className='shrink-0'>
                <Sidebar />
            </div>
            <div className='grid grid-cols-12 gap-8 w-full p-12'>
                <div className='bg-[url("/images/DynamicPages.png")] bg-cover bg-no-repeat bg-center h-72 col-span-6 flex flex-col justify-center items-center gap-2 rounded-2xl'>
                    <span className='text-6xl font-bold text-white'>404</span>
                    <p className='text-3xl font-bold text-white'>{"  صفحه اطلاعات پویا"}</p>
                </div>
                <div className='bg-[url("/images/labs.png")] bg-cover bg-no-repeat bg-center h-72 col-span-6 flex flex-col justify-center items-center gap-2 rounded-2xl'>
                    <span className='text-6xl font-bold text-white'>150</span>
                    <p className='text-3xl font-bold text-white'>{"آزمایشگاه ثبت شده"}</p>
                </div>
                <div className='bg-[url("/images/recavery.png")] bg-cover bg-no-repeat bg-center h-72 col-span-6 flex flex-col justify-center items-center gap-2 rounded-2xl'>
                    <span className='text-6xl font-bold text-white'>۱۴۰۲/۰۸/۱۲</span>
                    <p className='text-3xl font-bold text-white'>{"آخرین زمان بازیابی اطلاعات"}</p>
                </div>
                <div className='bg-[url("/images/pagesImages.png")] bg-cover bg-no-repeat bg-center h-72 col-span-6 flex flex-col justify-center items-center gap-2 rounded-2xl'>
                    <span className='text-6xl font-bold text-white'>530</span>
                    <p className='text-3xl font-bold text-white'>{"صفحه شاخص گذاری شده"}</p>
                </div>

            </div>
        </div>
    )
}

export default Dashboard