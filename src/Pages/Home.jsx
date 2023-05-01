import React from 'react'
import NavbarComponent from '../Components/NavbarComponent/NavbarComponent'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <NavbarComponent/>
    <div className="bg-[url('/src/assets/wine2.jpg')]  bg-no-repeat bg-cover w-full h-screen text-center flex  items-center justify-center">
        <div className='-mt-24'>

        <h1 className=' font-extrabold text-gray-600 text-7xl font-serif'>We hand-<span className=' text-red-400'>pick</span><br/>a world on wine.</h1>
        <p className=' font-semibold text-xl pt-4 pb-6 text-gray-500'>Enjoy 4 bottles for just $25.95.</p>
        <button className='border-red rounded-full border-solid border-2 bg-red-500 border-red-500 text-white py-2 px-10  '>Get Started</button>
        <p className='text-red-400 pt-2'>Already a member?<NavLink className=' text-red-600 underline font-semibold cursor-pointer' to={"/login"}> SignIn.</NavLink></p>
        </div>
    </div>
    </>
  )
}

export default Home