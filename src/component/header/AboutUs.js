import React from 'react';
import About from './assets/about1.jpeg'

const AboutUs = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-row items-center px-6 md:px-12 lg:px-24">
        {/* Left Section with Background Image */}
        <img src={About} alt='' className='h-96 w-2/4 pr-10'/>

        {/* Right Content Section */}
        <div className="w-full md:w-1/2">
          <h3 className="text-blue-600 font-semibold text-lg mb-2">About Us</h3>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            About CogniGenNxt Agency And Its Innovative IT Solutions
          </h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur quis purus ut interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt. Nam volutpat libero sit amet leo cursus, ac viverra eros tristique. Morbi quis quam mi. Cras vel gravida eros. Proin scelerisque quam nec elementum viverra. Suspendisse viverra hendrerit diam in tempus.
          </p>
          <p className="text-gray-600 mb-6">
            Pellentesque aliquam dolor eget urna ultricies tincidunt. Nam volutpat libero sit amet leo cursus, ac viverra eros tristique. Morbi quis quam mi. Cras vel gravida eros. Proin scelerisque quam nec elementum viverra. Suspendisse viverra hendrerit diam in tempus. Etiam gravida justo nec erat vestibulum, et malesuada augue laoreet.
          </p>
          <button className="bg-black text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-green-600 transition duration-300">
            More Details
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
