import React from 'react';
import '../styles/ContactUs.css';

const ContactUs = () => {
  return (
    <div className='contact-us'>
      <h2>Contact Us</h2>
      <p>
        For any questions or inquiries, and more information, please feel free to contact us through the following channels:
      </p>
      <div align="center">
        <a href="https://www.instagram.com/makers_assemble_5951"><img src="/icons/instagram.png" alt="Instagram" width="40"/></a>
        <a href="https://www.linkedin.com/in/frc-team-62b546240/"><img src="/icons/linkedin.png" alt="LinkedIn" width="40"/></a>
        <a href="https://www.facebook.com/Makers.Assemble"><img src="/icons/facebook.png" alt="Facebook" width="40"/></a>
        <a href="https://github.com/MA5951"><img src="/icons/github.png" alt="Github" width="40"/></a>
        <a href="https://www.youtube.com/@MakersAssemble5951"><img src="/icons/youtube.png" alt="Youtube" width="40"/></a>
        <a href="https://www.tiktok.com/@makersassemble"><img src="/icons/tiktok.png" alt="Tiktok" width="40"/></a>
        <a href="https://makersassemble5951.com/"><img src="/icons/internet.png" alt="Website" width="40"/></a>
        <a href="mailto:ma-5951@tichonet.com"><img src="/icons/mail.png" alt="Email" width="40"/></a>
      </div>
    </div>
  );
};

export default ContactUs;
