import{useState, useEffect } from 'react'
import './App.css';
import MovieCard from './MovieCard';

//3726313

const API_URL = 'http://www.omdbapi.com/?apikey=3726313';

const movie1 = {
  
    "Title": "Superman & Lois",
    "Year": "2021–",
    "imdbID": "tt11192306",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BOGYyMmViMjgtZjViZi00NjkzLThjZGItMzZhYmZmOWZlMzdhXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"

}

const App =() => {

  const[movies ,setMovies] = useState([]);
  const{searchTerm,setSearchTerm} = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);

    const data = await response.json();

    setMovies(data.Search);
  }
  useEffect(() => {
     searchMovies('Superman');
  }, []);
  
  return (
    <div className="App">
    <h1>MovieLand</h1>

    <div className='search'>
      <input placeholder='Search for Movies' value={searchTerm}
      onChange={(e)=> setSearchTerm(e.target.value)}/>
      {/* <img src =} alt="search" onClick={() => searchMovies(searchTerm)}/> */}
    </div>
      {
        movies?.length > 0 
        ? ( <div className='container'>
          {movies.map((movie)=> 
          (<MovieCard movie={movie}/>
          ))}
           </div>
        ):(
          <div className='empty'>
            <h2>No Movies found</h2>
            </div>
        )
      }
     
    </div>
  
  );
}

export default App;
