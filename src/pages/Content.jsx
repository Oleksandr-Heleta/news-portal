import React from 'react';
import axios from 'axios';

import Cart from '../components/Cart';
import { requestData, apiKey } from '../statics';

function Content({ country, category }) {




  const [news, setNews] = React.useState(null);
  React.useEffect(() => {

    let url;
    category === '' ? url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`
      : url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;

    axios.get(url).then(({ data }) => {
      console.log(data.articles);
      setNews(data.articles);

    });





  }, [country, category]);

  return <div>{console.log(news)}
    {news && news.map((obj, index) => <Cart key={index} {...obj} />)}</div>;
}

export default Content;
