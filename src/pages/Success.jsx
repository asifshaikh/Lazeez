import React, { useState } from 'react';
import { useEffect } from 'react';
import { PropagateLoader } from 'react-spinners';

const Success = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      {loading ? (
        <PropagateLoader color='#36d399' />
      ) : (
        <div className='text-center'>
          <h2 className='text-3xl font-semibold mb-4 '>Order Successfull!</h2>

          <p>Your order has been placed successfully!</p>
          <p>Thank you for choosing us!</p>
        </div>
      )}
    </div>
  );
};

export default Success;
