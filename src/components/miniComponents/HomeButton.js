import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import {Link} from "react-router-dom"

const HomeButton = () => {
  return (
    <div className=' cursor-pointer transition-all hover:bg-white hover:text-black   hover:rounded-full  duration-400 border-4 border-transparent  '>
          <Link to={"/"}>  <FaArrowLeft size={30}/> </Link>
      
    </div>
  )
}

export default HomeButton