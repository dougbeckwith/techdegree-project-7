import React from "react";

const Photo = ({ photo }) => {
  return (
    <li>
      <img src={photo} alt="" />
    </li>
  );
};

export default Photo;
