import React from "react";

const ContentWrapper = ({ children }) => {
  return (
    <div className="w-full max-w-screen-lg px-4 mx-auto contentWrapper ">
      {children}
    </div>
  );
};

export default ContentWrapper;
