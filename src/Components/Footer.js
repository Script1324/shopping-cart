import React from 'react';
import "./Styles/Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Footer() {
  return <div className='footer-container'>
    
          <div className='socialmedia'>

                  <h2>Social</h2>
                  <div className='media-icons'>
                        <ul>
                          <li><a href=''><FacebookIcon/> </a></li>
                          <li><a href=''><YouTubeIcon/> </a></li>
                          <li><a href=''><TwitterIcon/> </a></li>
                          <li><a href=''><GitHubIcon/> </a></li>
                          <li><a href=''><InstagramIcon/> </a></li>
                          <li><a href=''><LinkedInIcon/> </a></li>
                          
                        </ul>          

                  </div>
          </div>

          <div className='footer-contacts'>
                <div><h4>@warren shopping cart</h4></div>
                
                <div className='contact-details'> 
                    <h4>
                    Contact no: 0930048309923
                    </h4>
                  </div>
          </div>
  </div>;
}

export default Footer;

