import React, { useEffect } from 'react';
import "./Styles/ProductCardDetails.css"
import { Link } from 'react-router-dom';
import Aos from "aos";
import { useLocation } from 'react-router-dom';
import "aos/dist/aos.css"
import { useProvider } from './StateProvider';


//this function is for the product card details
function ProductCardDetaills() {

                const{toggleModal,addToCart} = useProvider()
        useEffect(()=>{
                //initialize the aos here 
               Aos.init() 
        })

        //use useLocation to acces the state that you pass in the Link
        const {product} = useLocation().state;

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




  return <div className='productDetail-container' data-aos="zoom-in">
          
          <div className='productContainer'>

                  <div className='prod_Img'>
                        <div className='imageContainer'>
                          
                        <img src={product.image} alt="img gpes here"/>
                        
                        </div>

                     <Link to="/">  <button className='back'>Back</button> </Link>
                  </div>

                  <div className='prodDescription'>
                        <h2>{product.title}</h2>
                        <h3>${product.price}</h3>
                        <h6>{product.rating.rate} star</h6>
                        <p>
                          {product.description}
                        </p>

                        <button onClick={Toggle_Add}>
                            Add to Cart
                        </button>
                  </div>
          </div>
  
  </div>

}

export default ProductCardDetaills;
