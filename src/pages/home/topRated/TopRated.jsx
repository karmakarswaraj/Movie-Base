import React, { useState } from "react";
import Carousel from "../../../components/carousel/Carousel";
import ContentWrapper from "../../../Index";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";

const TopRated = () => {
    const [endpoint, setEndpoint] = useState("movie");
    const { data, loading } = useFetch(`/${endpoint}/top_rated`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    };

    return (
        <div className="carouselSection">
            <ContentWrapper>
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
                <span className="carouselTitle" style={{color:"white"}}>Top Rated</span>
                <SwitchTabs
                    data={["Movies", "TV"]}
                    onTabChange={onTabChange}
                />
                </div>
            </ContentWrapper>
            <Carousel
                data={data?.results}
                loading={loading}
                endpoint={endpoint}
            />
        </div>
    );
};

export default TopRated;
