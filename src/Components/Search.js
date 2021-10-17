import React, { useContext } from "react";
import UserContext from "../Contexts/UserContext";

const Search = () => {
  const context = useContext(UserContext);
  return (
    <>
      <input
        className="form-control"
        list="datalistOptions"
        id="exampleDataList"
        placeholder="Type to search..."
      />
      <datalist id="datalistOptions">
        {context.favouriteList.map((movie) => (
          <option value={movie.name || movie.title} />
        ))}
      </datalist>
    </>
  );
};

export default Search;
