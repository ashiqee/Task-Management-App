import React, { useState } from 'react';
import { FcShipped } from 'react-icons/fc';

const SideBar = ({ isSideBarOpen }) => {




    return (
        <div>
            <div className={
                isSideBarOpen ?
                    "min-w-[261px]  bg-white dark:bg-[#2b2c37]  fixed top-[72px] h-screen  items-center left-0 z-0"
                    : ` `
            }>

                {isSideBarOpen && <>
                    <div className='bg-white pl-6 dark:bg-[#2b2c37] w-full rounded-xl'>
                        All Task
                    </div>
                </>}


            </div>

        </div>
    );
};

export default SideBar;