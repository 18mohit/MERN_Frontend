import axios from 'axios';
import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '', 
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/contactus/create', formData);

      console.log('Form submitted successfully:', response.data);
      // Optionally, clear the form or display a success message
      setFormData({
        name: '',
        email: '',
        number: '',
        message: '',
      });
    } catch (error) {
      console.error('Error during form submission:', error.response ? error.response.data : error.message);
    }
  };
  return (
    <div className='flex justify-center bg-slate-300 min-h-screen items-center'>
      <form className='bg-slate-100 w-[40vw] rounded-2xl m-[2vw] p-6 shadow-lg' onSubmit={handleSubmit}>
        <h1 className='flex justify-center text-2xl font-bold mb-4'>Contact Us</h1>
        
        <div className='m-[1vw]'>
          <label htmlFor="name" className='block mb-2 font-semibold'>Name:</label>
          <input
            onChange={handleChange}
            className='border p-2 rounded-md w-full'
            type="text"
            id="name"
            name="name"
            value={formData.name}
            required
          />
        </div>

        <div className='m-[1vw]'>
          <label htmlFor="email" className='block mb-2 font-semibold'>Email:</label>
          <input
            onChange={handleChange}
            className='border p-2 rounded-md w-full'
            type="email"
            id="email"
            name="email"
            value={formData.email}
          />
        </div>

        <div className='m-[1vw]'>
          <label htmlFor="number" className='block mb-2 font-semibold'>Number:</label>
          <input
            onChange={handleChange}
            className='border p-2 rounded-md w-full'
            type="number"
            id="number"
            name="number"
            value={formData.number}
            required
          />
        </div>

        <div className='m-[1vw]'>
          <label htmlFor="message" className='block mb-2 font-semibold'>Message:</label>
          <textarea
            onChange={handleChange}
            className='border p-2 rounded-md w-full h-32 resize-none'
            id="message"
            name="message"
            value={formData.message}
            required
          />
        </div>

        <div className='m-[1vw] flex justify-center'>
          <button
            type='submit'
            className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
