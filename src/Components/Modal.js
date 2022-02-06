import React from 'react'
import { useProvider } from './StateProvider'
import "./Styles/Modal.css"

import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

function Modal() {
    
    const{modal,toggleModal,state,deleteItem,increaseQty,decreaseQty,handlePrice,totalValue} = useProvider();

        console.log(state.cart)
        console.log(totalValue)

        const handleIncrease = (id) =>{
            increaseQty(id);
            handlePrice(id)
        }

        
        const handleDecrease = (id,qty) =>{
            decreaseQty(id,qty);
            handlePrice(id)
        }
    
    return (
        <>

      
        <div className={modal? "Modal-Container_active":"Modal-Container"} >

            <div className="Table-Container">
                <table width="100%">
                        <thead style={{backgroundColor:"rgb(233, 239, 241)"}}>
                            <tr>
                                <td style={{color:"orangered",fontWeight:"bold"}}>Cart Summary</td>
                                <td align='end' style={{color:"orangered"}}>
                                <IconButton onClick={toggleModal} aria-label="close" style={{color:"red"}}>
                                      <CloseIcon />
                                </IconButton>      
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                        
      
                 {state.cart.map((item)=>{
                     return  <tr key={item.id}>
                     <td colSpan={2} style={{backgroundColor:"whitesmoke"}}>
                     
                     <div className='cart-details'>
                         <div className='cartImg'>
                             <img src={item.image} alt="img"/>
                             <h4>{item.title}</h4>
                         </div>
                         <IconButton onClick={()=>deleteItem(item.id)} aria-label="delete" style={{color:"orangered"}}>
                             <DeleteIcon  />
                         </IconButton>                      
                     </div>

                     <div className='cart-actions'>
                         <div className='cart-quantity'>
                             <label style={{padding:"10px 0"}}>Quantity</label>
                             <div className='quantity_buttons'>
                             <button onClick={()=>handleIncrease(item.id)}>+</button> {item.prod_qty} <button onClick={()=> handleDecrease(item.id,item.prod_qty)}>-</button>                                           
                             </div>
                         </div>
                         
                         <div className='item-price'>
                                 <h4 style={{fontWeight:"100"}}>${item.total}</h4>
                         </div>
                     </div>

                    </td>
                 </tr>
             
                 })}
                                
                                </tbody>

                </table>
                </div>

                    <div className='Paycheck'>
                        
                        <section className='first-section'>
                           
                            <div style={{display:"flex",flexDirection:"column"}}>
                            <label>Shipping and taxes will be calculated at checkout.</label>
                            <h3>Total</h3>
                            </div>

                            <div>${totalValue}</div>
                       
                        </section>
                       
                        <section className='second-section'>
                        <Button variant="contained" style={{width:"100%"}} endIcon={<SendIcon />}>
                                 checkout
                        </Button>
                       
                        </section>

                    </div>
        </div>



        <div className='Modal-Backdrop' onClick={toggleModal}>

        </div>

        </>
    )
}

export default Modal
