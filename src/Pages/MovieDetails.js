import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import '../assets/css/MovieDetails.css'
const MovieDetails = () => {

    const APIKEY = "06a219211389dcc0bed021c3b48d71af"
    const {id} = useParams()
    const [moviesDetails , setMoviesDetails] = useState({})
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}`,{
            params:{
                api_key:APIKEY
            }
        })
        .then(res => {setMoviesDetails(res.data);})
        .catch(err => console.log(err))
    },[])

    return (
        <div className="movie-details">
            <img src={`https://image.tmdb.org/t/p/w500/${moviesDetails.poster_path}`} alt="Movie Poster" />
            <div className="info">
                <h1 className="title">{moviesDetails.title}</h1>
                <p className="release-date">Release Date: {moviesDetails.release_date}</p>
                <ul>
                {moviesDetails.genres && moviesDetails.genres.map(gen => {
                        return <li className="genre" key={gen.id}>{gen.name}</li>
                })}
                </ul>

                <p className="description">{moviesDetails.overview}</p>
                <p className="rating">Rating: {moviesDetails.vote_average}</p>
            </div>
        </div>
    );
}

export default MovieDetails;