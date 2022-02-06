import React,{useEffect,useState} from 'react'
import "./Styles/Menu.css"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useProvider } from './StateProvider';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import ClearIcon from '@mui/icons-material/Clear';

function Menu() {


     const {toggleModal,state} =  useProvider()

        const [toggle,setToggle] = useState(true)

    const toggleMenu = () =>{
            setToggle(!toggle)
    }

    return (
        <div className='Menu-Container'>
               <ul>
                   <li className='IconMenu' style={{paddingLeft:"0"}}>
                      {toggle ?  <MenuOutlinedIcon onClick={toggleMenu} /> : <ClearIcon onClick={toggleMenu} />  } <p style={{marginLeft:"5px"}}>Categories</p></li>
                   
                    <div className={toggle ? "drop-list": "drop-list_active"}>
                        
                       <li>Electronics</li>
                        <li >Jewelery</li>
                        <li >Men's Clothing</li>
                        <li> Women's Clothing</li>
                        <li>this is added</li>
                   
                   </div>
               </ul>

               <section>
                            <SearchIcon/>
                      <label style={{color:"white",marginLeft:"20px",fontWeight:"bold"}}>{state.prod_Count}</label>
                             <ShoppingCartIcon style={{color:"rgb(236, 52, 39)"}} onClick={toggleModal}/>  
                        

                        
                  </section>

        </div>
    )
}

export default Menu
