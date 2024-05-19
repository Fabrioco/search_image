import { createContext, useEffect, useState } from "react";
import { images } from "../assets/images/images";

export const ContextFunctions = createContext({});

export default function Context({ children }) {
  const [allImages, setAllImages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    setAllImages(images);
  }, []);

  useEffect(() => {
    if (input.length == 0) {
      const btn = document.getElementById("btn_search");
      btn.style.display = "none";
    } else {
      const btn = document.getElementById("btn_search");
      btn.style.display = "inline";
    }
  }, [input]);

  const handleSearch = (type) => {
    const imgFiltered = images.filter((img) => img.type === type);
    setAllImages(imgFiltered);
  };

  const handleSearchInput = () => {
    const imgFiltered = images.filter((img) => img.type === input);

    if (imgFiltered.length) {
      setAllImages(imgFiltered);
    } else {
      alert("Desculpa não consegui encontrar o que estava pocurando");
    }
  };

  const uniqueTypes = images.reduce((acc, current) => {
    const x = acc.find((item) => item.type === current.type);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  return (
    <ContextFunctions.Provider
      value={{
        handleSearch,
        allImages,
        uniqueTypes,
        input,
        setInput,
        handleSearchInput,
      }}
    >
      {children}
    </ContextFunctions.Provider>
  );
}
