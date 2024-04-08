import React from 'react'
import '../Contact/Contact.css'

function Contact() {
  return (
      
        <div className='container'>
          <div className='contact-box'>
          <div className='left'>
          <iframe
                  className="contact-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4735.0474865621845!2d90.37422302628654!3d23.8721103093924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c40ed3c3c18b%3A0x9521b4915bd8ee05!2sUttara%20Sector-12%20Society!5e0!3m2!1sen!2sbd!4v1700551842504!5m2!1sen!2sbd"
                  
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title='Our Location on Google Maps'
                ></iframe>
          </div>
          <div className='right'>
           <h2>Contact Us</h2>
           <input type="text" className='field' placeholder='Enter your Name' />
           <input type="text" className='field' placeholder='Enter your Email' />
           <input type="text" className='field' placeholder='Enter your Phone' />
           <textarea className="field"  placeholder="Message" cols="30" rows="10"></textarea>
           <button className='btn'>Send</button>

          </div>
          </div>
          
            
        </div>
  
  

  )
}

export default Contact