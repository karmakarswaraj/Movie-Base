import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoader/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import "./herobanner.scss";

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

  const handleSearchButtonClick = () => {
    if (query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  useEffect(() => {
    if (data && data.results.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.results.length);
      setBg(url.backdrop + data.results[randomIndex].backdrop_path);
    }
  }, [data, url.backdrop]);

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={bg} />
        </div>
      )}

      <div className="opacity-layer"></div>

      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <br />
          <span className="subTitle">
            Millions of movies, TV shows, and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Search for a movie or TV show...."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={handleSearch}
            />
            <button onClick={handleSearchButtonClick}>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default HeroBanner;
