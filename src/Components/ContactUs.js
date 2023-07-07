import React, { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://e-com-47543-default-rtdb.firebaseio.com/contacts.json',
        { name, email, phone }
      );

      if (response.status === 200) {
        alert('Form submitted successfully!');
        setName('');
        setEmail('');
        setPhone('');
      } else {
        alert('Failed to submit form. Please try again.');
      }
    } catch (error) {
      alert('Failed to submit form. Please try again.');
    }
  };

  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="phone">Phone Number:</label>
        <input
          type="tel"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
