import { useEffect,  } from "react";
import { API_OPTIONS } from "../utils/constants"
import { useDispatch,  } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
     // but we are not done this with usestate we do it with redux store
  //const [trailer_Id , setTrailer] = useState(null)

  //fetch trailer video && up[dating to the store
  const getMovieVideos = async () =>{
    const data = await fetch(
       'https://api.themoviedb.org/3/movie/'+ movieId+'/videos?language=en-US',
         API_OPTIONS
        );
        const json = await data.json();
       // console.log(json);
        const filterData = json.results.filter((video)=>video.type==="Trailer")
        const trailer = filterData.length ?filterData[0] : json.results[0]  
       // console.log(trailer);
        //setTrailer(trailer.key) 
    dispatch(addTrailerVideo(trailer))
};
useEffect(()=>{
    getMovieVideos();
},[])
}
export default useMovieTrailer;