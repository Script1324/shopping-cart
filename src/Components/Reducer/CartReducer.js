export const CartReducer = (state,action) =>{
        switch(action.type){
            case "ADD_TO_CART":
                 return{
                     ...state,
                    //we copy all the item in the cart then add the new object to it and increment its prod count
                     cart:[...state.cart,action.payload],
                     prod_Count: state.prod_Count + 1
                 }
             case "EXISTING_PRODUCT":
                 return {
                     ...state,
                     //loop through the array in the cart then deconstruct the item that is equal to id that we passed in the payload and increase the quantity of it
                     cart: state.cart.map((item)=>{
                            if(item.id === action.payload){
                                return {...item,prod_qty:item.prod_qty + 1}
                            }else{
                                return item
                            }
                     }),
                     prod_Count:state.prod_Count + 1
                     }
             case "DELETE_ITEM":
                return{
                    ...state,
                    //delete item in the cart
                    cart: state.cart.filter((item)=>{
                            return  item.id !== action.payload
                    }),
                    
                    prod_Count:state.prod_Count - 1
                }        
             
             case "INCREASE_QTY" :
                 return{
                     ...state,
                        //increase quantity
                        cart: state.cart.map((item)=>{
                            if(item.id === action.payload){
                               return {...item,prod_qty: item.prod_qty + 1}
                            }else{
                                return item;
                            }
                        }),
                        
                     prod_Count:state.prod_Count + 1
                 }
                
                 case "DECREASE_QTY":
                     return{
                    
                        ...state,
                         //decrease quantity
                         cart:state.cart.map((item)=>{
                           
                          if(item.id === action.payload){
                               return {...item,prod_qty:item.prod_qty -1}
                               
                          } 
                          else{
                            return item
                         }

                         }),        
                             prod_Count:state.prod_Count - 1
                     }

                        //this function will dispatch in the minus button if the value is 
                case "Check_QTY":
                    return{
                        ...state,
                        cart: state.cart.filter((item)=>{
                                return item.id !== action.payload.id
                        }),
                        prod_Count:state.prod_Count - 1
   
                    }
                        //we deconstruct the price and multupliy in our prod quantity
                case "HANDLE_PRICE":
                    return{
                        ...state,
                        cart: state.cart.map((item)=>{
                                if(item.id == action.payload){
                                    return {...item,total:Math.round(item.price * item.prod_qty)}
                                }else{
                                    return item
                                }
                        })
                    }


               default : return{
                   state
               }     
        }
}