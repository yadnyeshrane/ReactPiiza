import React from 'react'
import SingleProduct from '../Pges/SingleProduct'

export default function ProductPages() {
    return (
        <div className="container pb-24 mx-auto">
            <h1 className="text-lg">Product</h1>
                <div className="grid grid-cols-5 my-8 gap-24">
                    <SingleProduct/>
              

            </div>
        </div>
    )
}
