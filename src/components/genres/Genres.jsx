import React from "react";
import "./genres.scss";
import { useSelector } from "react-redux";

function Genres({ data }) {
  const { genres } = useSelector((state) => state.home);

  return (
    <div className="genres">
      {data?.map((id) => {
        if (!genres[id]?.name) return null;
        return (
          <span className="genre" key={id}>
            {genres[id]?.name}
          </span>
        );
      })}
    </div>
  );
}

export default Genres;
