import React from 'react'
import { BsGlobeCentralSouthAsia, BsLinkedin } from "react-icons/bs"
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from "react-icons/ai"


export default function Footer() {
    return (
        <>
            <div className='bg-neutral-900 h-[20rem] flex flex-wrap justify-around items-center md:h-[60rem] sm:h-[80rem]'>
                <div className="box1 h-[18rem] w-[18rem] flex flex-col md:w-full md:justify-center md:items-center sm:w-full sm:justify-center sm:items-center">
                    <h3 className='text-yellow-500 font-bold text-transform: uppercase text-[1.5rem] px-4 py-2 tracking-wide text-center'>The Sparks Foundation</h3>
                    <p className='px-3 py-3 text-gray-300 text-center'>We connect students of all financial backgrounds with experts. Knowledge sharing enables equal opportunity for all.</p>
                    <div className="social flex flex-wrap font-medium text-[1.7rem] space-x-3 px-3 py-4">
                        <a href="https://www.facebook.com/thesparksfoundation.info" className=' duration-300 border border-gray-300 text-gray-300 p-1 ease-in-out hover:text-white hover:bg-blue-300 hover:ease-in-out'><AiFillFacebook /></a>
                        <a href="https://www.linkedin.com/company/the-sparks-foundation/" className=' duration-300 border border-gray-300 text-gray-300 p-1 ease-in-out hover:text-white hover:bg-blue-300 hover:ease-in-out'><BsLinkedin /></a>
                        <a href="https://instagram.com/thesparksfoundation.info" className=' duration-300 border border-gray-300 text-gray-300 p-1 hover:text-white hover:bg-blue-300 hover:ease-in-out'><AiFillInstagram /></a>
                        <a href="https://twitter.com/tsfsingapore" className=' duration-300 border border-gray-300 text-gray-300 p-1 hover:text-white hover:bg-blue-300 hover:ease-in-out'><AiFillTwitterSquare /></a>
                        <a href="https://thesparksfoundation.info/" className=' duration-300 border border-gray-300 text-gray-300 p-1 hover:text-white hover:bg-blue-300 hover:ease-in-out'><BsGlobeCentralSouthAsia /></a>
                    </div>
                </div>
                <div className="box2 h-[18rem] w-[18rem] flex flex-col flex-wrap">
                    <h3 className='text-[1.5rem] text-white px-4 py-4 font-semibold'>Join Us!</h3>
                    <a href='https://www.thesparksfoundationsingapore.org/join-us/internship-positions/' className='ease-in-out duration-200  hover:text-white block text-gray-400 px-4 py-1'>GRIP (Internship)</a>
                    <a href='https://www.thesparksfoundationsingapore.org/join-us/brand-ambassador/' className='ease-in-out duration-200  hover:text-white block text-gray-400 px-4 py-2'>Brand Ambassador</a>
                    <a href='https://www.thesparksfoundationsingapore.org/join-us/expert-mentor/' className='ease-in-out duration-200  hover:text-white block text-gray-400 px-4 py-2'>Expert Mentor</a>
                    <a href='https://www.thesparksfoundationsingapore.org/join-us/events-volunteer/' className='ease-in-out duration-200  hover:text-white block text-gray-400 px-4 py-2'>Events Volunteer</a>
                    <a href='https://www.thesparksfoundationsingapore.org/join-us/management-volunteer/' className='duration-200  hover:text-white ease-in-out block text-gray-400 px-4 py-2'>Management Volunteer</a>
                </div>
                <div className="box3 h-[18rem] w-[18rem] px-1 flex flex-col flex-wrap sm:justify-start">
                    <h3 className='text-[1.5rem] text-white px-4 py-4 font-semibold'>Programs</h3>
                    <a href='https://www.thesparksfoundationsingapore.org/programs/student-scholarship-program/' className=' duration-200  hover:text-white ease-in-out block text-gray-400 px-4 py-1'>Student Scholarship Program</a>
                    <a href='https://www.thesparksfoundationsingapore.org/programs/student-mentorship-program/' className=' duration-200  hover:text-white ease-in-out block text-gray-400 px-4 py-2'>Student Mentorship Program</a>
                    <a href='https://www.thesparksfoundationsingapore.org/programs/student-sos-program/' className=' duration-200  hover:text-white ease-in-out block text-gray-400 px-4 py-2'>Student SOS Program</a>
                    <a href='https://www.thesparksfoundationsingapore.org/programs/student-externship-program/' className=' duration-200  hover:text-white ease-in-out block text-gray-400 px-4 py-2'>Student Externship Program</a>
                    <a href='https://www.thesparksfoundationsingapore.org/programs/corporate-programs/' className=' duration-200  hover:text-white ease-in-out block text-gray-400 px-4 py-2'>Corporate Programs</a>
                </div>
                <div className="box4 h-[18rem] w-[18rem] flex flex-col flex-wrap sm:justify-start">
                    <h3 className='text-[1.5rem] text-white px-4 py-4 font-semibold'>Websites</h3>
                    <a href='https://thesparksfoundation.info/' className='ease-in-out duration-200  hover:text-white block text-gray-400 px-4 py-1'>The Sparks Foundation (Global)</a>
                    <a href='https://www.thesparksfoundationsingapore.org/' className=' duration-200  hover:text-white ease-in-out block text-gray-400 px-4 py-2'>The Sparks Foundation (India)</a>
                    <h3 className='text-[1.5rem] text-white px-4 py-2 font-semibold'>Interships</h3>
                    <a href='https://internshala.com/internships/internship-at-The%20Sparks%20Foundation' className='ease-in-out duration-200  hover:text-white block text-gray-400 px-4 py-1'>Internships at Intershala</a>
                </div>
            </div>
            <div className="lastfooter text-center bg-black h-[7rem] text-lg text-white flex flex-wrap items-center justify-center md:h-[10rem]">
                © 2023 The Sparks Foundation. All Rights Reserved | Design by <a href="https://www.linkedin.com/in/dipanshu-mishra-696a0622a/" className='text-blue-500 text-lg font-bold cursor-pointer inline-flex hover:text-blue-300 hover:ease-in-out duration-500'>&nbsp;Dipanshu Mishra</a>
            </div>
        </>
    )
}
