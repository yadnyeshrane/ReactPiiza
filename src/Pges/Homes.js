import React from 'react'
import ProductPages from '../componenets/ProductPages'


export default function Homes() {
    return (
        <>
        <div className="hero py-16">
        <div className="container mx-auto flex
        items-center justify-between" >
            <div className="w-1/2">
          <h6 className="text-lg"><em>Are You Hungry </em></h6>
          <h1 className="text=3xl md:text-61 font-bold">Do not wait</h1>
          <button className="px-6 py-2 rounded-full text-white font-bold mt-4 bg-yellow-500">OrderNow</button>
            </div>
            <div className="w-1/2">
             <img src="images/pizza.png" className="w-4/5"/>
            </div>
        </div>
        </div>
        <div className="pb-24">
        <ProductPages/>
        </div>
        </>
    )
} 
