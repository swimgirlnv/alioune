// src/components/Contact.tsx

import React from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.section`
  padding: 100px 20px;
  background-color: #1d3557;
  color: #ffc300;
  text-align: center;
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;

  input, textarea {
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
  }

  button {
    padding: 10px;
    background-color: #e63946;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #d62828;
    }
  }
`;

const Contact: React.FC = () => (
  <ContactWrapper>
    <h2>Contact Alioune</h2>
    <p>
      For inquiries and bookings, please contact Alioune via email at <a href="mailto:alioune@example.com" style={{color: '#ffc300'}}>alioune@example.com</a> or fill out the contact form below.
    </p>
    <ContactForm>
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" rows={5} placeholder="Your Message" required></textarea>
      <button type="submit">Send Message</button>
    </ContactForm>
  </ContactWrapper>
);

export default Contact;
