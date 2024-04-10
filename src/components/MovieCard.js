import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from "react";


const MovieCard = ({movie}) => {

    const [favMovie,setFavMovie] = useState([])
    const allFavMovie = useSelector(state => state.allFavMovie.totalMovie)

    const dispatch = useDispatch()

    const addToFav = () => {
        let found = false
        found = favMovie.some((fav) => fav.id === movie.id);
        if(!found){
            setFavMovie([
                ...favMovie,
                movie
            ])
            dispatch({type:'ADD',payload:movie})
        }
    };
    const removeFromFav = () => {
        let found = false
        found = favMovie.some((fav) => fav.id === movie.id);
        if(found) {
            setFavMovie(favMovie.filter(fav => fav.id !== movie.id))
            dispatch({type:"REMOVE",payload:movie})
        }
    }
    useEffect(()=>{
        setFavMovie(allFavMovie)
    },[allFavMovie])

    return (
    <div className="card" style={{width: '18rem'}} >
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt={movie.id} />
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">{movie.overview.substring(0,50)}...</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">popularity: {movie.popularity}</li>
                <li className="list-group-item">original language: {movie.original_language}</li>
                <li className="list-group-item">Rating: {movie.vote_average}</li>
            </ul>
            <div className="card-body">
                <Link to={`/movies/${movie.id}`}>More Details</Link>
                {
                    favMovie.some((fav) => fav.id === movie.id) ?
                    (<div  style={{fontSize:"30px",color:"gold"}}
                    onClick={() => removeFromFav()}>
                        <i className="fas fa-xmark"></i>
                    </div>) :
                    (<div style={{fontSize:"30px",color:"red"}} onClick={() => addToFav()}>
                            <i className="fas fa-star" ></i>
                    </div>)
                }
            </div>
    </div>
    );
}

export default MovieCard;