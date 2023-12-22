import React from 'react';
import { FcPlus, FcSerialTasks } from 'react-icons/fc';
import useAuth from '../../hooks/useAuth';
import AddNewTask from './Modal/AddNewTask';
import { BsFillGridFill } from 'react-icons/bs';
const NavbarDashboard = () => {
    const { user, logOut } = useAuth()
    return (
        <div className='flex items-center  bg-white dark:bg-[#2b2c37] justify-between'>
            <div className="flex gap-2 p-5 text-2xl font-bold uppercase  items-center"> <BsFillGridFill size={24} /> <h2>TASK AM Dashboard</h2></div>
            <div className='flex gap-2 mr-10'>
                {/* <button className='btn bg-primary text-white px-10 rounded-3xl'><FcPlus /> Add New Task</button> */}
                <AddNewTask text={'Add New Task'} />
                <div className=''>

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-16 rounded-full">
                                <img alt="Tailwind CSS Navbar component" src={user.photoURL} />
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    {user.displayName}

                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a onClick={() => logOut()}>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NavbarDashboard;