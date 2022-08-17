import axios from "axios";
import API_ENDPOINTS from "./endpoints";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export function getGame(id) {
  const gameId = id ? `/${id}` : "";
  return axios.get(`${API_ENDPOINTS.game}${gameId}`);
}

export function checkNumber(id, data) {
  return axios.put(`${API_ENDPOINTS.game}/${id}`, data);
}
