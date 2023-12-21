import React, { useState } from 'react';
import { FcShipped } from 'react-icons/fc';

const SideBar = () => {
    const [isSideBarOpen, setSideBar] = useState(true)


    return (
        <div>
            <div className={
                isSideBarOpen ?
                    "min-w-[261px]  bg-white dark:bg-[#2b2c37]  fixed top-[72px] h-screen  items-center left-0 z-20"
                    : ` `
            }>

                {isSideBarOpen && <>
                    <div className='bg-white pl-6 dark:bg-[#2b2c37] w-full rounded-xl'>
                        All Task
                    </div>
                </>}

                {isSideBarOpen ? <><button className='text-sm  btn btn-outline flex items-center gap-4 ml-5 fixed mb-5 bottom-0 ' onClick={() => setSideBar(false)}> <FcShipped /> Hide Sidebar</button></>
                    : <> <button className='text-sm flex btn btn-outline  items-center gap-4 ml-5 fixed mb-5 bottom-0 ' onClick={() => setSideBar(true)}> <FcShipped /> Show Sidebar</button></>}
            </div>

        </div>
    );
};

export default SideBar;