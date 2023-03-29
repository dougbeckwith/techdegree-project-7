import React from "react";

const Photos = () => {
  const photos = [
    "https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg",
    "https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg",
    "https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg",
    "https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg",
    "https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg",
    "https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg",
    "https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg",
    "https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg",
    "https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg",
    "https://farm5.staticflickr.com/4334/37032996241_4c16a9b530.jpg"
  ];
  return (
    <div className="photo-container">
      <h2>Results</h2>
      <ul>
        {photos.map((photo) => {
          return (
            <li>
              <img src={photo} alt="" />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Photos;
