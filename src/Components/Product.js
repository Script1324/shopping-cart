import { Button } from '@mui/material'
import React from 'react'
import "./Styles/Product.css"

import ProductCard from "./ProductCard"
import { useProvider } from './StateProvider'


function Product() {

    const{products} = useProvider()

    
        
    return (

            <div  className='Product-Container'>
            

                <div className='Product-Header'>
                    <h2>Popular Product</h2>
                    <Button variant="outlined">See all</Button>
                </div>

            <div className='Card-Container'>
            
                {products.map((product)=>{
                    return <ProductCard key={product.id} product={product}/>
                })}
       
       

            </div>

             </div>
    )
}

export default Product
