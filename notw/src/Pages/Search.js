import React from "react";
import SearchBar from "../Components/SearchBar/SearchBar";

const Search = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="my-2">
        <span className="text-red-500 drop-shadow-md contrast-125">SEARCH</span>{" "}
        BY NAME
      </h2>
      <SearchBar />
    </div>
  );
};

export default Search;
