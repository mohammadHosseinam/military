import React from 'react'
import TicketIcon from '../../../public/icons/ticke';
import { useDispatch } from 'react-redux';
import { setStep } from '../../store/slices/timeline';


function TimeLine({step , stepsNames }) {
    const dispatch = useDispatch();

    const handleStepChange = (newStep) => {
        console.log(newStep)
        dispatch(setStep(newStep));
    };
    return (
        <div className='flex justify-center gap-4 items-center my-5 mx-12'>
            <div className='flex gap-3 items-center' onClick={() => handleStepChange("1")}>
                <div className={`w-8 h-8 rounded-full ${step >= 1 ? "bg-blue-600" : "bg-blue-200"} text-white text-xl font-medium flex justify-center items-center`}>{step > 1 ? <TicketIcon /> : "۱"}</div>
                <p className={`text-xl font-medium ${step >= 1 ? "text-blue-600" : "text-blue-200"}`}>{stepsNames[0]}</p>
            </div>
            <div className='grow h-0.5 bg-neutral-300'></div>
            <div className='flex gap-3 items-center' onClick={() => handleStepChange("2")}>
                <div className={`w-8 h-8 rounded-full ${step >= 2 ? "bg-blue-600" : "bg-blue-200"} text-white text-xl font-medium flex justify-center items-center`}>{step > 3 ? <TicketIcon /> : "۲"}</div>
                <p className={`text-xl font-medium ${step >= 2 ? "text-blue-600" : "text-blue-200"}`}>{stepsNames[1]}</p>
            </div>
        </div>
    )
}

export default TimeLine