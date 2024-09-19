import React, { useRef } from 'react'
import CategoryOptions from './miniComponents/CategoryOptions';
import SubmitButton from './miniComponents/SubmitButton';
import { currentDate } from '../utils/miniFunction';
import { useDispatch } from 'react-redux';
import { addTask } from '../utils/sliceStore/taskSlice';
import { useNavigate } from 'react-router-dom';



const TaskForm = () => {

    const reftaskName = useRef();
    const reftaskDescription = useRef();
    const reftaskDeadline = useRef();

    let category = "Home" ;

    const navigate = useNavigate();
   
    const dispatch = useDispatch();


    const submitHandler  =  () =>
    {
     const creationTimeValue = currentDate();

     dispatch( addTask({
         taskName: reftaskName.current.value ,
         taskDescription: reftaskDescription.current.value,
         creationTime: creationTimeValue ,
         timeToAccomplish:  reftaskDeadline.current.value,
         taskCategory : category,
         markDone: false,
         pinUp: false,
         
     }));

       navigate("/")

    }

    //To Get Value From Category Options
    const categoryClick = (e) => {
        if( e.target.value !== "modify")
        {
            console.log(e.target.value);
            category = e.target.value;
            
        }
    }

    return (
        
        

          <form className='w-[100%] mt-4 py-10 bg-[rgb(34,34,34)]  sm:w-[50%] flex flex-col  gap-8 mx-auto p-5 border border-gray-600 ' onSubmit={ (e) => { e.preventDefault();  }}>
          <div className='relative   '>
                <label htmlFor="name" className='absolute bg-[rgb(34,34,34)] px-2 left-0 -top-3' >Task</label>
                <input className='w-full  px-4 py-2 bg-transparent rounded border' 
                ref={reftaskName} 
                type='text' 
                id='name' 
                placeholder='Enter Task Name' />
            </div>

            <div className='relative    '>

                <label className='absolute left-0 -top-3 bg-[rgb(34,34,34)] px-2 ' htmlFor="taskDescription">Task Description</label>
                <textarea className='w-full px-4 py-2 rounded-md bg-transparent border border-gray-400' ref={reftaskDescription} type='text' id='taskDescription' placeholder='Enter Task Description' name="taskDescription" rows="5" cols="33" >
                </textarea>

            </div>


            <div className='relative '>
                <label className='absolute left-0 -top-3 px-2 bg-[rgb(34,34,34)]'
                 htmlFor='deadline'>Deadline (optional)
                </label>
                <input ref={reftaskDeadline} className=' w-full px-4 py-2 border border-gray-400   rounded-md bg-transparent'
                type='datetime-local'
                id='deadline'
                name='deadline'
                min="2024-06-07T00:00"
                max="2025-06-14T00:00"
                />
          
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor='category' className='mb-2'>Category</label>
                <CategoryOptions onClick={categoryClick} />
            </div>
                <SubmitButton  onClick={ submitHandler }>Add Task</SubmitButton>

          </form>
    )
}

export default TaskForm