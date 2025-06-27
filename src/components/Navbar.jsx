import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from '../redux/slices/SearchSlice';

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className='flex flex-col lg:flex-row justify-between mx-6 py-3 gap-5 mb-10'>
      <div>
        <h3 className='text-xl font-semibold text-gray-600'>
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className='text-2xl font-semibold'>Lazeez</h1>
      </div>
      <div>
        <input
          type='search'
          name='search'
          placeholder='Search here'
          autoComplete='off'
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className='p-3 border border-gray-400 rounded-lg text-sm outline-none w-full lg:w-[25vw] bg-white'
        ></input>
      </div>
    </nav>
  );
};

export default Navbar;
