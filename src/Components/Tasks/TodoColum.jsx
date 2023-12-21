import { useDrop } from 'react-dnd'
import { ItemTypes } from './ItemTypes.js'

import TaskCard from './TaskCard.jsx';

const style = {

    width: '20rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    color: 'white',
    padding: '1rem',
    textAlign: '',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
}
const TodoColum = ({ data, columnStatus, refetch }) => {



    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: "note",
        drop: () => ({ status: columnStatus }),

        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }))





    // console.log(dropResult.status);
    return (
        <div className='md:h-[calc(100vh-200px)] mx-auto md:mx-0 max-w-sm' ref={drop}  >
            {isOver && canDrop && <p className='text-green-600'>Release to drop</p>}
            <div className=' grid grid-cols-1 md:grid-flow-row gap-2  space-y-2 ' >
                {data?.map((task, i) =>

                    <TaskCard refetch={refetch} key={i} task={task} />




                )}
            </div>

        </div>
    );
};

export default TodoColum;