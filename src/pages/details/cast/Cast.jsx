import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";

import "./cast.scss";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Img from "../../../components/lazyLoader/Img";
import avatar from "../../../assets/avatar.png";

const Cast = ({ data, loading }) => {
  const { url } = useSelector((state) => state.home);
  const carouselContainer = useRef(null);

  const skeleton = () => {
    return (
      <div className="skItem">
        <div className="circle skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };

  const handleMouseDown = (e) => {
    const startX = e.pageX - carouselContainer.current.offsetLeft;
    const scrollLeft = carouselContainer.current.scrollLeft;

    const handleMouseMove = (e) => {
      const x = e.pageX - carouselContainer.current.offsetLeft;
      const walk = (x - startX) * 2; // Adjust scroll speed
      carouselContainer.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="castSection">
      <ContentWrapper>
        <div className="sectionHeading">Top Cast</div>
        <div
          className="listItems"
          ref={carouselContainer}
          onMouseDown={handleMouseDown}
        >
          {!loading ? (
            data.map((item) => (
              <div key={item.id} className="listItem">
                <div className="profileImg">
                  <Img
                    src={item.profile_path ? url.profile + item.profile_path : avatar}
                  />
                </div>
                <div className="name">
                  {item.name}
                  <div className="character">{item.character}</div>
                </div>
              </div>
            ))
          ) : (
            <>
              {skeleton()}
              {skeleton()}
              {skeleton()}
              {skeleton()}
              {skeleton()}
              {skeleton()}
            </>
          )}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Cast;
