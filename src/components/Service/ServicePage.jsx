import React from 'react';
import w1 from "../../assets/w1.png";
import w2 from "../../assets/w2.png";   
import w3 from "../../assets/w3.png";
import w4 from "../../assets/w4.png";



const categories = [
  { title: "Everyday essentials", img: w1 },
  { title: "Household", img: w2 },
  { title: "Creative", img: w3 },
  { title: "Health & beauty", img: w4 },
  { title: "Information technology", img: w1 },
  { title: "Professional", img: w2 },
  { title: "Education", img: w3 },
  { title: "Tawun Custom Tailored", img: w4 },

];

const ServicePage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold my-12 text-left">
      Services we are provided
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col h-full"
          >
            <img 
              src={category.img} 
              alt={category.title} 
              className="h-48 w-full object-cover"
            />
            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-center text-lg font-semibold mb-2">
                {category.title}
              </h3>
              <p className="text-gray-600 text-sm text-center">
                Lorem ipsum dolor sit amet consectetur. Posuere odio molestie 
                tellus nunc semper maecenas. Ultrices ipsum nullam ornare morbi auctor. 
                Aliquet fermentum feugiat fusce aliquam nullam lacus mauris.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
