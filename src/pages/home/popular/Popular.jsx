import React, { useState } from "react";
import Carousel from "../../../components/carousel/Carousel";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";

const Popular = () => {
  const [endpoint, setEndpoint] = useState("movie");
  const { data, loading } = useFetch(`/${endpoint}/popular`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };

  return (
    <div className="carouselSection">
      <div className="contentWrapper ">
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
            What's Popular
          </span>
          <SwitchTabs data={["Movies", "TV"]} onTabChange={onTabChange} />
        </div>
      </div>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
    </div>
  );
};

export default Popular;
