import React, { useState } from 'react';
//COMPONENTS
import Nav from '../components/Nav';

const Contact = () => {

const [fullName, setFullName]=useState('');
const [email, setEmail]=useState('');
const [phnum, setPhNum]=useState('');
const [desc, setDesc]=useState('');

const handleSubmit=()=>{
setFullName('');
setEmail('');
setPhNum('');
setDesc('');
alert("Credentials Submitted");
}

return (
    <div className='Main-containerContact'>
    <Nav/>
    <div className="contactPart h-auto lg:h-[89vh] p-5  flex flex-col lg:flex-row justify-evenly items-center gap-10">
        <div className="Left">
        <h1 className="text-3xl font-bold text-appleblack">Contact Us</h1>
        <p className="text-appleblack text-lg">+977-9812345670 / 01-4312345</p>

        <h1 className="text-3xl text-appleblack font-bold mt-5">Email Us</h1>
        <p className="text-appleblack text-lg">gts@gmail.com</p>
        </div>

        <div className="Right h-auto w-[350px] lg:w-[500px] bg-slate-400 rounded-xl p-5 flex flex-col justify-center items-center gap-10">
        <input onChange={(e)=>setFullName(e.target.value)}
        value={fullName}
        className='h-[50px] w-[90%] mt-5 rounded-xl p-4 border-2 border-slate-600 text-sm lg:text-lg' placeholder='Full Name'></input>
        
        <input onChange={(e)=>setEmail(e.target.value)}
        value={email}
        className='h-[50px] w-[90%] rounded-xl p-4 border-2 border-slate-600 text-sm lg:text-lg' placeholder='Email'></input>
        
        <input onChange={(e)=>setPhNum(e.target.value)}
        value={phnum}
        className='h-[50px] w-[90%] rounded-xl p-4 border-2 border-slate-600 text-sm lg:text-lg' placeholder='Phone No.'></input>
        
        <input onChange={(e)=>setDesc(e.target.value)}
        value={desc}
        className='h-[90px] w-[90%] rounded-xl p-4 border-2 border-slate-600 text-sm lg:text-lg' placeholder='Description'></input>
        
        <button onClick={()=>handleSubmit()}
        className='h-[50px] w-[100px] rounded-xl p-2 bg-blue-400 cursor-pointer text-sm lg:text-lg'>Submit</button>
        </div>
    </div>
    </div>
)
}

export default Contact;