import React from 'react';
import Wide from './assets/wide2.jpg'

const HomePage = () => {
  return (
     <div className="min-h-screen bg-gray-900 text-white">
       {/*<div className="bg-black p-2 flex justify-between items-center text-sm">
        TopBar 
         <div className="flex items-center space-x-4">
           <span>13 ovvaiyar Street, senjai, karaikudi</span>
           <span>admin@cognigenxnt.com</span>
         </div>
         <div className="flex items-center space-x-4">
           <span>Note: We help you</span>
           <span>Have any questions? Call: +91 8939797000/+91 9361353342</span>
         </div>
       </div>*/}

      {/* Header */}
      <header className="bg-blue-700 p-5">
        <div className="flex justify-between items-center">
          <h1><span className="text-3xl font-bold text-purple-200 ">Cogni</span><span className="text-3xl font-bold text-black">GenNxt</span></h1>
          
          <nav>
            <ul className="flex space-x-8 text-lg">
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
      <section className="relative" style={{backgroundImage:`url(${Wide})`,height:'675px'}}>
        <div className="w-full h-[500px] "></div>
    
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <p className="text-gray-300 text-3xl font-bold">Best IT Solutions</p>
          <h2 className="text-5xl font-extrabold text-black">An Innovative IT Solutions Agency</h2>
          <p className="mt-4 text-lg max-w-2xl">Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Pellentesque aliquam dolor eget urna ultricies tincidunt.</p>
          <div className="mt-6 flex space-x-4">
            <button className="bg-white text-black px-6 py-3 rounded-lg">Read More</button>
            <button className="bg-black  px-6 py-3 rounded-lg">Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

