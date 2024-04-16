import React, { useEffect } from "react";
import { fetchDataFromApi } from "./utilitiy/api";
import { useSelector, useDispatch } from "react-redux";
import { setUrl } from "./store/homeSlice";
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
  }, []); // Empty dependency array since fetchApiConfig doesn't depend on any props or state

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration")
      .then((data) => {
        // Assuming data.images.secure_base_url exists and contains the base URL for images
        const url = {
          backdrop: data.images.secure_base_url + "original",
          poster: data.images.secure_base_url + "original",
          profile: data.images.secure_base_url + "original",
        };
        dispatch(setUrl(url));
      })
      .catch((error) => {
        // Handle API request errors gracefully
        console.error("Error fetching API configuration:", error);
      });
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
