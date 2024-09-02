import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Card from './Card';

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-blue-600 font-semibold text-lg mb-2">Our Services</h3>
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Services Built Specifically For Your Business
        </h2>

        <div className="flex flex-wrap justify-center">
          
          <Card
            icon="fas fa-code"
            title="Web Design"
            description="Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt."
            buttonText="Read More"
          />
          <Card
            icon="fas fa-laptop-code"
            title="Web Development"
            description="Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt."
            buttonText="Read More"
          />
          <Card
            icon="fas fa-pencil-ruler"
            title="UI/UX Design"
            description="Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt."
            buttonText="Read More"
          />
          
          <Card
            icon="fas fa-user-secret"
            title="Web Security"
            description="Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt."
            buttonText="Read More"
          />
          <Card
            icon="fas fa-envelope-open-text"
            title="Digital Marketing"
            description="Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt."
            buttonText="Read More"
          />
          <Card
            icon="fas fa-laptop"
            title="Programming"
            description="Lorem ipsum dolor sit amet elit. Sed efficitur quis purus ut interdum. Aliquam dolor eget urna ultricies tincidunt."
            buttonText="Read More"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
