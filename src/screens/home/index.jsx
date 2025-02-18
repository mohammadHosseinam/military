import React from 'react'
import Header from '../../layout/header'
import Footer from '../../layout/footer'
import AnsitutCard from '../../components/AnsitutCard'

function Home() {
  return (
    <div className='bg-[#F4F5F9] w-full overflow-x-clip'>
      <div className='h-screen flex flex-col'>
        <Header />
        <div className='bg-[url("/public/images/hiroImage.png")] bg-auto bg-no-repeat bg-center grow '>
          <div className='flex justify-center items-center w-full h-full bg-black opacity-75'>
            <h1 className='text-white text-2xl font-bold'>سامانه اطلاعات آزمایشگاه های تحقیقاتی نظامی</h1>
          </div>
        </div>
      </div>
      <div className='flex justify-between px-28 py-8 bg-white'>
        <div className='flex flex-col justify-center items-center'>
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M63.3333 13.3333H16.6667C12.9667 13.3333 10 16.3333 10 20V60C10 63.6666 12.9667 66.6666 16.6667 66.6666H63.3333C67 66.6666 70 63.6666 70 60V20C70 16.3333 67.0333 13.3333 63.3333 13.3333ZM60 60H20C18.1667 60 16.6667 58.5 16.6667 56.6666V26.6666H63.3333V56.6666C63.3333 58.5 61.8333 60 60 60Z" fill="#39BA65" />
          </svg>
          <p className='text-base text-[#39BA65] font-bold w-48 text-center'>پایش روزانه
            آزمایشگاه های تحقیقاتی</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M73.3333 63.3333H6.66668C4.83334 63.3333 3.33334 64.8333 3.33334 66.6667C3.33334 68.5 4.83334 70 6.66668 70H73.3333C75.1667 70 76.6667 68.5 76.6667 66.6667C76.6667 64.8333 75.1667 63.3333 73.3333 63.3333Z" fill="#39BA65" />
            <path d="M13.3333 60H66.6667C70.3334 60 73.3 57 73.3 53.3333L73.3333 16.6667C73.3333 13 70.3334 10 66.6667 10H13.3333C9.66668 10 6.66668 13 6.66668 16.6667V53.3333C6.66668 57 9.66668 60 13.3333 60ZM28.6333 26.8333C32.9 20.6 41.5 20 46.5667 25.1C50.5 29.0333 51.0333 35.1 48.1333 39.6333L53.3333 44.8C54.3 45.7667 54.3 47.3667 53.3333 48.3333C52.3667 49.3 50.7667 49.3 49.8 48.3333L44.6333 43.1667C39.4 46.5 32.1 45.3 28.4 39.4667C25.9667 35.6667 26.1 30.5667 28.6333 26.8333Z" fill="#39BA65" />
            <path d="M38.3333 40C42.0152 40 45 37.0152 45 33.3333C45 29.6514 42.0152 26.6667 38.3333 26.6667C34.6514 26.6667 31.6667 29.6514 31.6667 33.3333C31.6667 37.0152 34.6514 40 38.3333 40Z" fill="#39BA65" />
          </svg>

          <p className='text-base text-[#39BA65] font-bold w-48 text-center'>موتور جستجو
            آزمایشگاه های تحقیقاتی</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M30.6333 21.1667C23.8333 28.8 19.1667 39.7667 18.7333 40.8L11.2 37.5667C9.03334 36.6333 8.5 33.8 10.1667 32.1333L20.2 22.1C21.7667 20.5333 24.0333 19.8333 26.2333 20.2667L30.6333 21.1667ZM35.6 55.0333C36.6 56.0333 38.0667 56.3 39.3333 55.7C43.2 53.9 51.5 49.6667 56.8667 44.3C72.1667 29 72.3 16.5333 71.4 11.2C71.1667 9.86666 70.1 8.8 68.7667 8.56666C63.4333 7.66666 50.9667 7.8 35.6667 23.1C30.3 28.4667 26.1 36.7667 24.2667 40.6333C23.6667 41.9 23.9667 43.4 24.9333 44.3667L35.6 55.0333ZM58.8333 49.3667C51.2 56.1667 40.2333 60.8333 39.2 61.2667L42.4333 68.8C43.3667 70.9667 46.2 71.5 47.8667 69.8333L57.9 59.8C59.4667 58.2333 60.1667 55.9667 59.7333 53.7667L58.8333 49.3667ZM29.8 58.0333C30.4667 61.5667 29.3 64.8333 27.0667 67.0667C24.5 69.6333 16.5333 71.5333 11.3667 72.5333C9.06667 72.9667 7.03334 70.9333 7.46667 68.6333C8.46667 63.4667 10.3333 55.5 12.9333 52.9333C15.1667 50.7 18.4333 49.5333 21.9667 50.2C25.8667 50.9333 29.0667 54.1333 29.8 58.0333ZM43.3333 30C43.3333 26.3333 46.3333 23.3333 50 23.3333C53.6667 23.3333 56.6667 26.3333 56.6667 30C56.6667 33.6667 53.6667 36.6667 50 36.6667C46.3333 36.6667 43.3333 33.6667 43.3333 30Z" fill="#39BA65" />
          </svg>
          <p className='text-base text-[#39BA65] font-bold w-48 text-center'>اطلاعات تحقیقات
            ناتو و آمریکا</p>
        </div>
      </div>
      <div className='flex flex-col w-1/2 mx-auto justify-center items-center pb-6'>
        <div className='flex w-full mb-4 border border-neutral-200 rounded-sm bg-white mt-6'>
          <input className='px-3 py-2 grow' type="text" placeholder='عبارت جستجو ....' />
          <button className='px-6 py-2 bg-blue-700 rounded-sm text-white text-base font-semibold'>جستجو</button>
        </div>
        <div className='flex flex-col gap-4'>
          <AnsitutCard />
          <AnsitutCard />
          <AnsitutCard />
          <AnsitutCard />
          <AnsitutCard />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home