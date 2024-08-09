import React from "react";

function Photo({ images }) {
  return (
    <>
      {images.map((image, index) => (
        <div key={index} className="p-2 border">
          <img src={image.photo} alt={image.description} className="w-full h-auto" />
          <p className="text-white font-serif">{image.description}</p>
        </div>
      ))}
    </>
  );
}

export default Photo;
