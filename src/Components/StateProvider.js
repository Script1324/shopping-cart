import React, { createContext, useContext,useEffect,useReducer,useState } from 'react'
import { CartReducer } from './Reducer/CartReducer'


const globalState = createContext()

export function StateProvider({children}) {

    //this will holds the our tota value price
    const [totalValue,setTotalValue] =  useState(0)
    const [products,setProducts] = useState([])
        
        useEffect(() => {
            
                fecthData();
            
        }, [])

        const  fecthData = async() =>{
            const data =  await fetch('https://fakestoreapi.com/products')
            const response = await data.json()
            setProducts(response)
        }

        //this is for the modal
        const[modal,setModal] = useState(false)

        const toggleModal = () =>{
            setModal(!modal)
        }

        //this is the reducer
         const[state,dispatch] = useReducer(CartReducer,{
             cart:[],
             prod_Count:0
         })

        const addToCart = (NewItem,id) =>{
            
                //find id the product is existing then do the logic
                const exist = state.cart.find((item)=>{
                        return item.id === id
                })

                if(exist){                        

                    dispatch({
                        type:"EXISTING_PRODUCT",
                        payload:id
                    })
                    
                }else{
                    
                dispatch({
                type:"ADD_TO_CART",
                payload:NewItem
                })
               
        }
            
            }

        const deleteItem = (id) =>{
            dispatch({
                type:"DELETE_ITEM",
                payload:id
            })

        }

        const increaseQty = (id) =>{
            dispatch({
                type:"INCREASE_QTY",
                payload:id
            })

        }

        

        const decreaseQty = (id,prodQty) =>{

            //check if the quantity then do the logic
            if(prodQty == 1){
                    
            dispatch({
                type:"Check_QTY",
                payload:{id,prodQty}
            })

            }else{
                
            dispatch({
                type:"DECREASE_QTY",
                payload:id
            })

            }
            
        }

        //this is for the pricce to handle the quantity anfd price
        const handlePrice = (id) =>{
                dispatch({
                    type:"HANDLE_PRICE",
                    payload:id
                })
        }

           //this is for the total of the item in the cart function
           const totalCost = () =>{
                let total = 0
            state.cart.forEach((item)=>{
              total = total + item.total     
           })
          
            setTotalValue(total)
    }
        //we used useEffect to run it each time our cart state changes
        useEffect(()=>{

            totalCost();
            
        
        },[state.cart])

       return (
        <div>

                <globalState.Provider value={{products,modal,toggleModal,addToCart,deleteItem,increaseQty,decreaseQty,handlePrice,totalValue,state:state}}>
                        {children}
                </globalState.Provider>

        </div>
    )
}

export const useProvider = () =>{
    return useContext(globalState)
}