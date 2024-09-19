import React from 'react'
import { useDispatch, } from 'react-redux';
import { addMarkAsDone, removeTask } from '../utils/sliceStore/taskSlice';

const TaskCardMenu = ({cardId,markDone, setShowMenu}) => {

   const dispatch = useDispatch();


   const deleteTask =  () => {
    dispatch( removeTask(cardId));
   }
   
   const markAsDone = () => {
    dispatch(addMarkAsDone(cardId));
    setShowMenu(false);
   }

  return (
    <div className= 'text-black '  >
        <ul className='flex flex-col'>
            <li className='hover:bg-blue-300 px-4 py-2' onClick={ () => { markAsDone()}}>{ markDone ? ("Mark As Undone"): ("Mark As done")}</li>
            <li className='hover:bg-blue-300 px-4 py-2'>Pin up</li>
            <li  className='hover:bg-blue-300 px-4 py-2'
             onClick={ () => { deleteTask()}}
             >Delete</li>
        </ul>
    </div>
  )
}

export default TaskCardMenu