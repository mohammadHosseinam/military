import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { handleNavigation, isActive,  } from '../../utilities/sidebarUtils';
import DangerButton from '../../components/DangerButton';
import SidebarButton from '../../components/SidebarButton';
import Logo from "../../../public/images/logo.png";
import HomeIcon from '../../../public/icons/homeIcon';
import LabIcon from '../../../public/icons/labIcon';
import InfoIcon from '../../../public/icons/InfoIcon';
import WebIcon from '../../../public/icons/webIcon';
import SeenIcon from '../../../public/icons/seenIcon';
import SearchIcon from '../../../public/icons/searchIcon';
import ExitIcon from '../../../public/icons/exitIcon';

function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className='px-8 py-6 max-w-[325px] flex flex-col h-full bg-white shadow'>
            <img src={Logo} className='mx-auto' alt="mali plus logo" width="168" />
            <div className='overflow-auto scrollbar-hide h-full flex flex-col border-t mt-4 border-neutral-200'>
                <div className='flex flex-col gap-4 mt-8 grow '>
                    <SidebarButton
                        text="صفحه اصلی"
                        icon={<HomeIcon className={isActive(location, "/dashboard") ? "fill-blue-600" : "fill-neutral-600"}/>}
                        url="/dashboard"
                        isActive={isActive(location, "/dashboard")}
                        onClick={() => handleNavigation(navigate, "/dashboard")}/>

                    <SidebarButton
                        text="افزودن آزمایشگاه"
                        icon={<LabIcon className={isActive(location, "/add-lab") ? "fill-blue-600" : "fill-neutral-600"}/>}
                        url="/add-lab"
                        isActive={isActive(location, "/add-lab")}
                        onClick={() => handleNavigation(navigate, "/add-lab")}/>

                    <SidebarButton
                        text="دریافت اطلاعات از صفحات"
                        icon={<InfoIcon className={isActive(location, "/static-data") ? "fill-blue-600" : "fill-neutral-600"}/>}
                        url="/static-data"
                        isActive={isActive(location, "/static-data")}
                        onClick={() => handleNavigation(navigate, "/static-data")}/>
                    <SidebarButton
                        text="دریافت اطلاعات از صفحات پویا"
                        icon={<WebIcon className={isActive(location, "/dynamic-data") ? "fill-blue-600" : "fill-neutral-600"}/>}
                        url="/dynamic-data"
                        isActive={isActive(location, "/dynamic-data")}
                        onClick={() => handleNavigation(navigate, "/dynamic-data")}/>
                    <SidebarButton
                        text="مشاهده گزارشات"
                        icon={<SeenIcon className={isActive(location, "/seen-report") ? "fill-blue-600" : "fill-neutral-600"}/>}
                        url="/seen-report"
                        isActive={isActive(location, "/seen-report")}
                        onClick={() => handleNavigation(navigate, "/seen-report")}/>
                    <SidebarButton
                        text="رفتن به موتور جستجو"
                        icon={<SearchIcon className={isActive(location, "/") ? "fill-blue-600" : "fill-neutral-600"}/>}
                        url="/"
                        isActive={isActive(location, "/")}
                        onClick={() => handleNavigation(navigate, "/")}/>
                </div>
                <div className='flex-shrink-0 mt-5'>
                    <DangerButton
                        text="خروج از حساب کاربری"
                        icon={<ExitIcon />}
                        onClick={() => console.log("exit")}
                    />
                </div>

            </div>

        </div>
    );
}

export default Sidebar;