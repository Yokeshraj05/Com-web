import React from 'react';

const ContactInfoCard = ({ icon, title, text }) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 m-2">
      <div className="text-green-600 text-3xl mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default ContactInfoCard;
