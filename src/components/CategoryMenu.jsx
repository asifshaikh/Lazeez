const CategoryMenu = () => {
  return (
    <div className='mx-6'>
      <h3 className='font-semibold text-xl'>Find the best food</h3>
      <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
        <button className='py-2 px-3 bg-gray-200 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition duration-100'>
          All
        </button>
        <button className='py-2 px-3 bg-gray-200 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition duration-100'>
          Lunch
        </button>
        <button className='py-2 px-3 bg-gray-200 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition duration-100'>
          Breakfast
        </button>
        <button className='py-2 px-3 bg-gray-200 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition duration-100'>
          Dinner
        </button>
        <button className='py-2 px-3 bg-gray-200 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition duration-100'>
          Snacks
        </button>
      </div>
    </div>
  );
};

export default CategoryMenu;
