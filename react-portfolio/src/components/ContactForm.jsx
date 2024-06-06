// src/components/ContactForm.jsx
import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';


const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setErrors({ ...errors, [name]: `${name} is required` });
    } else {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
    .sendForm('service_i0494l8', 'template_ahwdvpg', form.current, {
      publicKey: 'jvVqj93WmfXRzqSva',
    })
    .then(
      () => {
        console.log('SUCCESS!');
        setFormData({ name: '', email: '', message: '' })
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );


    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit}ref={form}>
      <div>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Message</label>
        <textarea name="message" value={formData.message} onChange={handleChange} onBlur={handleBlur} />
        {errors.message && <span>{errors.message}</span>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
