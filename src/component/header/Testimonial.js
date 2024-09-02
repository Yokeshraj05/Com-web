import React from 'react';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      quote: 'CogniGenNxt exceeded our expectations with their innovative solutions and impeccable service. They truly understood our needs and delivered a top-notch product.',
      clientName: 'Sarah Johnson',
      clientRole: 'CEO, Tech Innovators',
      image: 'https://via.placeholder.com/150', 
    },
    {
      id: 2,
      quote: 'The team at CogniGenNxt is professional, knowledgeable, and extremely reliable. We couldn’t have asked for a better partner for our project.',
      clientName: 'Michael Lee',
      clientRole: 'CTO, Digital Solutions Inc.',
      image: 'https://via.placeholder.com/150', 
    },
    {
      id: 3,
      quote: 'Working with CogniGenNxt has been a fantastic experience. Their dedication and expertise made a significant difference in our project’s success.',
      clientName: 'Jessica Green',
      clientRole: 'Marketing Director, Creative Minds',
      image: 'https://via.placeholder.com/150', 
    },
    {
      id: 4,
      quote: 'I highly recommend CogniGenNxt for any IT solutions. They are truly experts in their field and provide exceptional service.',
      clientName: 'David Brown',
      clientRole: 'Founder, Startup Ventures',
      image: 'https://via.placeholder.com/150', 
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-8">
      {/* Page Header */}
      <header className="bg-blue-700 text-white p-5 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">Testimonials</h1>
        <p className="text-lg md:text-xl mt-2">
          Hear what our clients have to say about us.
        </p>
      </header>

      {/* Testimonials Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <img src={testimonial.image} alt={testimonial.clientName} className="w-16 h-16 rounded-full object-cover mr-4"/>
              <div>
                <h2 className="text-xl font-bold">{testimonial.clientName}</h2>
                <p className="text-sm text-gray-500">{testimonial.clientRole}</p>
              </div>
            </div>
            <p className="text-gray-700 italic">"{testimonial.quote}"</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Testimonial;
