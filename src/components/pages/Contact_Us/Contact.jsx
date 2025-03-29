import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner'; // Optional for notifications
import { useNavigate } from 'react-router-dom'; // For navigation
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

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
    <div className="flex font-serif flex-col items-center bg-[#1f4c66] py-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-2xl nska_footer text-black mb-6">Feel free to reach out to us through any of the following methods:</p>

      <div className="flex md:flex-row gap-3 flex-col text-xl mb-6">
        <a href="https://wa.me/918160005063" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-green-500 text-white p-2 rounded-lg hover:bg-green-600">
          <FaWhatsapp /> <span>+91 8160005063</span>
        </a>
        <a href="https://www.instagram.com/koutsuku9" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 bg-pink-500 text-white p-2 rounded-lg hover:bg-pink-600">
          <FaInstagram /> <span>@koutsuku9</span>
        </a>
        <a href="mailto:koutsuku9@gmail.com" className="flex items-center space-x-2 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
          <FaEnvelope /> <span>koutsuku9@gmail.com</span>
        </a>
      </div>
      <p className="text-2xl nska_footer text-black text-center">
  Or <br /> fill this form, we will reach out to you.
</p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-[#7d8c96] w-[80vw] sm:w-[40vw] p-6 rounded-2xl shadow-lg"
      >
        <div className="mb-4">
          <label htmlFor="from_name" className="block mb-2 font-semibold">Name:</label>
          <input
            type="text"
            name="from_name"
            className="border p-2 rounded-md w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="from_email" className="block mb-2 font-semibold">Email:</label>
          <input
            type="email"
            name="from_email"
            className="border p-2 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="number" className="block mb-2 font-semibold">Phone Number: (Optional)</label>
          <input
            type="number"
            name="number"
            className="border p-2 rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block mb-2 font-semibold">Message:</label>
          <textarea
            name="message"
            className="border p-2 rounded-md w-full h-32 resize-none"
            required
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
