import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Row.css";
import Poster from "./Poster";

const Row = ({ url, title, isRowLarge }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const response = await axios.get(url);
      setMovies(response.data.results);
    }
    getMovies();
  }, [url]);

  return (
    <React.Fragment>
      <div className="row">
        <h2 className="row_title">{title}</h2>
        <div className="row_posters">
          <Poster movies={movies} isRowLarge={isRowLarge} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Row;
