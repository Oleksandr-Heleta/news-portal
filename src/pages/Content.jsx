import React from 'react';


import Cart from '../components/Cart';
import { requestData } from '../statics';

function Content({ country, category }) {




  const [news, setNews] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(null);
  React.useEffect(() => {
    requestData(country, category)
      .then(data => {
        console.log(data);
        setNews(data);
        setIsLoading(true)
      }).catch(error => {
        console.log(error.status);
        setIsError(error);
        setIsLoading(true)
      });

  }, [country, category]);




  return (<div>


    {!isLoading ? <h3 style={{ textAlign: 'center' }}>Loading ...</h3> :

      (isError ? <p style={{ textAlign: 'center' }}>{isError.message}</p>
        : news.map((obj, index) => <Cart key={index} {...obj} />))}
  </div>);
}

export default Content;
