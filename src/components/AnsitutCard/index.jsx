import React from 'react'
import ansituImage from "./../../../public/images/ansituImage.png"

function AnsitutCard() {
    return (
        <div className='flex bg-white mx-auto rounded-2xl'>
            <div className='flex flex-col p-5' dir='ltr'>
                <h4 className='text-2xl font-bold text-neutral-900 mb-3'>U.S. Army Research Institute</h4>
                <p className='text-lg font-semibold text-neutral-700 grow'>U.S. Army Research Institute for the Behavioral and Social Sciences</p>
                <span className='text-base font-light text-neutral-500'>Last updated 2023/10/11</span>
            </div>
            <img className='rounded-2xl' src={ansituImage} alt="Ansitu Image" />
        </div>
    )
}

export default AnsitutCard