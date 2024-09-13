import React from 'react';

function PreLoader() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <img 
        src="https://media.tenor.com/fdALT4i5ERYAAAAC/kung-fu-fighting.gif" 
        alt="Loading..." 
        className=" w-[50vw] sm:w-[20vw] "
      />
      <p className="text-fuchsia-800 font-bold text-2xl sm:text-5xl ">Loading...</p>
    </div>
  );
}

export default PreLoader;
