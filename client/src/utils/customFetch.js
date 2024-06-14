import axios from "axios";

const customFetch = axios.create({
  baseURL: "https://mern-jobify-7ani.onrender.com/",
});

export default customFetch;
