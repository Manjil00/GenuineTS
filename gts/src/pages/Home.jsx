import React, { useEffect } from 'react';
//Components
import CallToAction from '../components/CallToAction';
import Count from '../components/Count';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

import Aos from 'aos';
import 'aos/dist/aos.css';
import Marquee from 'react-fast-marquee';

const Home = () => {
    const offset = 200;
    const duration = 600;

    useEffect(()=>{
        document.title = "Genuine Tech and Service";
        Aos.init({offset:50,duration:600});

    },[offset,
        duration])

return (
<div className='MainContainer h-auto w-full bg-Gts_white '>
        <Nav/>
    <div className="Section1 h-[350px] md:h-[450px] w-full relative bg-gradient-to-tr from-Gts_blue to-Gts_blue2 ">
            {/* <img src='../images/main_photo.jpg' className='w-full h-[350px] md:h-[450px] opacity-55' alt='main_photo'/> */}
        <div className="texts text-white absolute  top-3 left-10  md:top-[100px] md:left-[300px] mt-12 md:mt-14 flex justify-start items-center gap-[20px] md:gap-[300px]">
            <div className="left1 text-center">
                <h1 className='text-xl md:text-5xl font-titleFont text-appleblack'>"Your Server Doctor"</h1>
                <p className='text-xs md:text-xl mt-5 break-words w-[300px] md:w-[900px] text-start text-appleblack'>Genuine Tech and Services delivers high-performance servers and expert configuration solutions tailored to power businesses of all sizes. From custom-built servers to seamless setup and ongoing support, our team ensures reliable, optimized infrastructure so you can operate securely and efficiently.</p>
            </div>
        </div>
        
        <div className="Countup_compoennt absolute bottom-[-15%] inset-x-0 w-full">
            <Count/>
        </div>
    </div>

    {/* //SECTION2 */}
    <div className="Section2 h-auto w-full mt-14 p-4 flex flex-col md:flex-row gap-10 md:gap-20 justify-center items-center" data-aos="fade-up">
        <div className="left h-[200px] w-[350px] md:h-[350px] md:w-[350px]">
            <img src='../images/server1.jpg' className='rounded-xl h-[200px] w-[400px] md:h-[350px] md:w-[350px] ' alt='sec2img'/>
        </div>
        <div className="Righttexts w-[300px] md:w-[1000px]">
            <h1 className='font-sans text-2xl md:text-4xl text-appleblack'>Genuine Tech and Services Pvt. Ltd.</h1>
            <p className=' mt-5 md:mt-10 font-sans text-sm md:text-md text-appleblack'>Genuine Tech and Services Pvt. Ltd. is an IT service company dedicated to helping its customers get the best possible return on their investment in IT infrastructure.
We offer managed IT services for small to mid-sized organizations, businesses, and non-profit organizations. We deliver a variety of IT solutions including secure and reliable Computer Networks, Web Hosting, Website and Application Development, Surveillance, and more. We are highly dedicated to addressing your business and IT needs, so please don’t hesitate to contact us to schedule a free initial consultation. We will gladly meet you at your place to discuss how our IT services can aid your business to grow stronger, in light of your current resources and your existing business process.</p>
        </div>
    </div>

    {/* SECTION3 SERVICES */}
    <div className="Section3 h-auto w-full p-2" data-aos="fade-up">
        <div className="servicetext">
            <h1 className='font-titleFont text-xl md:text-4xl text-center mt-4 text-appleblack'>OUR SERVICES</h1>
        </div>
        <div className="cards mt-10 grid grid-cols-1 md:grid-cols-3 justify-center justify-items-center gap-y-10">
            <div className="card1 rounded-xl h-auto w-[300px] md:w-[400px] bg-white p-2">
            <img src='../images/server1.jpg' className=' rounded-xl' alt='card1'/>
            <h1 className='font-sans text-lg md:text-xl text-center mt-2 text-appleblack'>Custom Server Setup</h1>
            <p className='font-sans text-sm md:text-md text-start mt-2 ml-3 text-appleblack'>Setting up of own and custom made servers with professionals.</p>
            <button className='text-center text-sm  md:text-md bg-blue-600 rounded-lg md:rounded-xl p-2 mt-5 ml-12 md:ml-[290px]'>Learn more</button>
            </div>

            <div className="card1 rounded-xl h-auto w-[300px] md:w-[400px] bg-white p-2">
            <img src='../images/server1.jpg' className=' rounded-xl' alt='card1'/>
            <h1 className='font-sans text-lg md:text-xl text-center mt-2 text-appleblack'>Custom Server Setup</h1>
            <p className='font-sans text-sm md:text-md text-start mt-2 ml-3 text-appleblack'>Setting up of own and custom made servers with professionals.</p>
            <button className='text-center text-sm  md:text-md bg-blue-600 rounded-lg md:rounded-xl p-2 mt-5 ml-12 md:ml-[290px]'>Learn more</button>
            </div>

            <div className="card1 rounded-xl h-auto w-[300px] md:w-[400px] bg-white p-2">
            <img src='../images/server1.jpg' className=' rounded-xl' alt='card1'/>
            <h1 className='font-sans text-lg md:text-xl text-center mt-2 text-appleblack'>Custom Server Setup</h1>
            <p className='font-sans text-sm md:text-md text-start mt-2 ml-3 text-appleblack'>Setting up of own and custom made servers with professionals.</p>
            <button className='text-center text-sm  md:text-md bg-blue-600 rounded-lg md:rounded-xl p-2 mt-5 ml-12 md:ml-[290px]'>Learn more</button>
            </div>

            <div className="card1 rounded-xl h-auto w-[300px] md:w-[400px] bg-white p-2">
            <img src='../images/server1.jpg' className=' rounded-xl' alt='card1'/>
            <h1 className='font-sans text-lg md:text-xl text-center mt-2 text-appleblack'>Custom Server Setup</h1>
            <p className='font-sans text-sm md:text-md text-start mt-2 ml-3 text-appleblack'>Setting up of own and custom made servers with professionals.</p>
            <button className='text-center text-sm  md:text-md bg-blue-600 rounded-lg md:rounded-xl p-2 mt-5 ml-12 md:ml-[290px]'>Learn more</button>
            </div>
            <div className="card1 rounded-xl h-auto w-[300px] md:w-[400px] bg-white p-2">
            <img src='../images/server1.jpg' className=' rounded-xl' alt='card1'/>
            <h1 className='font-sans text-lg md:text-xl text-center mt-2 text-appleblack'>Custom Server Setup</h1>
            <p className='font-sans text-sm md:text-md text-start mt-2 ml-3 text-appleblack'>Setting up of own and custom made servers with professionals.</p>
            <button className='text-center text-sm  md:text-md bg-blue-600 rounded-lg md:rounded-xl p-2 mt-5 ml-12 md:ml-[290px]'>Learn more</button>
            </div>
            <div className="card1 rounded-xl h-auto w-[300px] md:w-[400px] bg-white p-2">
            <img src='../images/server1.jpg' className=' rounded-xl' alt='card1'/>
            <h1 className='font-sans text-lg md:text-xl text-center mt-2 text-appleblack'>Custom Server Setup</h1>
            <p className='font-sans text-sm md:text-md text-start mt-2 ml-3 text-appleblack'>Setting up of own and custom made servers with professionals.</p>
            <button className='text-center text-sm  md:text-md bg-blue-600 rounded-lg md:rounded-xl p-2 mt-5 ml-12 md:ml-[290px]'>Learn more</button>
            </div>
        </div>
    </div>

    {/* SECTION 4 */}
    <div className="Section4WhyChooseUsh-auto w-full md:mt-5 p-5 flex flex-col md:flex-row gap-10 md:gap-20 justify-center items-center" data-aos="fade-up">
    <div className="left h-[200px] w-[350px] md:h-[350px] md:w-[500px]">
            <img src='../images/server1.jpg' className='rounded-xl h-[200px] w-[400px] md:h-[350px] md:w-[500px] ' alt='sec2img'/>
        </div>
        <div className="Righttexts w-[300px] md:w-[1000px]">
            <h1 className='font-titleFont text-2xl md:text-4xl text-appleblack'>WHY CHOOSE US ?</h1>
            <p className=' mt-5 md:mt-10 font-sans text-sm md:text-md text-appleblack'>Genuine Tech and Services Pvt. Ltd. is an IT service company dedicated to helping its customers get the best possible return on their investment in IT infrastructure.
We offer managed IT services for small to mid-sized organizations, businesses, and non-profit organizations. We deliver a variety of IT solutions including secure and reliable Computer Networks, Web Hosting, Website and Application Development, Surveillance, and more. We are highly dedicated to addressing your business and IT needs, so please don’t hesitate to contact us to schedule a free initial consultation. We will gladly meet you at your place to discuss how our IT services can aid your business to grow stronger, in light of your current resources and your existing business process.</p>
        </div>
    </div>

    {/* //SECTION-5 */}
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

{/* Section6 */}
<div className="CTA"data-aos="fade-up">
    <CallToAction/>
</div>

{/* Footer */}
<Footer/>

</div>
)
}

export default Home;