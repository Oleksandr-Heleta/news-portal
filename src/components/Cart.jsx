import React from 'react';

function Cart({ urlToImage, title, description }) {
  return (
    <div className="cart">
      <div>
        <img src={urlToImage} className="imgCart" alt="3" />
      </div>
      <div>
        <div>{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
}

export default Cart;
