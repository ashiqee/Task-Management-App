import { useState } from "react";

const TaskDetails = ({ children, task }) => {
    const [openDetail, handleOpenDetails] = useState(false)

    return (
        <div>


            <div onClick={() => handleOpenDetails(true)} data-modal-target="crud-modal" data-modal-toggle="crud-modal" className="block text-white focus:ring-4 focus:outline-none
             focus:ring-blue-300 font-medium rounded-lg text-left text-sm px-5 py-2.5" >
                {children}
            </div>


            {
                openDetail && (
                    <div id="crud-modal" tabIndex={0} aria-hidden="true" className=" overflow-y-auto overflow-x-hidden fixed center top-0 pt-24 p-4 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div className="relative py-o p-4 w-full md:max-w-6xl mx-auto items-center origin-center max-h-full">

                            <div className="relative bg-white  rounded-lg shadow dark:bg-gray-700">

                                <div className="flex items-center  justify-between p-4 md:p-5 border-b rounded-t
                                 dark:border-gray-600">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        Task Details
                                    </h3>

                                    <span className="btn bg-slate-500 border-none" data-modal-toggle="crud-modal">

                                        <span onClick={() => handleOpenDetails(false)} className="bg-opacity-50  rounded-lg px-2 text-xl font-bold text-red-700 ">X</span>
                                    </span>
                                </div>

                                <div className="p-5">

                                    <span className="md:flex  justify-between"><h2 className="text-2xl mb-10"> Task Title:  {task?.title} </h2>
                                        <span>
                                            <h2 className="">Status: {task?.status}</h2>
                                            <h3>Priority: {task?.taskPriority}</h3>
                                            <h3>Deadline: {task?.taskDeadLine}</h3></span>
                                    </span>

                                    <p>Task Description: <br /> {task?.description}</p>
                                </div>


                            </div>
                        </div >
                    </div >
                )
            }
        </div>
    );
};

export default TaskDetails;