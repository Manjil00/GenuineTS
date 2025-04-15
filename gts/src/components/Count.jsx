import React from 'react'
import CountUp from 'react-countup'


const Count = () => {
return (
        <div className="countups flex justify-center items-center gap-5 absolute bottom-0 inset-x-0 w-full">
        <div className='cards h-[100px] w-[100px] md:h-[130px] md:w-[190px] bg-Gts_blue cursor-pointer hover:bg-gradient-to-tr from-Gts_blue to-purple-400 rounded-xl p-3'>
                <h1 className='text-center md:mt-2 text-xl md:text-4xl font-bold text-white '>
                <CountUp end={25} duration={6}></CountUp>+</h1>
                <p className='text-center mt-3 break-words text-xs md:text-xl font-semibold text-white'>Happy Clients</p>
        </div>
        <div className='cards2 h-[100px] w-[100px] md:h-[130px] md:w-[190px] bg-Gts_blue cursor-pointer hover:bg-gradient-to-tr from-Gts_blue to-purple-400  rounded-xl p-3'>
                <h1 className='text-center md:mt-2 text-xl md:text-4xl font-bold text-white'>
                <CountUp end={100} duration={6}></CountUp>+</h1>
                <p className='text-center mt-3 break-words text-xs md:text-xl font-semibold text-white'>Maintained Servers</p>
        </div>
        <div className='cards3 h-[100px] w-[100px] md:h-[130px] md:w-[190px] bg-Gts_blue cursor-pointer hover:bg-gradient-to-tr from-Gts_blue to-purple-400 rounded-xl p-3'>
                <h1 className='text-center md:mt-2 text-xl md:text-4xl font-bold text-white'>
                <CountUp end={25} duration={6}></CountUp>+</h1>
                <p className='text-center mt-3 break-words text-xs md:text-xl font-semibold text-white'>Projects Completed</p>
        </div>
</div>
)
}

export default Count;