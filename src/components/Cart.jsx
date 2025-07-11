import { IoMdClose } from 'react-icons/io';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [active, setActive] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalAmount = cartItems.reduce(
    (totalAmount, item) => totalAmount + item.price * item.qty,
    0
  );
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full h-full p-3 lg:w-[20vw] bg-white mb-3 ${
          active ? 'translate-x-0' : 'translate-x-full'
        }  transition-all duration-500 ease-in-out z-50 shadow-lg`}
      >
        <div className='flex justify-between items-center my-3'>
          <span className='text-xl font-semibold text-gray-800'>My Orders</span>
          <IoMdClose
            onClick={() => setActive(!active)}
            className=' border-2 border-gray-600 rounded-md p-1 text-2xl font-bold cursor-pointer hover:text-red-300 hover:border-red-300'
          />
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((item) => {
            return (
              <CartItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                img={item.img}
                qty={item.qty}
              />
            );
          })
        ) : (
          <h2 className='text-center text-xl font-semibold text-gray-800'>
            Your cart is empty{' '}
          </h2>
        )}

        <div className='absolute bottom-0 '>
          <h3 className='font-semibold text-gray-800'>Items: {totalQty}</h3>
          <h3 className='font-semibold text-gray-800'>
            Total Amount: {totalAmount}
          </h3>
          <hr className='my-2 ' />
          <button
            onClick={() => navigate('/success')}
            className='bg-green-500 font-bold text-white py-2 px-3 rounded-lg w-[90vw] lg:w-[18vw] hover:bg-green-600 transition-all duration-300 ease-in-out mt-3  cursor-pointer mb-5'
          >
            Checkout
          </button>
        </div>
      </div>
      <FaShoppingCart
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 ${
          totalQty > 0 && 'animate-bounce delay-500 transition-all'
        } `}
        onClick={() => setActive(!active)}
      />
    </>
  );
};

export default Cart;
