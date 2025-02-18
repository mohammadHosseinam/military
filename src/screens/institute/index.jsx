import React from 'react'
import Header from '../../layout/header'
import Footer from '../../layout/footer'
import ansituImage from "../../../public/images/ansituImage.png"
function Institute() {
    return (
        <div className='bg-[#F4F5F9]'>
            <Header />
            <div className='grid grid-cols-12 mx-20 gap-6 my-9'>
                <div className='bg-white p-5 rounded-2xl col-span-3 '>
                    <img className='rounded-2xl w-full' src={ansituImage} alt="Ansitu Image" />
                </div>
                <div className='flex bg-white flex-col justify-center items-center p-5 col-span-9' dir='ltr'>
                    <h1 className='text-2xl font-bold text-neutral-900 mb-3'>U.S. Army Research Institute</h1>
                    <p className='text-lg font-semibold text-neutral-700 grow'>U.S. Army Research Institute for the Behavioral and Social Sciences</p>
                    <span className='text-base font-light text-neutral-500'>Last updated 2023/10/11</span>
                </div>
            </div>
            <div className='flex flex-col gap-4 mb-6'>
                <div className='mx-20'>
                    <h2 className='text-blue-700 text-2xl font-bold mb-3'>حوضه کاری</h2>
                    <p className='bg-white p-4 rounded-2xl text-justify text-base font-semibold'>دپارتمان ارتش - موسسه تحقیقاتی ارتش ایالات متحده برای علوم رفتاری و اجتماعی (U.S. Army Research Institute for the Behavioral and Social Sciences) در حوزه تحقیقات و توسعه فناوری‌های مرتبط با علوم رفتاری و اجتماعی، با هدف بهبود عملکرد و افزایش بهره‌وری نیروهای ارتش، فعالیت می‌نماید. این موسسه به تحلیل رفتارها و اجتماعی‌ها در محیط‌های نظامی متمرکز شده و تحقیقاتی گسترده در زمینه‌های روان‌شناسی، اجتماع‌شناسی، آموزش و توسعه فردی انجام می‌دهد. هدف نهایی این موسسه بهبود استراتژی‌ها و فرآیندهای نظامی با استفاده از درک عمیقتر از علوم رفتاری و اجتماعی است.</p>
                </div>
                <div className='mx-20'>
                    <h2 className='text-blue-700 text-2xl font-bold mb-3'>راه های ارتباطی</h2>
                    <ul className='flex flex-col gap-4'>
                        <li className='bg-white p-4 w-fit rounded-2xl text-justify text-base font-semibold flex gap-2'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C7.8 2 4 5.22 4 10.2C4 13.38 6.45 17.12 11.34 21.43C11.72 21.76 12.29 21.76 12.67 21.43C17.55 17.12 20 13.38 20 10.2C20 5.22 16.2 2 12 2ZM12 12C10.9 12 10 11.1 10 10C10 8.9 10.9 8 12 8C13.1 8 14 8.9 14 10C14 11.1 13.1 12 12 12Z" fill="black" fill-opacity="0.54" />
                            </svg>
                            <a href="#"> U.S. Army Research Institute For The Behavioral And Social Sciences 6000 6th St, Fort Belvoir</a>
                        </li>
                        <li className='bg-white p-4 w-fit rounded-2xl text-justify text-base font-semibold flex gap-2'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM19.6 8.25L12.53 12.67C12.21 12.87 11.79 12.87 11.47 12.67L4.4 8.25C4.15 8.09 4 7.82 4 7.53C4 6.86 4.73 6.46 5.3 6.81L12 11L18.7 6.81C19.27 6.46 20 6.86 20 7.53C20 7.82 19.85 8.09 19.6 8.25Z" fill="black" fill-opacity="0.54" />
                            </svg>
                            <a href="#">usarmy.pentagon.hqda-ari.mesg.ari@mail.mil</a>
                        </li>
                        <li className='bg-white p-4 w-fit rounded-2xl text-justify text-base font-semibold flex gap-2'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.23 15.26L16.69 14.97C16.08 14.9 15.48 15.11 15.05 15.54L13.21 17.38C10.38 15.94 8.06004 13.63 6.62004 10.79L8.47004 8.94001C8.90004 8.51001 9.11004 7.91001 9.04004 7.30001L8.75004 4.78001C8.63004 3.77001 7.78004 3.01001 6.76004 3.01001H5.03004C3.90004 3.01001 2.96004 3.95001 3.03004 5.08001C3.56004 13.62 10.39 20.44 18.92 20.97C20.05 21.04 20.99 20.1 20.99 18.97V17.24C21 16.23 20.24 15.38 19.23 15.26Z" fill="black" fill-opacity="0.54" />
                            </svg>
                            <a href="#">22060-5609 (703) 545-2339 Ext. 865</a>
                        </li>
                    </ul>
                </div>
                <div className='mx-20'>
                    <h2 className='text-blue-700 text-2xl font-bold mb-3'>اطلاعات متا تگ</h2>
                    <ul className='flex flex-col gap-4'>
                        <li className='bg-white p-4 w-fit rounded-2xl text-justify text-base font-semibold'><a href="#">More than metal: The story behind the challenge coin that went viral</a></li>
                        <li className='bg-white p-4 w-fit rounded-2xl text-justify text-base font-semibold'><a href="#">Black Hawk pilot eyes unique trade after flying career</a></li>
                        <li className='bg-white p-4 w-fit rounded-2xl text-justify text-base font-semibold'><a href="#">Sky Soldier makes history as first active-duty female Army sniper</a></li>
                        <li className='bg-white p-4 w-fit rounded-2xl text-justify text-base font-semibold'><a href="#">Native name inspires strength, pride for Virginia Guardsman</a></li>
                        <li className='bg-white p-4 w-fit rounded-2xl text-justify text-base font-semibold'><a href="#">Army 'drill sergeant machine' redefines 'Be All You Can Be'</a></li>
                    </ul>
                </div>
                <div className='mx-20'>
                    <h2 className='text-blue-700 text-2xl font-bold mb-3'>اطلاعات متا title</h2>
                    <ul className='flex flex-col gap-4'>
                        <li className='bg-white p-4 w-fit rounded-2xl text-justify text-base font-semibold'><a href="#">More than metal: The story behind the challenge coin that went viral</a></li>
                        <li className='bg-white p-4 w-fit rounded-2xl text-justify text-base font-semibold'><a href="#">Black Hawk pilot eyes unique trade after flying career</a></li>
                        <li className='bg-white p-4 w-fit rounded-2xl text-justify text-base font-semibold'><a href="#">Sky Soldier makes history as first active-duty female Army sniper</a></li>
                        <li className='bg-white p-4 w-fit rounded-2xl text-justify text-base font-semibold'><a href="#">Native name inspires strength, pride for Virginia Guardsman</a></li>
                        <li className='bg-white p-4 w-fit rounded-2xl text-justify text-base font-semibold'><a href="#">Army 'drill sergeant machine' redefines 'Be All You Can Be'</a></li>
                    </ul>
                </div>
                <div className='mx-20'>
                    <h2 className='text-blue-700 text-2xl font-bold mb-3'>آخرین مقالات انتشار یافته</h2>
                    <ul className='flex flex-col gap-4'>
                        <li className='bg-white p-4 w-fit rounded-2xl text-justify text-base font-semibold'><a href="#">More than metal: The story behind the challenge coin that went viral</a></li>
                        <li className='bg-white p-4 w-fit rounded-2xl text-justify text-base font-semibold'><a href="#">Black Hawk pilot eyes unique trade after flying career</a></li>
                        <li className='bg-white p-4 w-fit rounded-2xl text-justify text-base font-semibold'><a href="#">Sky Soldier makes history as first active-duty female Army sniper</a></li>
                        <li className='bg-white p-4 w-fit rounded-2xl text-justify text-base font-semibold'><a href="#">Native name inspires strength, pride for Virginia Guardsman</a></li>
                        <li className='bg-white p-4 w-fit rounded-2xl text-justify text-base font-semibold'><a href="#">Army 'drill sergeant machine' redefines 'Be All You Can Be'</a></li>
                    </ul>
                </div>
                <div className='mx-20'>
                    <h2 className='text-blue-700 text-2xl font-bold mb-3'>آخرین   اخبار</h2>
                    <ul className='flex flex-col gap-4'>
                        <li className='bg-white p-4 w-fit rounded-2xl text-justify text-base font-semibold'><a href="#">More than metal: The story behind the challenge coin that went viral</a></li>
                        <li className='bg-white p-4 w-fit rounded-2xl text-justify text-base font-semibold'><a href="#">Black Hawk pilot eyes unique trade after flying career</a></li>
                        <li className='bg-white p-4 w-fit rounded-2xl text-justify text-base font-semibold'><a href="#">Sky Soldier makes history as first active-duty female Army sniper</a></li>
                        <li className='bg-white p-4 w-fit rounded-2xl text-justify text-base font-semibold'><a href="#">Native name inspires strength, pride for Virginia Guardsman</a></li>
                        <li className='bg-white p-4 w-fit rounded-2xl text-justify text-base font-semibold'><a href="#">Army 'drill sergeant machine' redefines 'Be All You Can Be'</a></li>
                    </ul>
                </div>
                <div className='mx-20'>
                    <h2 className='text-blue-700 text-2xl font-bold mb-3'>آدرس وبسایت</h2>
                    <ul dir='ltr' className='bg-white p-4 w-fit rounded-2xl text-justify text-base font-semibold'>
                        <li><a href="#">ari.altess.army.mil</a></li>
                    </ul>
                </div>
                <div className='mx-20'>
                    <h2 className='text-blue-700 text-2xl font-bold mb-3'>آدرس وبسایت</h2>
                    <ul dir='ltr' className='bg-white p-4 w-fit rounded-2xl text-justify text-base font-semibold'>
                        <li>SECRETARY OF THE ARMY Christine Wormuth</li>
                        <li>UNDER SECRETARY OF THE ARMY Hon. Gabe Camarillo</li>
                        <li>CHIEF OF STAFF OF THE ARMY General Randy A. George</li>
                        <li>SERGEANT MAJOR OF THE ARMY Sergeant Major of the Army Michael R. Weimer</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Institute