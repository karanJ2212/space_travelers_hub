import axios from 'axios';
import { API } from '../../constants';

export const get = async (path) => {
  const response = await axios.get(`${API}${path}`);
  return response.data;
};

export const post = async (path, data) => {
  const response = await axios.post(`${API}${path}`, data);
  return response.data;
};

export default { get, post };
