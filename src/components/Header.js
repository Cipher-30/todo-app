import React from 'react'
import {useLocation} from "react-router-dom"
import Logo from './miniComponents/Logo';
import UserLogo from './miniComponents/UserLogo';
import HomeButton from './miniComponents/HomeButton';

const Header = ({children}) => {
 
  const currPath = useLocation();
  // console.log(currPath.pathname);
  

  return (
    <>
    <header className="  px-4 py-2   " >
  

     <ul className='flex justify-between items-center'>
       <li className=''> {currPath.pathname === "/" ? (<Logo/>) : (<HomeButton/>)}</li>
       <li className='font-semibold text-xl'> {children}</li>
       <li className=''><UserLogo/></li>
     </ul>

       
       
   
    </header>
    </>
  )
}

export default Header 