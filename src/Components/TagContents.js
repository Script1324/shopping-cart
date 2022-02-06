import React from 'react';
import "./Styles/TagContents.css"

function TagContents({icon,header,content}) {
  return <div className='TagContents-Container'> 
           <div className='TagContents-Icon'>
                    {icon}
           </div>
           <div className='TagContents-description'>
                    <h4>Reasonabla Prices</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labor</p>
           </div>
  </div>;
}

export default TagContents;
