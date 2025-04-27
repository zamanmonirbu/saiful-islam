import React from 'react';
import { Link } from 'react-router-dom';
import category1 from '../../assets/image 8.png';
import category2 from '../../assets/image 1.png';
import category3 from '../../assets/image 4.png';
import category4 from '../../assets/image 5.png';
import category5 from '../../assets/image 7.png';
import category6 from '../../assets/image 3.png';
import category7 from '../../assets/image 2.png';
import category8 from '../../assets/image 6.png';

const categories = [
  { name: 'Everyday essentials', image: category1 },
  { name: 'Household', image: category2 },
  { name: 'Health & beauty', image: category3 },
  { name: 'Food & drink', image: category4 },
  { name: 'Home & garden', image: category5 },
  { name: 'Fashion', image: category6 },
  { name: 'Electronics', image: category7 },
  { name: 'Sports & leisure', image: category8 },
  { name: 'Food & drink', image: category4 },
  { name: 'Home & garden', image: category5 },
  { name: 'Fashion', image: category6 },

];

const Categories = () => {
  return (
    <section className="py-6 px-32">
      <h2 className="text-left text-3xl font-bold mb-8">Categories</h2>
      <div className="flex flex-wrap gap-6">
        {categories.map((cat, index) => (
          <Link key={index} to={`/category/${cat.name}`} style={{ height: '120px', width: '120px' }}>
            <button className="bg-white shadow p-4 rounded-lg h-full w-full text-center flex flex-col items-center">
              <img src={cat.image} alt={cat.name} className="w-8 h-8" />
              <span className="mt-2">{cat.name}</span>
            </button>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;

