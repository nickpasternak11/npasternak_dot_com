import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import '../assets/styles/Contact.scss';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Feel free to reach out — I'm always open to interesting conversations and opportunities.</p>
          <div className="contact-info">
            <a href="mailto:nick.pasternak11@gmail.com" className="contact-link">
              <EmailIcon /> nick.pasternak11@gmail.com
            </a>
            <span className="contact-link">
              <LocationOnIcon /> Washington, D.C.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
