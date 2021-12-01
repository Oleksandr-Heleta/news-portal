import React, { useState } from 'react';
import axios from 'axios';
import Cart from '../components/Cart';

function Home() {
  const url =
    'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=3d7b64dae7c94c869597a77512ef882e';
  const [news, setNews] = React.useState(null);
  React.useEffect(() => {
    axios.get(url).then(({ data }) => {
      console.log(data.articles);
      setNews(data.articles);
    });
  }, []);

  return <div>{news && news.map((obj, index) => <Cart key={index} {...obj} />)}</div>;
}

export default Home;
