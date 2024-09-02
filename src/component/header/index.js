import React from 'react';
import Wide from './assets/wide2.jpg'
import '@fortawesome/fontawesome-free/css/all.min.css';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
     
      {/* Header */}
      <header className="bg-blue-700 p-5">
        <div className="flex justify-between items-center flex-wrap">
          <h1 className="text-2xl md:text-3xl font-bold text-purple-200">
            Cogni<span className="text-black">GenNxt</span>
          </h1>

          <nav className="mt-4 md:mt-0">
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-lg">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Pages</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${Wide})`, minHeight: '675px' }}
      >
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
          <p className="text-gray-300 text-2xl md:text-3xl font-bold">
            Best IT Solutions
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-black mt-4">
            An Innovative IT Solutions Agency
          </h2>
          <p className="mt-4 text-base md:text-lg max-w-2xl">
            Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut
            interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt.
          </p>
          <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-white text-black px-4 md:px-6 py-2 md:py-3 rounded-lg">
              Read More
            </button>
            <button className="bg-black text-white px-4 md:px-6 py-2 md:py-3 rounded-lg">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
