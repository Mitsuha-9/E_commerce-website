import React, { useEffect, useState } from 'react';
import CartPage from './CartPage';  // Importing your CartPage component

const YourParentComponent = () => {

  const [data,setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/cartapi/cart');
        if (!response.ok) {
          throw new Error('Failed to fetch cart data');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching cart data:', error);
        // Handle the error, e.g., set an error state or display an error message
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div>
      <CartPage cart={data} />
    </div>
  );
};

export default YourParentComponent;