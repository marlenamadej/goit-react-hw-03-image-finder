import axios from 'axios';

const API_KEY = '29713340-fd2b50d28e9b5867c462598da';

export const fetchImages = async (query, page, perPage) => {
  const response = await axios.get(
    `https://pixabay.com/api/?key=${API_KEY}&q=${query}&page=${page}&image_type=photo&orientation=horizontal&per_page=${perPage}&safesearch=true`
  );
  return response.data;
};