import { IMG_CDN_URL } from "../utils/constants"

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pl-2">
        <img alt="Moviecard" src={IMG_CDN_URL + posterPath}/>
    </div>
  )
}

export default MovieCard