// src/components/About.js
import React from 'react';
import Header from './Header'; // Import the Header component
import '../styles/Contact.css';

const Contact = () => {
  return (
    <>
      <Header /> {/* Include the Header component */}
      <div className="page-container contact-container">
      <h1>Contact Me</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" placeholder='name'/>
        </label>
        <label>
          Email:
          <input type="email" name="email" placeholder='enter_your_mail@gmail.com' />
        </label>
        <label>
        </label>
          <textarea name="message" placeholder='Enter Your Message'></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
    </>
  );
}

export default Contact;
