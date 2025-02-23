import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)
  return (
   movies &&
    <div className='bg-black'>
      <div className='-mt-52 pl-12 relative z-20 '>
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovie}/>
      <MovieList title={"Trending"} movies={movies.nowPlayingMovie}/>
      <MovieList title={"Popular"} movies={movies.nowPlayingMovie}/>
      <MovieList title={"Upcoming movies"} movies={movies.nowPlayingMovie}/>
      <MovieList title={"Horror movies"} movies={movies.nowPlayingMovie}/>
      </div>
    </div>
  )
}

export default SecondaryContainer