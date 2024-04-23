import React, { useState, useRef } from "react";
import "./videosSection.scss";
import { PlayIcon } from "../Playbtn";
import ContentWrapper from "../../../Index";
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import Img from "../../../components/lazyLoader/Img";

const VideosSection = ({ data, loading }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const carouselContainer = useRef(null);

  const handleMouseDown = (e) => {
    setDragging(true);
    setDragStartX(e.pageX - carouselContainer.current.offsetLeft);
    setScrollLeft(carouselContainer.current.scrollLeft);
    carouselContainer.current.style.cursor = "grabbing";
  };

  const handleMouseMove = (e) => {
    if (!dragging) return;
    const x = e.pageX - carouselContainer.current.offsetLeft;
    const walk = (x - dragStartX) * 2; // Adjust scroll speed
    carouselContainer.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setDragging(false);
    carouselContainer.current.style.cursor = "grab";
  };

  const loadingSkeleton = () => {
    return (
      <div className="skItem">
        <div className="thumb skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };

  return (
    <div className="videosSection">
      <div className="ContentWrapper">
        <div className="sectionHeading">Official Videos</div>

        <div
          className="videos"
          ref={carouselContainer}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {!loading ? (
            data?.results?.map((video) => (
              <div
                key={video.id}
                className="videoItem"
                onClick={() => {
                  setVideoId(video.key);
                  setShow(true);
                }}
              >
                <div className="videoThumbnail">
                  <Img src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`} />
                  <div className="playButtonContainer">
                    <PlayIcon />
                  </div>
                </div>
                <div className="videoTitle">{video.name}</div>
              </div>
            ))
          ) : (
            <>
              {loadingSkeleton()}
              {loadingSkeleton()}
              {loadingSkeleton()}
              {loadingSkeleton()}
            </>
          )}
        </div>
      </div>
      <VideoPopup show={show} setShow={setShow} videoId={videoId} setVideoId={setVideoId} />
    </div>
  );
};

export default VideosSection;
