import React from "react";

import "./pageNotFound.scss";

import ContentWrapper from "../../Index";

const PageNotFound = () => {
    return (
        <div className="pageNotFound">
            <div className="ContentWrapper">
                <span className="bigText">404</span>
                <span className="smallText">Page not found!</span>
            </div>
        </div>
    );
};

export default PageNotFound;