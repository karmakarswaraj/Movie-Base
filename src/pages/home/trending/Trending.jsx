import React, { useState } from "react";

import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../Index";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";

import useFetch from "../../../hooks/useFetch";

const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");

  const { data, loading } = useFetch(`/trending/movie/${endpoint}`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };

  return (
    <div className="carouselSection">
      <div className="ContentWrapper">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "x-large",
            marginLeft: "30px",
            marginRight: "30px",
            marginBottom: "20px",
          }}
        >
          <span className="carouselTitle" style={{ color: "white" }}>
            Trending
          </span>
          <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
        </div>
      </div>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Trending;
