import axios from 'axios';
import * as CONSTANTS from './Constants';
export const get = (URL) => {
  const url = CONSTANTS.BASE_URL + URL;
  return axios.get(url).then((data) => data);
};
