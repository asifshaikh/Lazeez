import { AiFillStar } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartSlice';

const FoodCard = ({ id, img, name, price, desc, rating }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    const foodItem = { id, name, price, desc, rating, qty: 1 };
    dispatch(addToCart(foodItem));
  };
  return (
    <div className=' w-[250px]  bg-white p-5 rounded-lg flex flex-col gap-2 '>
      <img
        src={img}
        alt=''
        className='w-auto h-[130px] hover:scale-110 transition-all duration-300 ease-in-out cursor-grab'
      />
      <div className='flex justify-between font-semibold text-sm'>
        <h2>{name}</h2>
        <p className='text-green-500'>₹{price}</p>
      </div>
      <p className='text-sm'>{desc.slice(0, 50)}...</p>
      <div className='flex justify-between'>
        <span className='flex items-center  font-bold justify-center '>
          <AiFillStar className='text-yellow-400 mr-1' /> {rating}
        </span>
        <button
          onClick={handleAddToCart}
          className='bg-green-500 text-white p-1 rounded-lg hover:bg-green-600 text-sm'
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
