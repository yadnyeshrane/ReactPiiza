import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import { useContext,useState } from "react";
export default function ({ pizzaData }) {
  const [adding,setAdding]=useState(false);
     const{cart,setCart}=useContext(CartContext);
     console.log(cart)
  console.log("produtcy", pizzaData);

  const addToCart=(e,product)=>{
    e.preventDefault()
    let _cart={...cart}
    // const cart={
    //   items{
    //     "1245":"1",
    //   }
    // }
    if(!_cart.items)
    {
      _cart.items={

      }
    }
    if(_cart.items[product._id])
    {
      _cart.items[product._id]+=1
    }
    else{
      _cart.items[product._id]=1
    }
    if(!_cart.totalItems)
    {
      _cart.totalItems=0;
    }
_cart.totalItems+=1;
setCart(_cart)
setAdding(true)
setTimeout(()=>{
setAdding(false)
},1000)
  }
  return (
   
    <Link to={ `/singlepro/${pizzaData._id}`}>
      <div>
        <img src="images/piz1.jpg"></img>
        <div className="text-center">
          <h2 className="py-2 text-lg font-bold"> {pizzaData.name}</h2>
          <span className="bg-gray-200 py-1 rounded-full text-smm px-4">
            {pizzaData.size}
          </span>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span>${pizzaData.price}</span>
          <button className={`${adding?'bg-green-500':'bg-yellow-500'} py-1 px-4 rounded-full font-bold`} onClick={(e)=>{addToCart(e,pizzaData)}}> 
            {" "}
            Add{" "}
          </button>
        </div>
      </div>
    </Link>
  );
}
