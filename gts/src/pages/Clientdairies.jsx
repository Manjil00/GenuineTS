import React, { Suspense } from 'react'

//components
import Nav from '../components/Nav'
const Footer = React.lazy(()=>import( '../components/Footer'));

const Clientdairies = () => {
return (
    <div className='mainClientdairy'>
    <Nav/>
    <div className="body">

    </div>
    <Suspense fallback={<div>Loading.....</div>}>
        <Footer/>
    </Suspense>
    </div>
)
}

export default Clientdairies;