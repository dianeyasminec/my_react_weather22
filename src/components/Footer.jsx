import React from 'react'

export default function Footer() {
  return (
    <div id='footer'>
   <div className="main-footer " > 
        <div className="container"> 
            <div className='row'> 
              <div className='col-sm-3 col-sm-3'> 
             
              <h4>Name </h4>
                <ul className="list-unstyled"> 
                     
                    <li>Diane Compaore</li>   
                    <li><a href="mailto:dianeyasminec60@gmail.com">Send email</a></li>       
                </ul>
            </div>  
            
              

             <div className='col-sm-3 col-sm-3'>  
              <h4>Socials</h4>
                
            </div>     
            <div className='col-sm-3 col-sm-3'>  
              <h4>Address</h4>
                <ul className="list-unstyled "> 
                    <li>New York, USA</li> 
                    <li>@Engineer</li>
                          
                </ul>
            </div> 
              
            </div>
            <div className="footer-bottom">
                <p className="text-start my-1"> 
                    &copy; {new Date().getFullYear()} Diane Compaore - All rights reserved.                
                </p>
            </div>
        </div>
   </div>
   </div>
  )
}