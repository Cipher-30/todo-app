import React from 'react'
import { FaUserCircle } from "react-icons/fa";

const UserLogo = () => {
  return (
    <div className='relative cursor-pointer transition-all   hover:rounded-full hover:border-gray-200 duration-400 border-4 border-transparent ' ><FaUserCircle size={40} /></div>
  )
}

export default UserLogo