import { useContext, useEffect, useState } from "react";
import { ContextFunctions } from "../../../context/context";

export const Body = () => {
  const { allImages } = useContext(ContextFunctions);
  return (
    <div>
      {allImages.map((img) => (
        <img key={img.id} src={img.imageURL} alt={img.type} />
      ))}
    </div>
  );
};
