import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080", // Adjust this baseURL according to your backend endpoint
});

export default instance;
