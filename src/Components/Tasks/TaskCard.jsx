import { useDrag, useDrop } from 'react-dnd'
import { ItemTypes } from './ItemTypes.js'
import useAxiosSecure from './../../hooks/useAxiosSecure';
import BgShadow from '../Shared/BgComponents/BgShadow.jsx';
import TaskDetails from '../../pages/Dashboard/Modal/TaskDetails.jsx';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TaskEdit from '../../pages/Dashboard/Modal/TaskEdit.jsx';
import { FcEditImage } from 'react-icons/fc';

const style = {
    border: '1px solid gray',
    backgroundColor: '',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left',
}
const TaskCard = ({ task, refetch }) => {
    const axiosSecure = useAxiosSecure()


    const notify = (msg) => toast(msg);


    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'note',
        item: task,
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult()


            if (item && dropResult) {

                try {

                    if (item)


                        axiosSecure.patch(`/task/${item._id}`, { status: dropResult.status }).then(res => {
                            if (res.data.modifiedCount > 0) {
                                refetch()
                                notify(dropResult.status)
                            }
                        }
                        )




                } catch (error) {
                    console.error('Error updating task status:', error);
                    alert('Error updating task status');
                }
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }))




    const opacity = isDragging ? 0.4 : 1

    const hadndleDeleteTask = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/task/${id}`).then(res => {
                    if (res.data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        refetch()
                    }
                })


            }
        });


    }


    return (
        <div>
            <div ref={drag} className=" hover:shadow-2xl shadow-white   text-left rounded-md" style={{ opacity }}>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="flex justify-between px-5 items-center">

                        <div className='' >
                            <TaskDetails task={task} >

                                <h2 className='text-xl py-2'> {task.title}</h2>
                                <p> Priority: {task.taskPriority}
                                    <br />
                                    {task.taskDeadLine}</p>


                            </TaskDetails>


                        </div>
                        <div className="card-actions items-center justify-end">
                            <TaskEdit data={task} text={<FcEditImage />} />
                            <button onClick={() => hadndleDeleteTask(task._id)} className="block text-white  focus:ring-4 focus:outline-none focus:ring-blue-300
                 font-medium rounded-lg text-sm   text-center dark:focus:ring-blue-800" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>

                        </div>
                    </div>
                </div>


            </div >
            <ToastContainer />
        </div>
    );
};

export default TaskCard;