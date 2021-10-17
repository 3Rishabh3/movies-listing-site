import React, { useContext } from "react";
import UserContext from "../Contexts/UserContext";

const imgBaseUrl = "https://image.tmdb.org/t/p/original/";

const Poster = ({ movies, isRowLarge }) => {
  const context = useContext(UserContext);

  const handleFavourites = (movie) => {
    if (movie.isLiked == true) {
      movie.isLiked = false;
      let fl = context.favouriteList;
      var updatedList = fl.filter((m) => movie.id != m.id);
    } else {
      movie.isLiked = true;
      let fl = context.favouriteList;
      var updatedList = [movie, ...fl];
    }
    context.setFavouriteList(updatedList);
  };

  return (
    <>
      {movies?.map((movie) => (
        <>
          <div className="overlayContainer" key={movie.id}>
            <img
              className={`row_poster ${isRowLarge && "row_posterLarge"}`}
              style={{
                cursor: "pointer",
              }}
              src={`${imgBaseUrl}${
                isRowLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie?.name || movie?.title}
            />
            <div className="overlayBottom">
              <div
                className="text"
                style={{
                  left: `${!isRowLarge && "90%"}`,
                  top: `${!isRowLarge && "-320%"}`,
                }}
              >
                <i
                  className={movie.isLiked ? "fas fa-heart" : "far fa-heart"}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    handleFavourites(movie);
                  }}
                ></i>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default Poster;
