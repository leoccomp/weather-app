import axios from 'axios';

// https://api.hgbrasil.com/weather?key=625319a7&lat=-23.682&lon=-46.875&user_ip=remote

export const key = '625319a7';

const api = axios.create({
  baseURL: "https://api.hgbrasil.com"
});

export default api;