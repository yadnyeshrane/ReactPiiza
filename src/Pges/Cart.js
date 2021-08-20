import React from 'react'
import { useContext,useEffect } from 'react'
import { CartContext } from '../CartContext'

export default function Cart() {
    const[cart]=useContext(CartContext);

    useEffect(() => {
        if(!cart.items)
        {
            
        }
    }, [])

    return (
        <div className="container mx-auto lg:w-1/2 w-full pb-24">
            <h1>This is cart page</h1>
            <ul>
                <li className="mb-12">
                 <div className="flex items-center justify-between">
                    <div className="flex items-center"> 
                         <img src="/images/pizza.png" className="h-16" />
                         <span className="font-bold l-4 w-48 ">Double Peproni</span>
                    </div>
                    <div>
                        <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">-</button>
                        <b className="px-4">2</b>
                        <button className="bg-yellow-500 px-4 py-2 rounded-full leading-none">+ </button>
                    </div>
                    <span>$500</span>
                    <button className="bg-red-500 px-4 py-2 rounded-full leading-none text-white ">Delete</button>
                 </div>
                </li>
            </ul>
            <hr className="my-6"></hr>
            <div className="text-right">
                Grand Toatal:$8000
            </div>
            <div className="text-right mt-6">
                <button className="bg-pink-500 px-4 py-2 rounded-full leading-none text-white">OrderNow</button>
            </div>
        </div>
    )
}
