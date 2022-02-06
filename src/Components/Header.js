import React from 'react'
import "./Styles/Header.css"
import SearchIcon from '@mui/icons-material/Search';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Avatar } from '@mui/material';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { useProvider } from './StateProvider';


function Header() {

    const {toggleModal,state} =  useProvider()

    return (
        <div className="Header-Container">
          
            <div className="Header-Logo">
            <LogoDevIcon/>
                   
            </div>

            <div className='Header-Search'>
            <TextField label="Search Products" fullWidth size={'small'} color="primary" focused /> <Button variant="contained"><SearchIcon/></Button>
            </div>

            <div className="Header-Icons">
                   
                    <section>
                      <label style={{color:"orangered"}}>{state.prod_Count}</label>
                             <ShoppingCartIcon onClick={toggleModal}/>  

                        <Avatar/>
                    </section>

                    <section>
                       <h3 style={{color:"gray",fontWeight:"100"}}> welcome </h3> 
                        <h4 style={{fontWeight:"100",letterSpacing:".5px",textTransform:"capitalize"}}>sign in | register</h4>
                    </section>
            </div>


        </div>
    )
}

export default Header
    