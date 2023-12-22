import { useDrag, useDrop } from 'react-dnd'
import { ItemTypes } from './ItemTypes.js'
import useAxiosSecure from './../../hooks/useAxiosSecure';
import BgShadow from '../Shared/BgComponents/BgShadow.jsx';
import TaskDetails from '../../pages/Dashboard/Modal/TaskDetails.jsx';
import Swal from 'sweetalert2';


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
        <div ref={drag} className="border p-2  text-left rounded-md" style={{ opacity }}>


            {/* <BgShadow> */}
            <div className='flex items-center justify-between' >
                <TaskDetails task={task} >
                    {task.title}

                    < br />
                    <p className='text-sm  rounded-xl'>Priority: {task.taskPriority}</p>
                    < br />
                    {task.taskDeadLine}
                </TaskDetails>
                <span onClick={() => hadndleDeleteTask(task._id)} className=' btn rounded-full bg-slate-600'>X</span>

            </div>
            {/* </BgShadow> */}


        </div >
    );
};

export default TaskCard;