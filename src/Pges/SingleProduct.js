import React from 'react'

export default function  ({pizzaData}) {
    console.log('produtcy', pizzaData)
    return (
        <div>
                  <img src="images/piz1.jpg"></img>
                  <div className="text-center">
                  <h2  className="py-2 text-lg font-bold"> Haerayani sepeical</h2>
                  <span className="bg-gray-200 py-1 rounded-full text-smm px-4">Small</span>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4">
                      <span>$500</span>
                      <button className="py-1 px-4 bg-yellow-500 rounded-full font-bold"> Add </button>
                  </div>
                </div>
    )
}
