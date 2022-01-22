import axios from 'axios';
import { apiKey } from './index';


const requestData = async (country, category) => {
    let url;
    category === '' ? url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`
        : url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}`;



    return axios.get(url).then(({ data }) => data.articles);


}

export default requestData;