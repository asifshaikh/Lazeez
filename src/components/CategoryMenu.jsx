const CategoryMenu = () => {
  return (
    <div className='mx-6'>
      <h3 className='font-semibold text-xl'>Find the best food</h3>
      <div className='my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden'>
        <button className='py-2 px-3 bg-gray-200 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition duration-100 cursor-pointer'>
          All
        </button>
        <button className='py-2 px-3 bg-gray-200 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition duration-100 cursor-pointer'>
          Lunch
        </button>
        <button className='py-2 px-3 bg-gray-200 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition duration-100 cursor-pointer'>
          Breakfast
        </button>
        <button className='py-2 px-3 bg-gray-200 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition duration-100 cursor-pointer'>
          Dinner
        </button>
        <button className='py-2 px-3 bg-gray-200 font-semibold rounded-lg hover:bg-green-500 hover:text-white transition duration-100 cursor-pointer'>
          Snacks
        </button>
      </div>
    </div>
  );
};

export default CategoryMenu;
