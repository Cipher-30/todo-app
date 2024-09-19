import React from 'react'
import { useDispatch, } from 'react-redux';
import { addMarkAsDone, addPinUp, removeTask } from '../utils/sliceStore/taskSlice';

const TaskCardMenu = ({cardId,markDone, setShowMenu, pinUp}) => {

   const dispatch = useDispatch();


   const deleteTask =  () => {
    dispatch( removeTask(cardId));
   }
   
   const markAsDone = () => {
    //  setShowMenu(false);
    dispatch(addMarkAsDone(cardId));
   }


   const pinUpTask = () => {
    // setShowMenu(false);
    dispatch( addPinUp(cardId));
   }

  return (
    <div className= 'text-black '  >
        <ul className='flex flex-col'>
            <li className='hover:bg-blue-300 px-4 py-2' onClick={ () => { markAsDone()}}>{ markDone ? ("Mark As Undone"): ("Mark As done")}</li>
            <li className='hover:bg-blue-300 px-4 py-2' onClick={pinUpTask}>{pinUp ? ("Pin Down") : ("Pin Up")}</li>
            <li  className='hover:bg-blue-300 px-4 py-2'
             onClick={ () => { deleteTask()}}
             >Delete</li>
        </ul>
    </div>
  )
}

export default TaskCardMenu 