


import React, { useContext } from 'react';
import { store } from '../App';
import Card from '../components/Card';

const Fav = () => {
  const [fava] = useContext(store);
  
  return (
    <div className='w-full min-h-screen bg-black p-6'>
      <h1 className="text-white text-3xl font-bold mb-6">favourites</h1>
      {fava.length > 0 ? (
        <div className="mt-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {fava.map((movie) => (
            <Card key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="text-white text-center pt-10">No favorite movies yet</div>
      )}
    </div>
  );
};

export default Fav;
