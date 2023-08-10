import axios from "axios";
//const dotenv = require("dotenv");
//dotenv.config({ path: ".env" });

const BASE_URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_YOUTUBE_RAPID_API,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

const fetchAPI = async (url) => {
  //console.log(`${BASE_URL}/${url}`);
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

export default fetchAPI;
