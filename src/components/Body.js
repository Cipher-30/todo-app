import React from 'react'
import Header from './Header'
import LandingPage from './LandingPage'



const Body = () => {

  
  

  return (
      <div className=' min-h-screen  bg-black text-white border border-black' >

        <section className='w-[100%]  sm:w-[70%]  mx-auto'>

        <Header/>
        <LandingPage/>

        </section>


      </div>
  )
}

export default Body