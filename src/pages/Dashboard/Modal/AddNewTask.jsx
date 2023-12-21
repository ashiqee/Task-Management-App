import { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AddNewTask = ({ text }) => {

    const [isOpenModal, setOpenModal] = useState(false)

    const { register, handleSubmit } = useForm()
    const axiosSecure = useAxiosSecure()



    const onSubmit = async (data) => {

        data.status = "Todo";
        console.log(data);

        await axiosSecure.post('/task', data).then((res) => {
            console.log(res);
        }).catch(error => console.log(error))

    }

    return (

        <>



            <button onClick={() => setOpenModal(true)} data-modal-target="crud-modal" data-modal-toggle="crud-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                {text}
            </button>


            {
                isOpenModal && (
                    <div id="crud-modal" tabIndex={0} aria-hidden="true" className=" overflow-y-auto overflow-x-hidden absolute center top-24 p-24 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                        <div className="relative py-o p-4 w-full max-w-md mx-auto items-center origin-center max-h-full">

                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        Add New Task
                                    </h3>
                                    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                            <path stroke="currentColor" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                        </svg>
                                        <span onClick={() => setOpenModal(false)} className="bg-opacity-50 rounded-lg px-2 text-xl font-bold text-red-700 bg-gray-200">X</span>
                                    </button>
                                </div>

                                <form onSubmit={handleSubmit(onSubmit)} className="p-4 md:p-5">
                                    <div className="grid gap-4 mb-4 grid-cols-2">
                                        <div className="col-span-2">
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Title</label>
                                            <input type="text" {...register("title")} id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type task title" required="" />
                                        </div>

                                        <div className="col-span-2">
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Description</label>
                                            <textarea {...register("description")} id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write task description here"></textarea>
                                        </div>
                                        {/* <div className="col-span-2">
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sub Task</label>
                                            <div>
                                                <input type="text" {...register("subTask")} id="subTask" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type product name" required="" />
                                            </div>
                                        </div> */}
                                        <div className="col-span-2 sm:col-span-1">
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task DeadLine</label>
                                            <input type="date" {...register("taskDeadLine")} id="taskDeadLine" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="$2999" required="" />
                                        </div>
                                        <div className="col-span-2 sm:col-span-1">
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task Priority</label>

                                            <select
                                                {...register("taskPriority")} name="taskPriority" id="taskPriority"
                                                className="select bg-inherit  select-info w-full max-w-xs"
                                                defaultValue="Low"
                                            >
                                                <option disabled >Select Priority</option>
                                                <option className="p-2 text-gray-800" value="Low">Low</option>
                                                <option className="p-1 text-gray-800" value="Moderate">Moderate</option>
                                                <option className="p-1 text-gray-800" value="High">High</option>
                                            </select>
                                        </div>

                                    </div>
                                    <div className="flex gap-5">
                                        <button type="submit" className="text-white btn border-none inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            <svg className="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" ></path></svg>
                                            Add Task
                                        </button>

                                    </div>
                                </form>
                            </div>
                        </div >
                    </div >
                )
            }

        </>
    );
};

export default AddNewTask;