import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import productImage from './assets/iPhone-15-Pro-Burgandy-Feature-2.jpg';

function Cart() {
  const [count, setCount] = useState(0);
  const pricePerItem = 10;

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count > 0 ? count - 1 : 0);

  return (
    <div style={{ textAlign: 'center', marginTop: '130px' }}>
      <img
        src={productImage}
        alt="Product"
        style={{ width: '250px', height: '200px', marginBottom: '10px' }}
      />
      <p>Product Name</p>
      <p>Price: ${pricePerItem}</p>
      <div>
        <button onClick={incrementCount} style={{ backgroundColor: '#4CAF50', color: 'white' }}>
          Add
        </button>
        <button onClick={decrementCount} style={{ backgroundColor: '#f44336', color: 'white', marginLeft: '10px' }}>
          Remove
        </button>
      </div>
      <p>Total Items: {count}</p>
      <p>Total Price: ${count * pricePerItem}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Cart />);
