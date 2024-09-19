import React from 'react'
import { useSelector } from 'react-redux';
import TaskCard from './TaskCard';


const TaskPage = () => {

    const task = useSelector((store) => (store.task.taskInfo));


    return (
        <>
            {
                 task.map((eachTask) => {
                    return (<TaskCard key={eachTask.taskId} task={eachTask} />)
                })
            }

        </>
    
    )
}

export default TaskPage