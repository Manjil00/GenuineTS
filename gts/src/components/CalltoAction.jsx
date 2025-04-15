import React from 'react'
//ICONS
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

const CallToAction = () => {
return (
<div className="Section6 flex flex-col md:flex-row justify-center items-center p-5 h-auto gap-8 md:gap-14" >
    <div className="container1 h-[100px] w-[400px] bg-white rounded-xl flex justify-center items-center gap-5">
    <FiPhoneCall size={30} />
    <div className="call flex flex-col justify-center items-center">
        <h1 className='font-sans font-bold text-2xl '>Contact Us</h1>
        <p className=''>+977-9812345678, 01-4123456</p>
    </div>
    </div>

    <div className="container2 h-[100px] w-[400px] bg-white rounded-xl flex justify-center items-center gap-5">
    <MdOutlineMail size={30}/>
    <div className="call flex flex-col justify-center items-center">
        <h1 className='font-sans font-bold text-2xl'>Email Us</h1>
        <p className=''>gts@gmail.com</p>
    </div>
    </div>

    <div className="container3 h-[100px] w-[400px] bg-white rounded-xl flex justify-center items-center gap-5">
    <IoLocationOutline size={30}/>
    <div className="call flex flex-col justify-center items-center">
        <h1 className='font-sans font-bold text-2xl'>Our Location</h1>
        <p className=''>New Road Pako,Kathmandu</p>
    </div>
    </div>
</div>
)
}

export default CallToAction