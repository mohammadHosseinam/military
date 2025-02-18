import React from 'react'
import { useNavigate } from 'react-router-dom';

function SidebarButton({ text, icon , url ,isActive}) {
    const navigate = useNavigate();
    const handleNavigation = (url) => {
        navigate(url);
    };
    return (
        <div className={`flex items-center gap-2 p-2 rounded-lg ${isActive?'bg-blue-100 shadow':'bg-white'} w-full`} onClick={() => handleNavigation(url)}>
            {icon}
            <p className={`text-[16px] ${isActive?'text-blue-700 hover:text-blue-800 active:text-blue-900':'text-neutral-800 hover:text-neutral-700 active:text-neutral-600'}`}>{text}</p>
        </div>)
}

export default SidebarButton