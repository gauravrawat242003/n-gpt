import { addNowPlayingMovie } from "../utils/movieSlice";
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { useEffect } from "react";

const useNowPlayingMovie = () => {
     //fetching the data and putting that in store
   const dispatch = useDispatch();
   const getNowPlayingMovie = async () =>{
    const data = await
    fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', 
    API_OPTIONS
  );
  const json = await data.json();
  //console.log(json.results);
  dispatch(addNowPlayingMovie(json.results))
  
   }

   useEffect(() => {
    getNowPlayingMovie();
   },[])
}
export default useNowPlayingMovie;