import React from 'react';
import defImg from '../img/defImg.jpg';

function Cart({ urlToImage, title, description, url, source }) {
  const imgUrl = urlToImage ? urlToImage : defImg;
  return (
    <>
      <div className="cart">
        <div>
          <img src={imgUrl} className="imgCart" alt="No image" />
        </div>
        <div>
          <h1>{title}</h1>
          <i>{description}</i>
          <div>
            {' '}
            <a href={url} target="_blank" rel="noopener noreferrer">
              {source.name}
            </a>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Cart;
