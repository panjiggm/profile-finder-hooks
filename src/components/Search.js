import React from "react";

const Search = ({ search, onHandleChange }) => {
  return (
    <div className="search-form">
      <form>
        <input
          type="text"
          value={search}
          onChange={onHandleChange}
          placeholder="Search Profile..."
        />
        <button>Search Profile</button>
      </form>
    </div>
  );
};

export default Search;
