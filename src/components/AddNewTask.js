import React from 'react'
import Header from "./Header"
import TaskForm from './TaskForm'

const AddNewTask = () => {
  return (
    <div className=' min-h-screen bg-black text-white' >
      <section className='w-[100%]  sm:w-[70%]  mx-auto'>
      <Header>
        Add New Task
        </Header>

          {/* <div className='mx-auto border '> */}
           <TaskForm/>
          {/* </div> */}
        

      </section>

    </div>
  )
}

export default AddNewTask