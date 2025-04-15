import React from 'react';
//ICONS
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
return (
<div className="footer h-[200px] w-full p-5 flex justify-between items-center bg-Gts_white">
<div className="left h-[200px]  w-[100px] lg:w-[500px] flex flex-col justify-center items-start ml-2 lg:ml-10">
    <h1 className='font-sans text-xl lg:text-2xl '>Details:</h1>
    <p className='font-sans text-xs'>Location : New Road Pako, Kathmandu</p>
    <p className='font-sans text-xs'>Email:aaaaa@gmail.com</p>
    <p className='font-sans text-xs'>Phone: 9812345678</p>
</div>

<div className="rightall">

<div className="right h-[50px] w-[150px] rounded-xl bg-white flex justify-evenly items-center gap-5 p-2 cursor-pointer">

<FiInstagram className='h-[20px] w-[20px] hover:lg:w-[50px] hover:lg:h-[50px]'/>
<BsLinkedin className='h-[20px] w-[20px] hover:lg:w-[50px] hover:lg:h-[50px]' />
<FaSquareFacebook className='h-[20px] w-[20px] hover:lg:w-[50px] hover:lg:h-[50px]'/>
<FaFacebookMessenger className='h-[20px] w-[20px] hover:lg:w-[50px] hover:lg:h-[50px]'/>


</div>

<div className="rightreserved w-[170px] lg:w-[300px] ">
    <h1 className='font-sans text-xs lg:text-sm '>@All right Reserved by Genuine Tech and Service</h1>
</div>
</div>


</div>
)
}

export default Footer;