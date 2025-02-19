import React from 'react'
import Sidebar from '../../layout/sidebar'
import TimeLine from '../../components/TimeLine'
import TextField from '../../components/InlineTextField'
import ChecxboxInput from '../../components/CheckBoxInput';
import { useSelector } from 'react-redux';
import PlusIcon from '../../../public/icons/plusIcon';
import SelectOptions from '../../components/SelectOptions';

function DynamicData() {
    const handleTextfieldChange = (field) => (e) => {
        // dispatch(setInvoiceSearchParams({ ...invoiceSearchParams, [field]: e.target.value }));
    };
    const handleCheckboxChange = (e) => {
        // dispatch(addNewItem({ ...addItem, active: e.target.checked }));
    };
    const step = useSelector((state) => state.timeline.step);
    return (
        <div className='bg-[#F4F5F9] w-screen h-screen flex'>
            <div className='shrink-0'>
                <Sidebar />
            </div>
            <div className='grow'>
                <h1 className='text-2xl font-semibold text-blue-600 mx-10 my-6'>افزودن صفحات پویا جدید</h1>
                <TimeLine step={step} stepsNames={["آزمایشگاه جدید", "افزودن تگ ها"]} />
                {step == 1 && (<div className='bg-white p-7 w-2/3 mx-auto mt-10 rounded-2xl flex flex-col gap-8'>
                    <TextField label={"انتخاب آزمایشگاه"} width='' className="min-w-44 grow" value={""} onChange={handleTextfieldChange("buyerId")} />
                    <TextField label={"آدرس صفحه"} width='' className="min-w-44 grow" value={""} onChange={handleTextfieldChange("buyerId")} />
                    <TextField label={"سایر توضیحات ضروری"} width='' className="min-w-44 grow" value={""} onChange={handleTextfieldChange("buyerId")} />
                    <div className='flex gap-8'>
                        <ChecxboxInput text={"بازیابی اطلاعات تگ Meta"} id={"active"} value={""} onChange={handleCheckboxChange} />
                        <ChecxboxInput text={"بازیابی اطلاعات تگ Title"} id={"active"} value={""} onChange={handleCheckboxChange} />
                        <ChecxboxInput text={"بازیابی اطلاعات تگ H۱"} id={"active"} value={""} onChange={handleCheckboxChange} />
                    </div>
                    <div className='flex gap-6'>
                        <SelectOptions options={["روزانه", "هفتگی", "ماهانه"]} selectedOption={""} title="دوره زمان بازیابی" width="" className={""} onChange={()=>console.log('object')} />
                        <SelectOptions options={["روزانه", "هفتگی", "ماهانه"]} selectedOption={""} title="دفعات بازیابی" width=""className={""} onChange={()=>console.log('object')} />
                        <TextField label={"تاریخ شروع بازیابی"} width='' className="min-w-44 grow" value={""} onChange={handleTextfieldChange("buyerId")} />
                    </div>
                    <div className='flex justify-end'>
                        <button className='text-white bg-blue-700 hover:bg-blue-500 active:bg-blue-600 py-2 px-6 rounded-3xl'>مرحله بعد</button>
                    </div>
                </div>)}
                {step == 2 && (<div className='bg-white p-7 w-2/3 mx-auto mt-10 rounded-2xl flex gap-6'>
                    <TextField label={"نام تگ"} width='' className=" grow" value={""} onChange={handleTextfieldChange("buyerId")} />
                    <TextField label={"عنوان کلاس"} width='' className="min-w-44 grow" value={""} onChange={handleTextfieldChange("buyerId")} />
                    <TextField label={"عنوان آیدی"} width='' className="min-w-44 grow" value={""} onChange={handleTextfieldChange("buyerId")} />
                    <div className='shrink-0'>
                        <button className='text-white bg-blue-700 hover:bg-blue-500 active:bg-blue-600 py-2 px-6 rounded-2xl flex gap-2 items-center shadow'>
                            <PlusIcon />
                            <span>افزودن</span>
                        </button>
                    </div>
                </div>)}
            </div>
        </div>
    )
}

export default DynamicData