import { useDrag, useDrop } from 'react-dnd'
import { ItemTypes } from './ItemTypes.js'
import useAxiosSecure from './../../hooks/useAxiosSecure';
import BgShadow from '../Shared/BgComponents/BgShadow.jsx';
import TaskDetails from '../../pages/Dashboard/Modal/TaskDetails.jsx';


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

            // console.log(dropResult);
            if (item && dropResult) {
                // Update task status in MongoDB
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
    return (
        <div ref={drag} className="border p-2  text-left rounded-md" style={{ opacity }}>

            <TaskDetails task={task} >
                <BgShadow>
                    <div >
                        {task.title}
                        < br />
                        <p className='text-sm outline-red-600  rounded-xl'>Priority: {task.taskPriority}</p>
                        < br />
                        {task.taskDeadLine}
                    </div>
                </BgShadow>
            </TaskDetails>

        </div >
    );
};

export default TaskCard;