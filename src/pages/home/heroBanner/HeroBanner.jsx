import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoader/Img";
import ContentWrapper from "../../../components/contentWrapper/contentWrapper";

function HeroBanner() {
  const [bg, setBg] = useState("");
  const [query, setQuery] = useState("");
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  // const handleSearchButtonClick = () => {
  //   if (query.length > 0) {
  //     navigate(`/search/${query}`);
  //   }
  // };

  useEffect(() => {
    if (data && data.results.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.results.length);
      setBg(url.backdrop + data.results[randomIndex].backdrop_path);
    }
  }, [data, url.backdrop]);

  return (
    <div className="relative flex items-center bg-black heroBanner">
  {!loading && (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-50 backdrop-img">
      <div className="w-full h-full lazy-load-image-background">
        <Img src={bg} className="object-cover object-center w-full h-full" />
      </div>
    </div>
  )}

  <div className="absolute bottom-0 left-0 w-full h-24 opacity-layer md:h-48 bg-gradient-to-b from-transparent to-blue-900"></div>
  <ContentWrapper>
    <div className="relative max-w-screen-md mx-auto text-center text-white heroBannerContent">
      <span className="mb-4 text-4xl font-bold title md:text-6xl md:mb-0">Welcome</span>
      <span className="mb-8 text-base font-semibold subTitle md:text-xl md:mb-12">
        Millions of movies, TV shows, and people to discover. Explore now.
      </span>
    </div>
    <div className="flex items-center w-full searchInput">
      <input
        className="w-full h-12 px-4 text-sm bg-white border-0 outline-none md:h-16 rounded-l-md md:text-lg"
        type="text"
        placeholder="Search for a movie or TV show...."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyUp={handleSearch}
      />
      <button className="w-24 h-12 text-base text-white transition duration-300 ease-in-out cursor-pointer md:w-36 md:h-16 bg-gradient-to-r from-blue-500 to-blue-700 rounded-r-md md:text-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
        Search
      </button>
    </div>
  </ContentWrapper>
</div>
  );
}

export default HeroBanner;
