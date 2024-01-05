import React from "react";
import './contact.css'
// import Walmart from '../../assets/walmart.png'
// import Adobe from '../../assets/adobe.png'
// import Microsoft from '../../assets/microsoft.png'
import FacebookIcon from '../../assets/facebook-icon.png'
import Facebook from '../../assets/facebook.png'




function Contact() {
    return (
        <section className="contactPage">
            <div id="clients">
               <h1 className="contactPageTitle">
                  My Clients
               </h1>

               <p className="clientDesc">
                 I had some great opputunities working with a diverse group of companies
                 here are those
               </p>

               <div className="clientImgs"></div>
                       {/* <img src={Adobe} alt="" className="clientImg"/>
                       <img src={Walmart} alt="" className="clientImg"/>
                       <img src={Microsoft} alt="" className="clientImg"/> */}
                       <img src={Facebook} alt="" className="clientImg"/>
               </div>

            <div id="contact">

               <h1 className="contactPageTitle"> Contact Me </h1> 
               <span className="contactDes"> pls discuss for work oppurties </span>
               <form action="" className="contactForm">
                  <input type="text" className="name" placeholder="Your Name" />
                  <input type="text" className="email" placeholder="Your email"/>
                  <textarea className="msg" placeholder="your message" name="message" id rows="5"> </textarea>
                  <button className="submitBtn" type="submit" value="Send"> submit </button>
                  
                  <div className="links">
                    {/* <img src={FacebookIcon} className="link">  </img> */}
                    
                  </div>
               </form>


            </div>

        </section>
    )
}



export default Contact;