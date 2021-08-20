import React,{useState,useEffect,useContext} from 'react'
import SingleProduct from '../Pges/SingleProduct';
import Axios from 'axios';
import {getMovie, getMovies} from "../services/pizApi" 
import { CartContext } from '../CartContext';


export default function ProductPages() {

    const {name}=useContext(CartContext)
    const[product,setProduct]=useState([]);
    useEffect(()=>{
        const dummyData=getMovies();
    
        setProduct(dummyData)

       
    },[])
    return (
        <div className="container pb-24 mx-auto">
            <h1 className="text-lg">Product</h1>
                <div className="grid grid-cols-5 my-8 gap-24">
                    
                    {
                      product.length>0?(product.map((data)=>(<SingleProduct pizzaData={data}/>))):"No data found"
                    }
                    {/* <SingleProduct/>
                    <SingleProduct/> */}
              

            </div>
        </div>
    )
}
