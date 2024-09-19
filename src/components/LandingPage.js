import React from 'react'
import {Link} from "react-router-dom"
import { IoIosAddCircle } from "react-icons/io";
import { useSelector } from 'react-redux';
import NoTaskPage from './miniComponents/NoTaskPage';
import TaskPage from './TaskPage';

const LandingPage = () => {

    const task = useSelector((store) => (store.task.taskInfo));

    return (
        <div className='relative mt-4 min-h-[calc(100vh-100px)] border-2 border-blue-800 flex flex-col items-center '>

            <section className='border w-full sm:w-[80%] flex flex-col justify-center gap-2 '>
            {
              task.length > 0 ? (<TaskPage/>) : (<NoTaskPage/>)
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