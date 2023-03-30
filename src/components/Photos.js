import React from "react";
import NotFound from "./NotFound";
import { useLoaderData } from "react-router-dom";
import Photo from "./Photo";

const Photos = () => {
  const { photos, params } = useLoaderData();

  return (
    <div className="photo-container">
      <h2>
        {params.tag.charAt(0).toUpperCase() +
          params.tag.slice(1) +
          " " +
          "Gifs"}
      </h2>
      {photos ? (
        <ul>
          {photos.map((photo, index) => {
            return <Photo photo={photo} index={index} />;
          })}
        </ul>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Photos;
