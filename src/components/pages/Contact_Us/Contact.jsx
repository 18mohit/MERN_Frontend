import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner'; // Optional for notifications
import { useNavigate } from 'react-router-dom'; // For navigation

export const ContactUs = () => {
  const form = useRef();
  const navigate = useNavigate(); // Initialize navigate function

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_57oopvl', // Replace with your EmailJS service ID
        'template_ycitcul', // Replace with your EmailJS template ID
        form.current,
        'EswSaZPN1he0_8pT-' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          toast.success('Email sent successfully!');
          form.current.reset(); // Reset the form fields
          navigate('/'); // Redirect to home page
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Email failed to send.');
          form.current.reset(); // Clear form fields in case of error
        }
      );
  };

  return (
    <div className="flex justify-center bg-slate-300 items-center">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-slate-100 w-[80vw] sm:w-[40vw] m-[7vw] sm:m-[2vw] rounded-2xl p-6 shadow-lg"
      >
        <h1 className="flex justify-center text-2xl font-bold mb-4">Contact Us</h1>

        <div className="m-[1vw]">
          <label htmlFor="from_name" className="block mb-2 font-semibold">Name:</label>
          <input
            type="text"
            name="from_name"
            className="border p-2 rounded-md w-full"
            required
          />
        </div>

        <div className="m-[1vw]">
          <label htmlFor="from_email" className="block mb-2 font-semibold">Email:</label>
          <input
            type="email"
            name="from_email"
            className="border p-2 rounded-md w-full"
            required
          />
        </div>
        <div className="m-[1vw]">
          <label htmlFor="number" className="block mb-2 font-semibold">Number: (Optional)</label>
          <input
            type="number"
            name="number"
            className="border p-2 rounded-md w-full"
          />
        </div>

        <div className="m-[1vw]">
          <label htmlFor="message" className="block mb-2 font-semibold">Message:</label>
          <textarea
            name="message"
            className="border p-2 rounded-md w-full h-32 resize-none"
            required
          />
        </div>

        <div className="m-[1vw] flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
