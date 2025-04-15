import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { Suspense, useEffect } from 'react';
//COMPONENTS
import Nav from '../components/Nav';
const Footer=React.lazy(()=>import('../components/Footer'));

const Aboutus = () => {
const offset = 200;
const duration = 600;

useEffect(()=>{
    document.title = "Genuine Tech and Service";
    Aos.init({offset:50,duration:600});
},[offset,
    duration])


return (
    <div className='Main_aboutus bg-Gts_white text-appleblack w-full h-auto'>
    <Nav/>
    
    <div className="body w-full h-auto py-5 px-10 flex flex-col lg:flex-row justify-evenly items-start gap-10">
    <img src="../images/ITteam.jpg" className='rounded-xl lg:w-[650px] w-[400px] h-[300px] lg:h-[400px]' alt='teampicture'/>
    <div className="aboutus">
    <h1 className='font-titleFont text-2xl lg:text-4xl text-appleblack '><span className='text-blue-700'>ABOUT</span> US</h1>
    <p className='font-sans mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel debitis porro placeat quasi asperiores quae, dignissimos dicta adipisci, nihil quas repudiandae ratione modi delectus dolorum facilis? Impedit nemo itaque debitis.</p>
    </div>
    </div>

    <div className="mission w-full h-auto flex flex-col justify-evenly items-center px-10 lg:px-32 py-5">
    <h1 className='font-titleFont text-2xl lg:text-4xl text-center text-appleblack'><span className='text-blue-700'>Our</span> Mission</h1>
    <p className='font-sans mt-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore maiores sed nesciunt enim, at fugiat reiciendis sapiente aperiam sit alias tenetur deleniti, dignissimos excepturi libero exercitationem laboriosam eius sequi nemo? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore maiores sed nesciunt enim, at fugiat reiciendis sapiente aperiam sit alias tenetur deleniti, dignissimos excepturi libero exercitationem laboriosam eius sequi nemo?</p>
    
    <div className="circlemissions flex flex-col lg:flex-row justify-center items-center gap-5 mt-5" data-aos="fade-up">
    <div className="mission1 rounded-xl h-[80px] lg:h-[100px] w-[350px] bg-slate-400 flex justify-evenly items-center gap-2">
        <img src='../images/main_photo.jpg' className='rounded-full ml-2 h-[60px] w-[60px]' alt='mission1'/>
    <h1 className='h-[60px] w-full text-xs p-2 text-appleblack'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat excepturi eligendi dolor est officiis vel non</h1>
    </div>
    <div className="mission1 rounded-xl h-[80px] lg:h-[100px] w-[350px] bg-slate-400 flex justify-evenly items-center gap-2">
        <img src='../images/main_photo.jpg' className='rounded-full ml-2 h-[60px] w-[60px]' alt='mission1'/>
    <h1 className='h-[60px] w-full text-xs p-2 text-appleblack'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat excepturi eligendi dolor est officiis vel non</h1>
    </div>

    <div className="mission1 rounded-xl h-[80px] lg:h-[100px] w-[350px] bg-slate-400 flex justify-evenly items-center gap-2">
        <img src='../images/main_photo.jpg' className='rounded-full ml-2 h-[60px] w-[60px]' alt='mission1'/>
    <h1 className='h-[60px] w-full text-xs p-2 text-appleblack'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat excepturi eligendi dolor est officiis vel non</h1>
    </div>
    </div>
    </div>

    <div className="mindsmagic" data-aos="fade-up">

    <h1 className='font-titleFont text-2xl lg:text-4xl text-center mt-5 text-appleblack'>Minds Behind the Magic</h1>

    <div className="pictures flex flex-col lg:flex-row justify-evenly items-center gap-5 p-5">
    <div className="card1 rounded-xl w-[300px] h-[300px] bg-slate-400 flex flex-col justify-center items-center">
        <img src='../images/ITteam.jpg' className='rounded-full w-[90%] h-[80%]' alt='CEO'/>
        <h1 className="title font-sans text-xl mt-3 text-appleblack">C.E.O</h1>
    </div>

    <div className="card2 rounded-xl w-[300px] h-[300px] bg-slate-400 flex flex-col justify-center items-center">
        <img src='../images/ITteam.jpg' className='rounded-full w-[90%] h-[80%]' alt='CEO'/>
        <h1 className="title font-sans text-xl mt-3 text-appleblack">Manager</h1>
    </div>

    <div className="card3 rounded-xl w-[300px] h-[300px] bg-slate-400 flex flex-col justify-center items-center">
        <img src='../images/ITteam.jpg' className='rounded-full w-[90%] h-[80%]' alt='CEO'/>
        <h1 className="title font-sans text-xl mt-3 text-appleblack">Staff Member</h1>
    </div>
    </div>
    

    </div>

        <Suspense fallback={<div>Loading.....</div>}>
        <Footer/>
        </Suspense>
    </div>
)
}

export default Aboutus