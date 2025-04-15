import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { Suspense, useEffect } from 'react';
//COMPONENTS
import Nav from '../components/Nav';
const Footer = React.lazy(import('../components/Footer'));

const Service = () => {

const offset = 200;
const duration = 600;

useEffect(()=>{
    document.title = "Genuine Tech and Service";
    Aos.init({offset:50,duration:600});

},[offset,
    duration])


return (
    <div className='MaincontainerService w-full h-auto bg-Gts_white '>
    <Nav/>

    <div className="service w-full h-auto p-5">
    <h1 className=' text-center text-2xl lg:text-4xl font-titleFont text-appleblack'>OUR SERVICES</h1>

    <div className="card grid grid-cols-1 lg:grid-cols-3 justify-center items-center " data-aos="fade-up">

        <div className="CARD1 bg-black h-[450px] w-[350px] lg:h-[430px] lg:w-[400px] rounded-xl mt-8 p-3 cursor-pointer">
        <video src='../videos/statics.mp4'   autoPlay
        loop
        muted
        className='w-[390px] h-[250px] rounded-xl'/>
        <h1 className='text-white font-sans text-3xl text-start ml-3'>Hardware Monitoring</h1>
        <p className='text-white font-sans text-xs text-start ml-3 mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, in aliquid. Porro nesciunt et iusto neque, mollitia doloremque? Eligendi consectetur reprehenderit voluptatibus saepe, ratione dolorum. Totam et quod ipsam veritatis?</p>
        <button className='font-sans w-[100px] bg-white text-appleblack p-2 rounded-xl mt-2 ml-56 lg:ml-60'>Learn More</button>
        </div>

        <div className="CARD2 bg-black h-[450px] w-[350px] lg:h-[430px] lg:w-[400px] rounded-xl mt-8 p-3 cursor-pointer" c>
        <video src='../videos/https.mp4'   autoPlay
        loop
        muted
        className='w-[390px] h-[250px] rounded-xl'/>
        <h1 className='text-white font-sans text-3xl text-start ml-3'>Network Maintainence</h1>
        <p className='text-white font-sans text-xs text-start ml-3 mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, in aliquid. Porro nesciunt et iusto neque, mollitia doloremque? Eligendi consectetur reprehenderit voluptatibus saepe, ratione dolorum. Totam et quod ipsam veritatis?</p>
        <button className='font-sans bg-white p-2 rounded-xl mt-2 ml-56 lg:ml-60 text-appleblack'>Learn More</button>
        </div>

        <div className="CARD3 bg-black h-[450px] w-[350px] lg:h-[430px] lg:w-[400px] rounded-xl mt-8 p-3 cursor-pointer" data-aos="fade-up">
        <video src='../videos/megaphone.mp4'   autoPlay
        loop
        muted
        className='w-[390px] h-[250px] rounded-xl'/>
        <h1 className='text-white font-sans text-3xl text-start ml-3'>Remote management</h1>
        <p className='text-white font-sans text-xs text-start ml-3 mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, in aliquid. Porro nesciunt et iusto neque, mollitia doloremque? Eligendi consectetur reprehenderit voluptatibus saepe, ratione dolorum. Totam et quod ipsam veritatis?</p>
        <button className='font-sans text-appleblack bg-white p-2 rounded-xl mt-2 ml-56 lg:ml-60'>Learn More</button>
        </div>

        <div className="CARD4 bg-black h-[450px] w-[350px] lg:h-[430px] lg:w-[400px] rounded-xl mt-8 p-3  cursor-pointer" data-aos="fade-up">
        <video src='../videos/database.mp4'   autoPlay
        loop
        muted
        className='w-[390px] h-[250px] rounded-xl'/>
        <h1 className='text-white font-sans text-3xl text-start ml-3'>Vmware support</h1>
        <p className='text-white font-sans text-xs text-start ml-3 mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, in aliquid. Porro nesciunt et iusto neque, mollitia doloremque? Eligendi consectetur reprehenderit voluptatibus saepe, ratione dolorum. Totam et quod ipsam veritatis?</p>
        <button className='font-sans text-appleblack bg-white p-2 rounded-xl mt-2 ml-56 lg:ml-60'>Learn More</button>
        </div>

        <div className="CARD5 bg-black h-[450px] w-[350px] lg:h-[430px] lg:w-[400px] rounded-xl mt-8 p-3  cursor-pointer" data-aos="fade-up">
        <img src='../images/pic.png' className='w-[390px] h-[250px] rounded-xl' alt='3dpic'/>
        <h1 className='text-white font-sans text-3xl text-start ml-3'>Server Maintainence</h1>
        <p className='text-white font-sans text-xs text-start ml-3 mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, in aliquid. Porro nesciunt et iusto neque, mollitia doloremque? Eligendi consectetur reprehenderit voluptatibus saepe, ratione dolorum. Totam et quod ipsam veritatis?</p>
        <button className='font-sans text-appleblack bg-white p-2 rounded-xl mt-2 ml-56 lg:ml-60'>Learn More</button>
        </div>

        <div className="CARD6 bg-black h-[450px] w-[350px] lg:h-[430px] lg:w-[400px] rounded-xl mt-8 p-3  cursor-pointer" data-aos="fade-up">
        <video src='../videos/barchart.mp4'   autoPlay
        loop
        muted
        className='w-[390px] h-[250px] rounded-xl'/>
        <h1 className='text-white font-sans text-3xl text-start ml-3'>Full-level Support</h1>
        <p className='text-white font-sans text-xs text-start ml-3 mt-2'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, in aliquid. Porro nesciunt et iusto neque, mollitia doloremque? Eligendi consectetur reprehenderit voluptatibus saepe, ratione dolorum. Totam et quod ipsam veritatis?</p>
        <button className='font-sans text-appleblack bg-white p-2 rounded-xl mt-2 ml-56 lg:ml-60'>Learn More</button>
        </div>


    </div>

    </div>

    <Suspense fallback={<div>Loading.....</div>}>
    <Footer/>
    </Suspense>
    </div>
)
}

export default Service;