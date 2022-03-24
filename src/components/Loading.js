import React from "react";
import loadingGif from "../images/loading.gif";

const Loading = () => {
  return (
    <div className="loader">
      <img src={loadingGif} alt="loading" />
      <h3>WCZYTYWANIE...</h3>
    </div>
  );
};

export default Loading;
