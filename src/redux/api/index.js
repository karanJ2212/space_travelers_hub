import axios from "axios";
import { API } from "../../constants";

export const get = async (path) => {
  const response = await axios.get(`${API}${path}`);
  return response.data;
};
