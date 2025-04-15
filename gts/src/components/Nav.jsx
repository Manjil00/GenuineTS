import React, { useState } from 'react';
import { RxCross1, RxHamburgerMenu } from "react-icons/rx"; //ICONS
import { Link } from 'react-router-dom';


const Nav = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
const toggleNavMenu = () => setIsNavOpen(!isNavOpen);

return (
    <nav className="flex justify-between px-6 py-3 z-50 relative bg-Gts_white ">
    <div className="flex justify-center items-center">
        <img src="/images/gtslogo.jpg"  className="w-[50px] h-[50px] mr-3" alt="Logo" />
        {/* <h1 className='text-appleblack ml-6  text-sm lg:text-3xl
cursor-pointer flex justify-center items-center font-sans'>Genuine Tech & Services</h1> */}

    </div>
    <div className={`bg-Gts_white text-black bg-white absolute min-h-[30vh] left-0 top-[90%] w-full p-5 flex flex-col lg:static lg:flex lg:min-h-fit lg:w-auto gap-9 text-sm ${isNavOpen ? 'block' : 'hidden'}`}>
        <ul className=" cursor-pointer flex flex-col gap-4 lg:flex-row  lg:gap-8 lg:justify-evenly lg:text-lg">
        <Link to="/"><li className="hover:text-blue-500">Home</li></Link>
        <Link to="/Services"><li className="hover:text-blue-500">Services</li></Link>
        <Link to="/Blog"><li className="hover:text-blue-500">Blogs</li></Link>
        <Link to="/AboutUs"><li className="hover:text-blue-500">About us</li></Link>
        <Link to="/ClientDairies"><li className="hover:text-blue-500e">Client Dairies</li></Link>
        <Link to="/Contact"><li className="hover:text-blue-500">Contact Us</li></Link>
        </ul>
    </div>
    <div>
        <button onClick={toggleNavMenu} className="lg:hidden">
            {
            isNavOpen ? <RxCross1 className="text-2xl text-black" /> :
            <RxHamburgerMenu className={`text-2xl text-black  ${isNavOpen ? 'hidden' : 'block'}`} />
            }
        </button>
    </div>
</nav>
)
}

export default Nav;