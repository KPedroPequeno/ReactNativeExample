// API
import axios from 'axios'

const urlapi = ""


var axiosInstance = axios.create({
  baseURL: urlapi,
  responseType: "json",
  responseEncoding: "utf8",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
});

export default axiosInstance;

