import React from 'react';

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      role: 'CEO',
      description: 'John is the visionary behind our company, leading us with over 15 years of experience in the industry.',
      image: 'https://via.placeholder.com/150', 
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'CTO',
      description: 'Jane is a tech genius who ensures that our technology is always ahead of the curve.',
      image: 'https://via.placeholder.com/150', 
    },
    {
      id: 3,
      name: 'Robert Brown',
      role: 'Lead Developer',
      description: 'Robert leads our development team, creating innovative solutions for our clients.',
      image: 'https://via.placeholder.com/150', 
    },
    {
      id: 4,
      name: 'Emily White',
      role: 'Project Manager',
      description: 'Emily is a skilled project manager who makes sure everything runs smoothly and on time.',
      image: 'https://via.placeholder.com/150', 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-8">
      {/* Page Header */}
      <header className="bg-blue-700 text-white p-5 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">Our Team</h1>
        <p className="text-lg md:text-xl mt-2">
          Meet the people who make it all happen.
        </p>
      </header>

      {/* Team Members */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member) => (
          <div key={member.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={member.image} alt={member.name} className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{member.name}</h2>
              <p className="text-sm text-gray-500 mb-4">{member.role}</p>
              <p className="text-gray-700 mb-4">{member.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default OurTeam;
