import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const CategoryOptions = ({onClick}) => {
  
    const categoryOptions = useSelector( (store) => (store.interface.categoryOptions));

    const navigate = useNavigate();

    const redirectHandler = (e) =>
    {
        if(e.target.value === "modify")
        navigate("/categories");
         
        onClick(e);
    }


  return (
    <div>
       <select id='category' onChange={redirectHandler}  className='w-full px-4 py-2 rounded-md  bg-transparent border border-gray-400   cursor-pointer  '>
           
          <optgroup label='Select category' className='text-black py-2 bg-[#ffffff] '>
             {categoryOptions.map( (eachOption) => { return (<option  key={eachOption} value={eachOption} 
              className=''>{eachOption} </option>)})}
         </optgroup>  

      
         
          <option value="modify"  className='text-black border-2 border-black py-2 font-semibold bg-[rgb(106,227,161)] cursor-pointer' >
            ADD CATEGORY 
          </option>
      
   
       </select>
    </div>
  )
}

export default CategoryOptions