import openheimer from "../assets/openheimer.jpg"
import barbie from "../assets/barbie.jpg"
import fast from "../assets/fast.jpg"
import Guardians from "../assets/guardians.jpg"
import johnwick from "../assets/johnwick.jpg"
import killer from "../assets/killer.jpg"
import Little from "../assets/little.jpg"
import mission from "../assets/mission.jpg"
import spider from "../assets/spidermna.jpg"
import supera from "../assets/supermario.jpg"


import React, { useState } from 'react';
import Card from '../components/Card';

const Popular = () => {
  const [fav, setFav] = useState([
    {
      "Title": "Oppenheimer",
      "Year": "2023",
      "imdbID": "tt15398776",
      "Type": "movie",
      "Poster": openheimer
    },
    {
      "Title": "Barbie",
      "Year": "2023",
      "imdbID": "tt1517268",
      "Type": "movie",
      "Poster": barbie
    },
    {
      "Title": "Mission: Impossible - Dead Reckoning Part One",
      "Year": "2023",
      "imdbID": "tt9603212",
      "Type": "movie",
      "Poster": mission
    },
    {
      "Title": "Killers of the Flower Moon",
      "Year": "2023",
      "imdbID": "tt5537002",
      "Type": "movie",
      "Poster": killer
    },
    {
      "Title": "Spider-Man: Across the Spider-Verse",
      "Year": "2023",
      "imdbID": "tt9362722",
      "Type": "movie",
      "Poster": spider
    },
    {
      "Title": "John Wick: Chapter 4",
      "Year": "2023",
      "imdbID": "tt10366206",
      "Type": "movie",
      "Poster": johnwick
    },
    {
      "Title": "The Super Mario Bros. Movie",
      "Year": "2023",
      "imdbID": "tt6718170",
      "Type": "movie",
      "Poster": supera
    },
    {
      "Title": "Guardians of the Galaxy Vol. 3",
      "Year": "2023",
      "imdbID": "tt6791350",
      "Type": "movie",
      "Poster": Guardians
    },
    {
      "Title": "Fast X",
      "Year": "2023",
      "imdbID": "tt5433140",
      "Type": "movie",
      "Poster": fast
    },
    {
      "Title": "The Little Mermaid",
      "Year": "2023",
      "imdbID": "tt5971474",
      "Type": "movie",
      "Poster": Little
    }
  ]);

  const handleFavorite = (movie) => {
    
    console.log('Movie favorited:', movie);
  };

  return (
    <div className="w-full min-h-screen bg-black p-6">
      <h1 className="text-white text-3xl font-bold mb-6">Popular Movies</h1>
      
      {fav?.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {fav.map((movie) => (
            <Card 
              key={movie.imdbID} 
              movie={movie} 
              onFav={handleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-64">
          <p className="text-white text-xl">No movies found</p>
        </div>
      )}
    </div>
  );
};

export default Popular;