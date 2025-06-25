import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from '../redux/CartSlice';
import toast from 'react-hot-toast';
const CartItem = ({ id, name, price, img, qty }) => {
  const dispatch = useDispatch();
  const handleRemove = () => {
    dispatch(removeFromCart({ id }));
  };
  const handleIncrement = () => {
    dispatch(incrementQuantity({ id }));
  };
  const handleDecrement = () => {
    dispatch(decrementQuantity({ id }));
  };
  return (
    <div className='flex gap-2 shadow-md rounded-lg p-2 mb-3'>
      <MdDelete
        onClick={() => {
          handleRemove();
          toast.success('Item removed from cart!');
        }}
        className='absolute right-7 text-gray-700 cursor-pointer'
      />
      <img src={img} className='w-[50px] h-[50px] ' />
      <div className='leading-5'>
        <h2 className='font-semibold text-gray-800'>{name}</h2>
        <div className='flex justify-between '>
          <div className='text-green-500 font-bold'>₹{price}</div>
          <div className='flex items-center gap-2 absolute right-7'>
            <AiOutlineMinus
              onClick={handleDecrement}
              className='border-2 border-gray-600 text-gray-800 rounded-md p-1 text-xl  hover:text-white hover:bg-green-500 hover:border-none transition-all ease-linear cursor-pointer'
            />
            <span>{qty}</span>
            <AiOutlinePlus
              onClick={handleIncrement}
              className='border-2 border-gray-600 text-gray-800 rounded-md p-1 text-xl   hover:text-white hover:bg-green-500 hover:border-none transition-all ease-linear cursor-pointer'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
