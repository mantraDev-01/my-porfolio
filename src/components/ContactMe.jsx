import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_061204',     
      'template_50o5mka',     
      form.current,
      'h_dhCDOe19kjf_TnR'       
    ).then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
        form.current.reset();
    }, (error) => {
        console.log(error.text);
        alert("Something went wrong. Please try again.");
    });
  };

  return (
    <form ref={form} onSubmit={sendEmail} id='contact' className="flex flex-col space-y-4 w-full max-w-md mx-auto p-6  rounded-lg shadow-md bg-radial-[at_25%_25%] from-gray-700 to-zinc-900 to-75% text-gray-300 mb-40">
      <h2 className="text-xl font-semibold text-center">Contact Me</h2>
      <input type="text" name="user_name" placeholder="Your Name" required className="p-2 border rounded" />
      <input type="email" name="user_email" placeholder="Your Email" required className="p-2 border rounded" />
      <textarea name="message" rows="5" placeholder="Your Message" required className="p-2 border rounded"></textarea>
      <button type="submit" className="bg-black text-white py-2 rounded hover:bg-yellow-600 transition">Send</button>
    </form>
  );
};

export default ContactForm;
