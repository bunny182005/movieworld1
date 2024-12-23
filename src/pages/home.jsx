
import React, { useEffect, useState, useRef } from 'react';
import Card from '../components/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const API_URL = 'https://www.omdbapi.com?apikey=27e93683';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);

  const searchMovies = async (title) => {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      setMovies(data.Search || []);
    } catch (error) {
      console.error('Error fetching movies:', error);
      setMovies([]);
    }
  };

  useEffect(() => {
    if (searchTerm) {
      searchMovies(searchTerm);
    }
  }, []);

  useEffect(() => {
    const handleKeyUp = (event) => {
      if (event.key === 'Enter') {
        searchMovies(searchTerm);
      }
    };

    const inputElement = inputRef.current;
    if (inputElement) {
      inputElement.addEventListener('keyup', handleKeyUp);
      return () => {
        inputElement.removeEventListener('keyup', handleKeyUp);
      };
    }
  }, [searchTerm]);

  
  
    return (
      <div className="w-full min-h-screen bg-black">
        <div className="w-full flex justify-center items-center px-4 sm:px-8">
          <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-1/6 mt-6 sm:mt-8 md:mt-10 
                        bg-gray-800 rounded-md flex items-center px-3">
            <input
              ref={inputRef}
              placeholder="Search for movies"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-700 w-full text-white p-2 placeholder-gray-800 
                        outline-none placeholder:text-white text-sm sm:text-base"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-white pl-3 w-4 h-4 sm:w-5 sm:h-5 cursor-pointer"
              onClick={() => searchMovies(searchTerm)}
            />
          </div>
        </div>
  
        {movies?.length > 0 ? (
          <div className="mt-6 sm:mt-8 md:mt-10 w-full grid grid-cols-1 sm:grid-cols-2 
                        lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 px-4 sm:px-8">
            {movies.map((movie) => (
              <Card key={movie.imdbID} movie={movie} />
            ))}
          </div>
        ) : (
          <div className="text-center text-white mt-6 sm:mt-8 md:mt-10">
            {searchTerm !== "" ? "No movies found" : "Search for movies"}
          </div>
        )}
      </div>
    );
  };

export default Home;


