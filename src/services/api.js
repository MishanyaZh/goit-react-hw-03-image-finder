import axios from 'axios';

export const FetchImages = async imgValue => {
  const API_URL = 'https://pixabay.com/api/';
  const API_KEY = '22670626-c734a5ab3fb2edefe4011dc83';

  const { data } = await axios.get(
    `${API_URL}?q=${imgValue}&page=${1}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );

  const onlyfiltr = data.hits.map(hit => ({
    id: hit.id,
    webImg: hit.webformatURL,
    largeImg: hit.largeImageURL,
  }));

  return onlyfiltr;
};
