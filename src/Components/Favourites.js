import React from "react";
import "./Favourites.css";
import Poster from "./Poster";

const Favourites = ({ favouriteList }) => {
  return (
    <>
      <div className="favouriteSection">
        {favouriteList.length > 0 ? (
          <Poster movies={favouriteList} />
        ) : (
          <h1 className="text-center mt-5 text-white">
            Your list is empty <i className="far fa-frown"></i>
          </h1>
        )}
      </div>
    </>
  );
};

export default Favourites;
