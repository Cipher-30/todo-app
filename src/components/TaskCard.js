import React, { useEffect, useRef, useState } from 'react'
import { CiMenuKebab } from "react-icons/ci";
import { GiAlarmClock } from "react-icons/gi";
import { dateDiff, dateFormatConverter } from '../utils/miniFunction';
import TaskCardMenu from './TaskCardMenu';


const TaskCard = ({ task }) => { 

  const { taskName, taskDescription, creationTime, timeToAccomplish, taskCategory, taskId, markDone  } = task;


  const [showMore, setShowMore] = useState(false);
  const [showMenu, setShowMenu]  = useState(false);
  const menuRef = useRef(null);




  useEffect(  ( ) => { 
     function handleClickOutside (e) {
         //MENUREF HAS SOMETHING && MENUREF NOT EQUAL TO E.TARGET(U CLICKED OUTSIDE MENUREF)
      if( menuRef.current && !menuRef.current.contains(e.target))
      {
        setShowMenu(false);
      }
    }
     //ADD EVENT-LISTERNER TO DOCUMENT FOR MOUSEDOWN
    document.addEventListener( "mousedown" , handleClickOutside );

    return () =>
    {
      document.removeEventListener('mousedown', handleClickOutside);
    }
   }, [menuRef])



  return (

    <section className={`' px-4 py-4   rounded-lg   border border-white ' ${markDone ? "line-through scale-90 " : " "}`}>


      <div className='w-full flex flex-wrap  justify-between'>
        <h1 className={`'font-semibold text-xl' ${markDone ? "line-through" : " "}`}>{taskName} </h1>
        <h1 ><span className='font-thin'>Today </span>{creationTime} </h1>
      </div>


      <div className='w-full flex flex-col  gap-2'>

        <h1 className='font-thin w-[95%] '>
          { showMore ?
           (<> {taskDescription} <span className='font-bold cursor-pointer italic'  onClick={() => setShowMore(false)}> ShowLess</span> </>)
            : (<> {taskDescription.slice(0, 47)}<span  className='font-bold cursor-pointer italic' onClick={() => setShowMore(true)}> ShowMore</span> </>)  }
        </h1>


        <h1 className='flex flex-wrap items-center gap-2'>
          <GiAlarmClock size={20} /> {dateFormatConverter(timeToAccomplish, 1)}
          <span>{dateFormatConverter(timeToAccomplish, 0)} .</span>
          <span className='font-thin '>in {dateDiff(timeToAccomplish)} days </span>

          <span className='relative text-white ml-auto p-2  border border-transparent hover:border-white rounded-full hover:bg-[rgba(255,254,254,0.94)] hover:text-black transition-all duration-250 cursor-pointer ' onClick={ (e) =>{ setShowMenu(true);
          }}><CiMenuKebab size={30}  />
          { showMenu && (<div
            ref={menuRef}
            className='absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg p-2 z-10'
          >
            <TaskCardMenu cardId={taskId}  setShowMenu={setShowMenu} markDone={ markDone}/>
          </div>) }</span>
        </h1>

        <h1 className=' w-[8rem] text-center border-2 border-white px-4 py-2 rounded-lg '>{taskCategory}</h1>

      </div>



    </section>


  )



}

export default TaskCard