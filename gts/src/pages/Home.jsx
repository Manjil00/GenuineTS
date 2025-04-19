import React, { Suspense, useEffect } from 'react';
//Components
import Count from '../components/Count';
import Nav from '../components/Nav';
const Services = React.lazy(()=>import('../components/Services'));
const Testimonials = React.lazy(()=>import('../components/Testimonials'));
const Footer = React.lazy(()=>import('../components/Footer'));
const CallToAction = React.lazy(()=>import('../components/CallToAction'));

import Aos from 'aos';
import 'aos/dist/aos.css';

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
    <div className="Section1 h-[350px] lg:h-[450px] w-full relative bg-gradient-to-tr from-Gts_blue to-Gts_blue2 ">
            <img src='../images/main_photo.jpg' className='w-full h-[350px] lg:h-[450px] opacity-80' alt='main_photo'/>
        <div className="texts text-white absolute  top-3 left-10  lg:top-[100px] lg:left-[300px] mt-12 lg:mt-14 flex justify-start items-center gap-[20px] lg:gap-[300px]">
            <div className="left1 text-center">
                <h1 className='text-xl lg:text-5xl font-titleFont text-appleblack'>"Your Server Doctor"</h1>
                <p className='text-xs lg:text-xl mt-5 break-words w-[300px] lg:w-[900px] text-start text-appleblack'>Genuine Tech and Services delivers high-performance servers and expert configuration solutions tailored to power businesses of all sizes. From custom-built servers to seamless setup and ongoing support, our team ensures reliable, optimized infrastructure so you can operate securely and efficiently.</p>
            </div>
        </div>
        
        <div className="Countup_compoennt absolute bottom-[-15%] inset-x-0 w-full">
            <Count/>
        </div>
    </div>

    {/* //SECTION2 */}
    <div className="Section2 h-auto w-full mt-20 p-4 flex flex-col lg:flex-row gap-10 lg:gap-20 justify-center items-center" data-aos="fade-up">
        <div className="left h-[200px] w-[350px] lg:h-[350px] lg:w-[350px]">
            <img src='../images/server1.jpg' className='rounded-xl h-[200px] w-[400px] lg:h-[350px] lg:w-[350px] ' alt='sec2img'/>
        </div>
        <div className="Righttexts w-[300px] lg:w-[1000px]">
            <h1 className='font-sans text-2xl lg:text-4xl text-appleblack'>Genuine Tech and Services Pvt. Ltd.</h1>
            <p className=' mt-5 lg:mt-10 font-sans text-sm lg:text-lg text-appleblack'>Genuine Tech and Services Pvt. Ltd. is an IT service company dedicated to helping its customers get the best possible return on their investment in IT infrastructure.
We offer managed IT services for small to mid-sized organizations, businesses, and non-profit organizations. We deliver a variety of IT solutions including secure and reliable Computer Networks, Web Hosting, Website and Application Development, Surveillance, and more. We are highly dedicated to addressing your business and IT needs, so please don’t hesitate to contact us to schedule a free initial consultation. We will gladly meet you at your place to discuss how our IT services can aid your business to grow stronger, in light of your current resources and your existing business process.</p>
        </div>
    </div>

    {/* SECTION3 SERVICES */}
    <Suspense fallback={<div>Loading.....</div>}>
        <Services/>
    </Suspense>

    {/* SECTION 4 */}
    <div className="Section4WhyChooseUsh-auto w-full lg:mt-5 p-5 flex flex-col lg:flex-row gap-10 lg:gap-20 justify-center items-center" data-aos="fade-up">
    <div className="left h-[200px] w-[350px] lg:h-[350px] lg:w-[500px]">
            <img src='../images/server1.jpg' className='rounded-xl h-[200px] w-[400px] lg:h-[350px] lg:w-[500px] ' alt='sec2img'/>
        </div>
        <div className="Righttexts w-[300px] lg:w-[1000px]">
            <h1 className='font-titleFont text-2xl lg:text-4xl text-appleblack'>WHY CHOOSE US ?</h1>
            <p className=' mt-5 lg:mt-10 font-sans text-sm lg:text-lg text-appleblack'>Genuine Tech and Services Pvt. Ltd. is an IT service company dedicated to helping its customers get the best possible return on their investment in IT infrastructure.
We offer managed IT services for small to mid-sized organizations, businesses, and non-profit organizations. We deliver a variety of IT solutions including secure and reliable Computer Networks, Web Hosting, Website and Application Development, Surveillance, and more. We are highly dedicated to addressing your business and IT needs, so please don’t hesitate to contact us to schedule a free initial consultation. We will gladly meet you at your place to discuss how our IT services can aid your business to grow stronger, in light of your current resources and your existing business process.</p>
        </div>
    </div>

    {/* //SECTION-5 */}
    <Suspense fallback={<div>Loading.....</div>}>
        <Testimonials/>
    </Suspense>

{/* Section6 */}
<div className="CTA"data-aos="fade-up">
<Suspense fallback={<div>Loading.....</div>}>
    <CallToAction/>
</Suspense>
</div>

{/* Footer */}
<Suspense fallback={<div>Loading.....</div>}>
<Footer/>
</Suspense>

</div>
)
}

export default Home;