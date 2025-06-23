import { IoMdClose } from 'react-icons/io';
import CartItem from './CartItem';
const Cart = () => {
  return (
    <>
      <div className='fixed right-0 top-0 w-full h-full p-3 lg:w-[20vw] bg-white'>
        <div className='flex justify-between items-center my-3'>
          <span className='text-xl font-semibold text-gray-800'>My Orders</span>
          <IoMdClose className=' border-2 border-gray-600 rounded-md p-1 text-2xl font-bold cursor-pointer hover:text-red-300 hover:border-red-300' />
        </div>
        <CartItem />
        <CartItem />
        <CartItem />
        <div className='absolute bottom-0 '>
          <h3 className='font-semibold text-gray-800'>Items: </h3>
          <h3 className='font-semibold text-gray-800'>Total Amount: </h3>
          <hr className='my-2 ' />
          <button className='bg-green-500 font-bold text-white py-2 px-3 rounded-lg w-[90vw] lg:w-[18vw] hover:bg-green-600 transition-all duration-300 ease-in-out mt-3  cursor-pointer mb-5'>
            Checkout
          </button>
        </div>
      </div>
      ;
    </>
  );
};

export default Cart;
