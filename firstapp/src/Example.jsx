import React from "react";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchComponent = () => {
  const query = useQuery();
  const keyword = query.get("keyword");

  const message = keyword
    ? `Searching for ${keyword}`
    : "No search keyword provided";

  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};

export default SearchComponent;
