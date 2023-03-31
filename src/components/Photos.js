import React from "react";
import NotFound from "./NotFound";
import { useLoaderData } from "react-router-dom";
import Photo from "./Photo";

const Photos = () => {
  // photos is an array of photos
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
            return <Photo photo={photo} key={index} />;
          })}
        </ul>
      ) : (
        // Page to display if no photos
        <NotFound />
      )}
    </div>
  );
};

export default Photos;
