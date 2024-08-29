import React from 'react';

const Card = ({ icon, title, description, buttonText }) => {
  return (
    <div className="w-full md:w-1/3 p-4">
      <div className="bg-white rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:-translate-y-2">
        <div className="p-6">
          <div className="text-blue-600 hover:text-white">
            <i className={`${icon} text-4xl`}></i>
          </div>
          <h3 className="mt-4 text-2xl font-semibold text-gray-800 hover:text-white">
            {title}
          </h3>
          <p className="mt-2 text-gray-600 hover:text-white">
            {description}
          </p>
          <button className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
