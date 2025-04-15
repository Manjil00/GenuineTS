import React from 'react'
import Marquee from 'react-fast-marquee';

const Testimonials = () => {
return (
<div className="Section5 h-auto w-full p-5" data-aos="fade-up">
    <h1 className='font-titleFont text-2xl md:text-4xl text-center text-appleblack'>TESTIMONIALS</h1>
    <Marquee className="testimonials flex justify-center items-center gap-5 mt-5 cursor-pointer">
    <img src='../images/main_photo.jpg' className='h-[150px] w-[300px] md:h-[300px] md:w-[500px]' alt='marquee1'/>
    <img src='../images/server1.jpg' className='h-[150px] w-[300px] md:h-[300px] md:w-[500px] ml-5' alt='marquee2'/>
    <img src='../images/main_photo.jpg' className='h-[150px] w-[300px] md:h-[300px] md:w-[500px] ml-5' alt='marquee1'/>
    <img src='../images/server1.jpg' className='h-[150px] w-[300px] md:h-[300px] md:w-[500px] ml-5' alt='marquee2'/>
    <img src='../images/main_photo.jpg' className='h-[150px] w-[300px] md:h-[300px] md:w-[500px] ml-5' alt='marquee1'/>
    <img src='../images/server1.jpg' className='h-[150px] w-[300px] md:h-[300px] md:w-[500px] ml-5' alt='marquee2'/>
    </Marquee>
</div>
)
}

export default Testimonials;
