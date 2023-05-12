import React from 'react'
import { IoIosPeople } from "react-icons/io";
import { GrNotes } from "react-icons/gr";
import { BiTransferAlt } from "react-icons/bi";

export default function AboutUs() {
  return (
    <>

      <div>
        <h3 className='text-center flex items-center justify-center text-3xl my-3 font-extrabold'>About Us!</h3>
      </div>

      <div className='flex justify-around items-center my-3 bg-slate-100 flex-wrap'>

        <div className='w-[40rem] md:w-[30rem] sm:w-[25rem]'>
          <img src="../assests/About-Page.jpeg" alt="About-page" className='px-3 py-3 mix-blend-multiply' />
        </div>

        <div className='w-[40rem] md:w-[30rem] sm:w-[25rem]'>
          <p className='font-semibold text-center text-[1.5rem] px-4 md:text-[1.3rem] sm:text-[1rem]'>Welcome to The Bank of Sparks, your trusted partner in financial well-being. Established with the aim of providing innovative and reliable banking solutions to individuals and businesses, we have been serving our clients for several years with a focus on customer satisfaction and security.</p>
        </div>

      </div>

      <div className="text-center flex flex-col my-5 space-y-3">

        <h3 className='text-2xl font-bold'>Our Mission</h3>
        <p className='font-semibold tracking-wide px-4 py-3 text-xl md:text-[1rem] sm:text-[1rem]'>Our mission is to empower our clients with the tools and resources they need to achieve their financial goals, no matter how big or small. We believe that everyone should have access to the financial services and guidance they need to secure their futures, and we are committed to making this a reality for our customers.</p>

      </div>


      <div className='my-5 space-y-3'>
        <div className='text-center text-2xl font-bold'>
          Our Services
        </div>

        <div className='flex flex-wrap justify-around items-center sm:flex-col space-y-4'>
          <div className='flex flex-col items-center justify-center text-center w-[15rem] h-[15rem] space-y-2  bg-gray-100 px-2 cursor-pointer'>
            <IoIosPeople className='text-2xl' />
            <h4 className='text-xl font-semibold'>Customer Data</h4>
            <p>You can look up to our customer's records stored in the bank.</p>
          </div>

          <div className='flex flex-col items-center justify-center text-center w-[15rem] h-[15rem] space-y-3 bg-gray-100 px-3 cursor-pointer'>
            <BiTransferAlt className='text-3xl' />
            <h4 className='text-xl font-semibold'>Money Transfer</h4>
            <p>You can do money transactions between users of the bank.</p>
          </div>

          <div className='flex flex-col items-center justify-center text-center w-[15rem] h-[15rem] space-y-2 bg-gray-100 px-2 cursor-pointer'>
            <GrNotes className='text-2xl' />
            <h4 className='text-xl font-semibold'>Transaction History</h4>
            <p>You can look into the transaction history and know which user and transfered money to whom.</p>
          </div>
        </div>

      </div>

      <div className='my-5 space-y-3 px-4'>
        <h3 className='text-center font-bold text-2xl'>Our Motive</h3>

        <p className='text-center font-semibold text-xl sm:text-[1rem]'>At The Bank of Sparks, we believe that banking should be easy, convenient, and accessible. That's why we have invested in cutting-edge technology and online banking services that allow our customers to manage their finances from anywhere, at any time.</p>

        <p className='text-center font-semibold text-xl sm:text-[1rem]'>We are proud to serve our community, and we look forward to helping you achieve your financial goals. Whether you are just starting out or planning for retirement, we are here to help you every step of the way. Thank you for choosing The Bank of Sparks as your trusted banking partner.</p>
      </div>
    </>
  )
}
