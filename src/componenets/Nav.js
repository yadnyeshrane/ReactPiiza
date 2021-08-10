import React from 'react'
import {Link} from 'react-router-dom'
export default function Nav() {
    const cartStyle={
        background:'yellow',
        display:"flex",
        padding:'6px 12px',
        borderRadius:'50px',
        
    }
    return (
        <>
           {/* <Link to="/">Home</Link>
           <Link to="/about">About</Link> */}
           <nav className="container mx-auto flex items-center justify-between py-4">
   
                 <Link to="/">
                     <img src="/images/logo.png" style={{height:45}}/>
                 </Link>
                 <ul className="flex items-center">
                     <li><Link to ="/">Home</Link></li>
                     <li><Link to ="/about">About</Link></li>
                     <li><Link to ="/product">product</Link></li>
                     <li><Link to ="/cart">
                         <div style={cartStyle}>
                                <span className="text-black mr-2">10</span>
                                <img src="/images/cart.png" />
                         </div>
                         </Link></li>
                 </ul>
               </nav>
        </>

    )
}
