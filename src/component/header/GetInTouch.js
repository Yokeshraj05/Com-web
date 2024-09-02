import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import ContactInfoCard from './ContactInfoCard';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="text-center mb-8">
        <h1 className="text-blue-600 text-2xl font-bold">Get In Touch</h1>
        <h2 className="text-3xl font-bold mb-4">Contact for any query</h2>
        <p className="text-gray-600 mb-8">
          The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. 
          <a href="#" className="text-blue-600 underline">Download Now.</a>
        </p>
      </header>

      <section className="flex flex-col md:flex-row justify-center">
        <ContactInfoCard 
          icon={<FaMapMarkerAlt />} 
          title="Address" 
          text="23 rank Str, NY" 
        />
        <ContactInfoCard 
          icon={<FaPhoneAlt />} 
          title="Call Us" 
          text="+012 3456 7890" 
        />
        <ContactInfoCard 
          icon={<FaEnvelope />} 
          title="Email Us" 
          text="info@example.com" 
        />
      </section>

      <section className="mt-12 flex justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Your Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Your Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="project">Project</label>
            <input
              id="project"
              name="project"
              type="text"
              value={formData.project}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Project"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Your Message"
              rows="4"
              required
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default GetInTouch;
