import { FcShipped } from "react-icons/fc";
import useTasksData from "../../../hooks/useTasksData";
import SideBar from "../SideBar";
import Loading from './../../../hooks/Animation/Loading/Loading';
import { useEffect, useState } from "react";

import TodoColum from "../../../Components/Tasks/TodoColum";
import { useMediaQuery } from "react-responsive";

const TaskData = () => {
    const { data, isPending, refetch } = useTasksData()
    const [isSideBarOpen, setSideBar] = useState(true)
    const [todoData, setTodoData] = useState([])
    const [ongoingData, setOngoing] = useState([])
    const [doneData, setDoneData] = useState([])
    const isSmallScreen = useMediaQuery({ query: '(max-width:600px)' })


    useEffect(() => {


        const todoResult = data?.filter(task => (task.status === "Todo"))

        setTodoData(todoResult);
        refetch()
        const onGoingResult = data?.filter(task => (task.status === "Ongoing"))

        setOngoing(onGoingResult);
        refetch()
        const doneResult = data?.filter(task => (task.status === "Done"))

        setDoneData(doneResult);
        refetch()
    }, [data, refetch])


    useEffect(() => {
        if (isSmallScreen) {
            setSideBar(false)
        } else {
            setSideBar(true)
        }
    }, [isSmallScreen])

    useEffect(() => {
        refetch()
    }, [refetch, data])

    if (isPending) {
        return <><Loading /></>
    }





    return (
        <div className="bg-slate-900">
            <div className={isSideBarOpen ?
                "ml-72 py-5 grid grid-cols-1 md:grid-cols-3"

                : "p-5 grid grid-cols-1 md:grid-cols-3 "} >

                {/* TODO  */}
                <div>
                    <p className='font-semibold flex  py-4 sm:ml-7 md:ml-0 items-center gap-2 tracking-widest md:tracking-[.2em] text-white' >
                        Todo ({todoData?.length})
                    </p>
                    <TodoColum refetch={refetch} columnStatus={"Todo"} data={todoData} />
                </div>
                <div>
                    <p className='font-semibold flex py-4 sm:ml-7 md:ml-0 items-center gap-2 tracking-widest md:tracking-[.2em] text-white' >
                        Ongoing ({ongoingData?.length})
                    </p>
                    <TodoColum refetch={refetch} columnStatus={"Ongoing"} data={ongoingData} />
                </div>
                <div>
                    <p className='font-semibold flex py-4 sm:ml-7 md:ml-0 items-center gap-2 tracking-widest md:tracking-[.2em] text-white' >
                        Completed ({doneData?.length})
                    </p>
                    <TodoColum refetch={refetch} columnStatus={"Done"} data={doneData} />
                </div>

            </div>



            <SideBar isSideBarOpen={isSideBarOpen} />

            {isSideBarOpen ? <><button className='text-sm  btn btn-outline flex items-center gap-4 ml-5 z-50 fixed mb-5 bottom-0 ' onClick={() => setSideBar(false)}> <FcShipped /> Hide Sidebar</button></>
                : <> <button className='text-sm flex btn btn-outline  items-center gap-4 ml-5 fixed mb-5 bottom-0 ' onClick={() => setSideBar(true)}> <FcShipped /> Show Sidebar</button></>}
        </div>
    );
};

export default TaskData;