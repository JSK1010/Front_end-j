import React from 'react';
import { FiPhoneCall, FiMapPin, FiMail } from 'react-icons/fi';
import './ContactUsSection.Styles.scss';

const ContactUsSection = () => {
  return (
    <section className='contact-us-section'>
      <div className='contacts' data-aos="fade-up">
          <div className='contact'>
            <a href='tel:8807717720' className='contact-icon'>
              <FiPhoneCall />
            </a>
            <div className='contact-detail'>
              <span>Call Us</span>
              <span>+91 8807717720</span>
            </div>
          </div>
          <div className='contact'>
            <a href="mailto:convenor.vitecon@vit.ac.in" className='contact-icon'>
              <FiMail />
            </a>
            <div className='contact-detail'>
              <span>Write To Us</span>
              <span>convenor.vitecon@vit.ac.in</span>
            </div>
          </div>
          <div className='contact'>
            <a href='https://goo.gl/maps/uHeghJHkexEN4zR4A' target='_blanck' rel='noreferrer' className='contact-icon'>
              <FiMapPin />
            </a>
            <div className='contact-detail'>
              <span>Vellore Institute of Technology, </span>
              <span>Vellore- 632014</span>
            </div>
          </div>
      </div>
      <div className='details'>
        <div className='company-text' data-aos="fade-up">
          <div className='logo'>
            {/* <img src={logo} alt='logo' /> */}
          </div>
        </div>
        <div className='subscribe' data-aos="fade-up">
          <p className='subscribe-heading'>Dr. THANIKAISELVAN V</p>
          <p className='subscribe-text'>Conference Chair- ViTECoN 2023</p>
          <p className='subscribe-text'>Professor, School of Electronics Engineering</p>
          <p className='subscribe-text'>Assistant Director, Directorate of Quality Assurance and Accreditation</p>
          <p className='subscribe-text'>VIT, Vellore, TN, India </p>
          <p className='subscribe-text'>thanikaiselvan@vit.ac.in </p>
        </div>
      </div>
      <div className='footer'>
        Made to Perfection by <span><a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/yashwanth-kolli-b8b413208/'>Yashwanth Kolli</a> and <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/deepanshu-srivastava-94b533186/'>Deepanshu Srivatsava</a></span>
      </div>
    </section>
  )
}

export default ContactUsSection