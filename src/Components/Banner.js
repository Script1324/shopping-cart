import React from 'react'
import "./Styles/Banner.css"
import Menu from "./Menu"
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

function Banner() {
    
    return (
        
        <div className='Banner-Container'>
                    <Menu/>

                <div className='bannerImg'>
                        <img src="https://wallpaperaccess.com/full/1378929.jpg"/>
                </div>

                <div className='Banner-Description'>
                      <h1>Warren's E-Store</h1>
                        <h2>Everting you need is here</h2>
                      <h3 style={{color:'white'}}> Start Shopping Now</h3>
                     <button>Shop Now <ShoppingCartCheckoutIcon/></button>  
                </div>
              
        </div>
    )
}

export default Banner
