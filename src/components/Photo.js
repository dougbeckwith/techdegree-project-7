import React from "react";

const Photo = ({ index, photo }) => {
  return (
    <li key={index}>
      <img src={photo} alt="" />
    </li>
  );
};

export default Photo;
