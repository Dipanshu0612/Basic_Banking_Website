import React from 'react'
import HomeCaraousel from '../components/HomeCaraousel'
import { NavLink as Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <div className='my-3'>
        <div>
          <HomeCaraousel />
        </div>
        <div className='flex justify-around items-center my-3 bg-gray-50 py-4 cursor-pointer md:flex-col sm:flex-col'>
          <div className='bg-white '>
            <img src="../assests/logo-black.png" alt="" className='h-[10rem] w-[40rem] md:w-[30rem] sm:w-[20rem] mix-blend-multiply py-1 px-1' />
          </div>
          <div className='w-[30rem] bg-gray-100 space-y-2 sm:text-center md:text-center px-2 py-2 flex flex-col items-center justify-center md:w-[30rem] sm:w-[20rem]'>
            <h3 className='text-3xl font-bold'>The Bank of Sparks</h3>
            <h5 className='text-xl font-semibold'>Where happiness meets finance!</h5>
            <p className='tracking-wide text-lg text-center'>The Bank of Sparks is a trusted and reliable financial institution that offers innovative and progressive banking solutions to its customers. With a focus on customer satisfaction and security, the bank is dedicated to providing efficient and accessible services that meet the evolving needs of its clients. Backed by years of experience, The Bank of Sparks offers expert guidance and advice to help individuals and businesses achieve their financial goals. With a dynamic approach to banking, the institution is committed to unlocking the potential of its customers' finances and creating a brighter financial future for all.</p>
            <button className='bg-blue-500 px-3 py-2 flex rounded justify-center items-center space-x-1 font-medium hover:border border-black ease-in-out duration-200 hover:text-black my-2 hover:border-none hover:bg-blue-600'><Link to="about-us" className='hover:text-black'>Read More</Link></button>
          </div>
        </div>
      </div>
    </>
  )
}
