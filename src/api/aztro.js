import axios from "axios";

export default axios.create({
  baseURL: "https://sameer-kumar-aztro-v1.p.rapidapi.com/",
  headers: {
    "X-RapidAPI-Host": "sameer-kumar-aztro-v1.p.rapidapi.com",
    "X-RapidAPI-Key": process.env.AZTRO,
  },
});
