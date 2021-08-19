import React,{useState,useEffect} from 'react'
import {useParams,useHistory} from 'react-router-dom'
import { getMovie, getMovies } from './pizApi'

export default function SinglePro() {
    const [pizaData,setPizaData]=useState({})
    const params=useParams()
    const usehis=useHistory();
    
    console.log(params)
    useEffect(()=>{
        const data=getMovie(params._id)
        console.log(data)
        setPizaData(data)
    },[])
    return (
        <div className="container max-auto mt-12">
            <button className="mb-12 font-bold" onClick={()=>{usehis.goBack()}}>Back</button>
            <div className="flex">
                <img src="/images/pizza.png" className="w-25"></img>
                <div className="ml-30">
                    <h1 className="text-xl font-bold">{pizaData.name}</h1>
                    <div className="text-md">
{pizaData.size}
                    </div>
                    <div className="font-bold mt-2">
              {pizaData.price}
                    </div>
                    <button className="bg-yellow-500 py-1 px-8 rounded-full">Add to cart</button>
                </div>
            </div>
        </div>
    )
}
