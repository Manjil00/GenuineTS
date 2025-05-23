import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { Suspense, useEffect } from 'react';

//Components
import Nav from "../components/Nav";
const Footer= React.lazy(()=> import('../components/Footer'));

//Mockdata blogs
import { gtsBlog } from '../gtsBlog';

const Blog = () => {

const offset = 200;
const duration = 600;

useEffect(()=>{
    document.title = "Genuine Tech and Service";
    Aos.init({offset:10,duration:200});

},[offset,
    duration])


return (
    <div className='main-Blog w-full h-auto bg-Gts_white  '>
    <Nav/>

    <div className="body w-full h-auto p-5 flex flex-col justify-center items-center gap-5" data-aos="fade-up">
        {
            
        gtsBlog.map((item, index) => {
            return (
            <div key={item.index}
            className="BlogCard rounded-xl w-[300px] lg:w-[900px] h-[150px] p-3 flex items-center gap-8 bg-slate-300 mx-10" data-aos="fade-up">
            <img src={item.blogImage} className='h-[100px] w-[100px] rounded-xl' alt='blog1'/>
            <div className="blogtxt">
            <h1 className='font-sans text-sm lg:text-3xl text-start'>{item.blogTitle}</h1>
            <p className='font-sans text-xs lg:text-sm mt-5 text-start'>{item.blogContent}</p>
            </div>
            </div>
            )
        })
        }

    </div>

        <Suspense fallback={<div>Loading.....</div>}>
            <Footer/>
        </Suspense>
    </div>
)
}

export default Blog