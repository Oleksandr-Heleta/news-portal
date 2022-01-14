import React from 'react';

function Cart({ urlToImage, title, description, url, source }) {
  return (
    <>
      <div className="cart">
        <div>
          <img src={urlToImage} className="imgCart" alt="3" />
        </div>
        <div>
          <h1>{title}</h1>
          <i>{description}</i>
          <div> <a href={url} target="_blank" rel="noopener noreferrer">{source.name}</a></div>

        </div>
      </div>
      <hr />
    </>
  );
}

export default Cart;
