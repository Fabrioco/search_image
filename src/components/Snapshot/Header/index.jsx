import React, { useContext } from "react";
import { ContextFunctions } from "../../../context/context";

export const Header = () => {
  const { handleSearch, uniqueTypes, input, setInput, handleSearchInput } =
    useContext(ContextFunctions);

  const handleClickButton = (type) => {
    handleSearch(type);
  };

  const handleSearchText = (e) => {
    e.preventDefault();
    handleSearchInput();
  };

  return (
    <div>
      <h1>SnapShot</h1>
      <form onSubmit={handleSearchText}>
        <input
          type="search"
          placeholder="Search"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <input type="submit" value="Buscar" id="btn_search" />
      </form>
      <nav>
        {uniqueTypes.map((img) => (
          <button key={img.id} onClick={() => handleClickButton(img.type)}>
            {img.type}
          </button>
        ))}
      </nav>
    </div>
  );
};
