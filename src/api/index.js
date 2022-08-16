import axios from "axios";
import API_ENDPOINTS from "./endpoints";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export function getGame() {
  return axios.get(API_ENDPOINTS.game);
}

export function checkNumber(id, data) {
  return axios.post(`${API_ENDPOINTS.game}/${id}`, data);
}
