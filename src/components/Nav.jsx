
import React from 'react';
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="w-full bg-orange-700">
      <div className="w-full h-auto sm:h-20 md:h-24 lg:h-28 flex flex-row sm:flex-row items-center justify-between px-4 sm:px-8 py-4">
        
        <Link to="/Home">
          <div className="text-white text-base sm:text-lg md:text-xl hover:text-red-500 py-1 sm:py-2 ">
            Home
          </div>
        </Link>
        
       
        <Link to="/popular">
          <div className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold py-1 sm:py-2 text-center ">
            Movieworld
          </div>
        </Link>
        
        
        <Link to="/fav">
          <div className="text-white text-base sm:text-lg md:text-xl hover:text-red-500 py-1 sm:py-2 cursor-pointer ">
            Favourites
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
