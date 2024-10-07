import React from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

export function Contact(){

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "10f2cd25-ef19-4c09-9729-4ff175fd2b13");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };

    return (
        <div id='contact' className="contact">
            <div className="contact-title">
                {/* <h2>get in touch</h2> */}
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <p>Message me through the channels below, or send an email using the form</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> <p>rachel.liu.1688@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p>650-627-6622</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /> <p>Brooklyn, NY, USA</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor=''>Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name'/>
                    <label htmlFor=''>Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email'/>
                    <label htmlFor=''>Write your message here</label>
                    <textarea name="message" rows="5" placeholder='Enter your message'></textarea>
                    <button type='submit' className="contact-submit">Submit now</button>
                </form>
            </div>
        </div>
  )
}