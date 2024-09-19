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
       <select id='category' onChange={redirectHandler}  className='w-full px-4 py-2 rounded-md  bg-transparent border border-gray-400   '>
           
          <optgroup label='Select category' className='text-black bg-[#7f7d7d] '>
             {categoryOptions.map( (eachOption) => { return (<option  key={eachOption} value={eachOption} 
              className=''>{eachOption} </option>)})}
         </optgroup>  

      
         
          <option value="modify"  className='text-black  py-4 ' >
            Modify 
          </option>
      
   
       </select>
    </div>
  )
}

export default CategoryOptions