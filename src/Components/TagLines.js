import React,{useEffect} from 'react';
import TagContents from './TagContents';
import "./Styles/TagLines.css"
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import Aos from "aos";
import "aos/dist/aos.css"


function TagLines() {

  useEffect(()=>{
    //initialize the aos here 
   Aos.init() 
})

  return <div className='TagLine-Container' data-aos="fade-up" > 
             <TagContents icon={<LocalAtmOutlinedIcon style={{color:"white",backgroundColor:"blue",width:"70%",height:"70%",borderRadius:"50%",padding:"5px"}}/>}/>
             <TagContents icon={<MapsUgcOutlinedIcon style={{color:"white",backgroundColor:"red",width:"70%",height:"70%",borderRadius:"50%",padding:"5px"}} />}/>
             <TagContents icon={<LocalShippingOutlinedIcon style={{color:"white",backgroundColor:"green",width:"70%",height:"70%",borderRadius:"50%",padding:"5px"}}/>}/>
          
  </div>;
}

export default TagLines;
