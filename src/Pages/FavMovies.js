import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { useSelector } from 'react-redux'

const FavMovies = () => {
    const [favMovie,setFavMovie] = useState([])

    const allFavMovie = useSelector(state => state.allFavMovie.totalMovie)

    useEffect(()=>{
        setFavMovie(allFavMovie)
    },[allFavMovie])

    return (
        <div className="row mt-2" style={{backgroundColor:"#5a6d54"}}>
        {favMovie.map(movie => {
            return (
            <div className="col-lg-3 mt-2 mb-2"  key={movie.id}>
                    <MovieCard movie={movie} key={movie.id}/>
            </div>
            )
        })}
    </div>
    );
}

export default FavMovies;