import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchApiData = async (url) => {
  try {
    let fullURL = BASE_URL + url;
    console.log("fetchApiDate:" + fullURL);
    const { data } = await axios.get(fullURL, { headers });

    return data;
  } catch (err) {
    console.error(err);
    return err;
  }
};
