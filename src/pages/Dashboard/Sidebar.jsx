import React, { useState } from 'react';
import { FcHome, FcShipped } from 'react-icons/fc';
import useTasksData from '../../hooks/useTasksData';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { FaSignOutAlt } from 'react-icons/fa';
import { BsListTask } from 'react-icons/bs';

const SideBar = ({ isSideBarOpen }) => {
    const { data } = useTasksData()
    const { logOut } = useAuth()




    return (
        <div>
            <div className={
                isSideBarOpen ?
                    "min-w-[261px]   bg-white dark:bg-[#2b2c37]  fixed top-[72px] h-screen  items-center left-0 z-0"
                    : ` `
            }>

                {isSideBarOpen && <>
                    <div className='space-y-3 mr-4'>
                        <div className='bg-white pl-6 flex items-center gap-2 dark:bg-[#2d72cb] w-full py-2 rounded-r-xl'>
                            <BsListTask /> Total Task ({data?.length})
                        </div>
                        <div className='bg-white pl-6 dark:bg-[#2d72cb] w-full py-2 rounded-r-xl'>
                            <Link to='/'>
                                <span className='flex items-center text-white gap-2'> <FcHome />  Home</span>
                            </Link>
                        </div>
                        <div className='bg-white pr-10   left-5 pl-6 dark:bg-[#2d72cb]  py-2 rounded-xl'>

                            <span type='button' onClick={() => logOut()} className='flex items-center cursor-pointer text-white gap-2'> <FaSignOutAlt />  Logout</span>

                        </div>
                    </div>
                </>}


            </div>

        </div >
    );
};

export default SideBar;