import React, { useState } from 'react';
import './Contact.css'; // Assuming you have the CSS file

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFocus = (e) => {
    e.target.parentNode.classList.add('focus');
  };

  const handleBlur = (e) => {
    if (e.target.value === '') {
      e.target.parentNode.classList.remove('focus');
    }
  };

  return (
    <div className="container">
      <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum adipisci recusandae praesentium dicta!
          </p>

          <div className="info">
            <div className="information">
              <i className="fas fa-map-marker-alt"></i> &nbsp &nbsp
              <p>92 Cherry Drive Uniondale, NY 11553</p>
            </div>
            <div className="information">
              <i className="fas fa-envelope"></i> &nbsp &nbsp
              <p>lorem@ipsum.com</p>
            </div>
            <div className="information">
              <i className="fas fa-phone"></i>&nbsp&nbsp
              <p>123-456-789</p>
            </div>
          </div>

          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="index.html" autoComplete="off">
            <h3 className="title">Contact us</h3>
            <div className="input-container">
              <input
                type="text"
                name="name"
                className="input"
                value={formData.name}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <label>Username</label>
              <span>Username</span>
            </div>
            <div className="input-container">
              <input
                type="email"
                name="email"
                className="input"
                value={formData.email}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <label>Email</label>
              <span>Email</span>
            </div>
            <div className="input-container">
              <input
                type="tel"
                name="phone"
                className="input"
                value={formData.phone}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <label>Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container textarea">
              <textarea
                name="message"
                className="input"
                value={formData.message}
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              <label>Message</label>
              <span>Message</span>
            </div>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
