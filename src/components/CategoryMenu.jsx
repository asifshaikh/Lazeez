import { useEffect, useState } from 'react';
import FoodData from '../data/FoodData';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/slices/CategorySlice';

const CategoryMenu = () => {
  const [activeCategories, setActiveCategories] = useState([]);
  const listUniqueCategies = () => {
    const uniqueCategoies = [...new Set(FoodData.map((food) => food.category))];
    setActiveCategories(uniqueCategoies);
    console.log(uniqueCategoies);
  };
  useEffect(() => {
    listUniqueCategies();
  }, []);

  const dispatch = useDispatch();
  const handleCategoryClick = (category) => {
    dispatch(setCategory(category));
  };
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <>
      <div className='mx-6'>
        <h3 className='font-semibold text-xl'>Find the best food</h3>
        <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
          <button
            onClick={() => handleCategoryClick('All')}
            className={`py-2 px-3 bg-gray-200 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition duration-100 cursor-pointer ${
              selectedCategory === 'All' ? 'bg-green-500 text-white' : ''
            }`}
          >
            All
          </button>
          {activeCategories.map((category, index) => {
            return (
              <button
                onClick={() => handleCategoryClick(category)}
                key={index}
                className={`py-2 px-3 bg-gray-200 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition duration-100 cursor-pointer ${
                  selectedCategory === category ? 'bg-green-500 text-white' : ''
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CategoryMenu;
