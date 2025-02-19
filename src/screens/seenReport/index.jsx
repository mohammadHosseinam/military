import React from 'react';
import Sidebar from '../../layout/sidebar';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
function SeenReport() {
    const data = [
        { title: 'نمونه سایت ۱', url: 'https://example1.com', status: 'موفق', staticPages: 10, dynamicPages: 5 },
        { title: 'نمونه سایت ۲', url: 'https://example2.com', status: 'ناموفق', staticPages: 7, dynamicPages: 3 },
    ];

    return (
        <div className='bg-[#F4F5F9] w-screen h-screen flex'>
            <div className='shrink-0 hidden md:block'>
                <Sidebar />
            </div>
            <div className='grid grid-cols-12 gap-8 w-full p-12'>
                <h1>مشاهده آزمایشگاه های ثبت شده</h1>
                <div className='col-span-12 relative overflow-x-auto shadow-md sm:rounded-lg bg-white'>
                    <table className='w-full text-sm text-right text-gray-500'>
                        <thead className='text-xs text-gray-700 uppercase bg-gray-100'>
                            <tr>
                                <th scope='col' className='px-6 py-3'>عنوان</th>
                                <th scope='col' className='px-6 py-3'>آدرس اصلی وبسایت</th>
                                <th scope='col' className='px-6 py-3'>آخرین وضعیت</th>
                                <th scope='col' className='px-6 py-3'>تعداد صفحات ثابت</th>
                                <th scope='col' className='px-6 py-3'>تعداد صفحات پویا</th>
                                <th scope='col' className='px-6 py-3'>عملیات</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index} className='bg-white border-b border-neutral-200 hover:bg-gray-50'>
                                    <th scope='row' className='px-6 py-4 font-medium text-gray-900 whitespace-nowra'>
                                        {item.title}
                                    </th>
                                    <td className='px-6 py-4'>
                                        <a href={item.url} target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>
                                            {item.url}
                                        </a>
                                    </td>
                                    <td className='px-6 py-4'>{item.status}</td>
                                    <td className='px-6 py-4'>{item.staticPages}</td>
                                    <td className='px-6 py-4'>{item.dynamicPages}</td>
                                    <td className='px-6 py-4 text-right'>
                                        <button variant='outline'>مشاهده</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default SeenReport;
