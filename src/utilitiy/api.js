import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB = import.meta.env.VITE_APP_MOVIE_BASE_TOKEN;

const headers = {
  Authorization: `Bearer ${TMDB}`,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
