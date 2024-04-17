import React, { useEffect } from "react";
import { fetchDataFromApi } from "./utilitiy/api";
import { useSelector, useDispatch } from "react-redux";
import { setUrl, setGenres } from "./store/homeSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./pages/404/PageNotFound";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
function App() {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.home.url);

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []); 

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration")
      .then((data) => {
        const url = {
          backdrop: data.images.secure_base_url + "original",
          poster: data.images.secure_base_url + "original",
          profile: data.images.secure_base_url + "original",
        };
        dispatch(setUrl(url));
      })
      .catch((error) => {
        console.error("Error fetching API configuration:", error);
      });
  };

  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });
    const data = await Promise.all(promises);
    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });
    dispatch(setGenres(allGenres));
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
