import React from 'react';
import FoodCard from './FoodCard';
import FoodData from '../data/FoodData';

const FoodItems = () => {
  return (
    <>
      <div className='flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10'>
        {FoodData.map((food) => {
          return (
            <FoodCard
              key={food.id}
              id={food.id}
              img={food.img}
              name={food.name}
              price={food.price}
              desc={food.desc}
              category={food.category}
              rating={food.rating}
            />
          );
        })}
      </div>
    </>
  );
};

export default FoodItems;
