import React from 'react'

const SubmitButton = ({children , onClick}) => {
  return (
    <>
    <button onClick={onClick} className='font-lato text-xl bg-black border border-white px-6 py-4 hover:bg-white hover:text-black transition-all duration-200 cursor-pointer'>{children}</button>
    </>
  )
}

export default SubmitButton