import React from 'react';
import WebDevImage from '../header/assets/web dev.jpg';
import Web2 from '../header/assets/Web dev 2.jpg';
import Graph from '../header/assets/graphic3.jpg';
import WebSec from '../header/assets/web sec2.jpg';
import Digi from '../header/assets/digital3.jpg';
import Prog from '../header/assets/prog2.jpg';

const Projects = () => {
 
  const projectData = [
    {
      title: "Web Design",
      subtitle: "Web Analysis",
      image: WebDevImage
    },
    {
      title: "Web Development",
      subtitle: "App Development",
      image: Web2
    },
    {
      title: "Graphic Design",
      subtitle: "UI/UX Design",
      image: Graph
    },
    {
      title: "Web Security",
      subtitle: "Cybersecurity",
      image: WebSec
    },
    {
      title: "Digital Marketing",
      subtitle: "SEO Optimization",
      image: Digi
    },
    {
      title: "Programming",
      subtitle: "Software Development",
      image: Prog
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-blue-600 font-semibold text-lg mb-2">Our Project</h3>
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Our Recently Completed Projects
        </h2>

        <div className="flex flex-wrap justify-center">
          {projectData.map((project, index) => (
            <div key={index} className="w-full md:w-1/3 p-4">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover"/>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                  <p className="text-gray-600">{project.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
