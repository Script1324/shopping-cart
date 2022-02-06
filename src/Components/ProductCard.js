import React,{useEffect} from 'react'
import { useProvider } from './StateProvider'
import "./Styles/ProductCard.css"
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Aos from "aos";
import "aos/dist/aos.css"


function ProductCard({product}) {

        useEffect(()=>{
                //initialize the aos here 
               Aos.init({duration:1000}) 
            })

        const{toggleModal,addToCart} = useProvider()

        //execute two functions together
        const Toggle_Add = () =>{
                        
                const NewItems = 
                                {
                                        category:product.category,
                                        description:product.description,
                                        id:product.id,
                                        image:product.image,
                                        price:product.price,
                                        rating:[{
                                                count:product.rating.count,
                                                rate:product.rating.rate,
                                        }],
                                        title:product.title,
                                        prod_qty: 1,
                                        total:product.price
                                }
                

                toggleModal();
                addToCart(NewItems,product.id);
        }

    return (
        <div className='ProductCard-Container' data-aos="zoom-in-up">

                <div className='ProductImg-Container'>
                        <img src={product.image}/>
                     
                        <div className='viewMore'>
                           <Link to={`productDetail/${product.title}`} state={{product}} style={{textDecoration:"none"}}>  <button>View more details 
                                   <RemoveRedEyeIcon style={{marginLeft:"5px"}}/> </button> </Link>
                        </div>
                </div>

                <div className='Product-Description'>
                        <h5 style={{paddingTop:"9px"}}>{product.title}</h5>
                        <h4>${product.price}</h4>
                    
                       
                      <Button size="small" variant="outlined"  onClick={Toggle_Add}>add to cart</Button>
                </div>
        </div>
    )
}

export default ProductCard
