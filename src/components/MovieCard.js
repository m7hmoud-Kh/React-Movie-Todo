import { Link } from "react-router-dom";

const MovieCard = ({movie}) => {

    return (
    <>
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
            </div>
    </div>
    {console.log()}
    </>
    );
}

export default MovieCard;