import React from 'react'
import {Link} from "react-router-dom"
import { IoIosAddCircle } from "react-icons/io";
import { useSelector } from 'react-redux';
import NoTaskPage from './miniComponents/NoTaskPage';
import TaskPage from './TaskPage';
import TaskCompletionBar from './TaskCompletionBar';

const LandingPage = () => {

    const task = useSelector((store) => (store.task.taskInfo));

    return (
        <div className='relative mt-4 mx-2 sm:mx-0 sm:p-4 min-h-[calc(100vh-100px)] border rounded-md  border-gray-300 flex flex-col items-center '>

            <section className=' sm:mx-0 mx-2   w-full sm:w-[90%] md:w-[80%] flex flex-col justify-center gap-4 '>
            {
              task.length > 0 ? (<> <TaskCompletionBar/><TaskPage/></>) : (<NoTaskPage/>)
            }
            </section>



            <div className='fixed m-6 cursor-pointer right-0 bottom-0 transition-transform duration-150 hover:scale-110'  >
                <Link to={"/add"}>
                  <IoIosAddCircle size={60}/>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage