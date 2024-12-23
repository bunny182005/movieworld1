

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useContext, useEffect } from "react";
import { store } from "../App";

const Card = ({ movie }) => {
  const [fava, setFava] = useContext(store);
  
  const [liked, setLiked] = useState(() => 
    fava.some(item => item.imdbID === movie.imdbID)
  );

  
  useEffect(() => {
    setLiked(fava.some(item => item.imdbID === movie.imdbID));
  }, [fava, movie.imdbID]);

  const handleFavorite = (e) => {
    e.preventDefault();
    const isCurrentlyInFavorites = fava.some(item => item.imdbID === movie.imdbID);
    
    if (!isCurrentlyInFavorites) {
      setFava([...fava, movie]);
    } else {
      setFava(fava.filter(item => item.imdbID !== movie.imdbID));
    }
  };

  return (
    <div className="flex justify-center items-center p-2 sm:p-4">
      <div className="w-full sm:w-[280px] md:w-[320px] lg:w-[350px] 
                    h-[400px] sm:h-[450px] md:h-[500px] group bg-black">
        <div className="w-full flex justify-between px-2">
          <div className="text-white">{movie.Year}</div>
          <FontAwesomeIcon
            icon={faHeart}
            className={`cursor-pointer w-4 h-4 sm:w-5 sm:h-5 ${
              liked ? "text-red-400" : "text-white"
            } hover:text-red-400`}
            onClick={handleFavorite}
          />
        </div>
        
        <img
          src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300"}
          alt={movie.Title}
          className="w-full h-[280px] sm:h-[320px] md:h-[380px] object-cover"
        />
        
        <div className="w-full h-[20px] text-white pl-1 text-base sm:text-xl bg-gray-800">
          {movie.Type}
        </div>
        <div className="w-full h-[40px] text-orange-300 pl-1 pt-2 sm:pt-3 text-sm sm:text-base 
                      md:text-lg lg:text-xl bg-gray-800 truncate">
          {movie.Title}
        </div>
      </div>
    </div>
  );
};

export default Card;