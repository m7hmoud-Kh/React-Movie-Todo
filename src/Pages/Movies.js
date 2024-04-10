import axios from "axios";
import { useEffect, useRef, useState } from "react";
import MovieCard from "../components/MovieCard";
import '../assets/css/Movies.css';
import Pagination from "../components/Pagination";

const Movies = () => {

    const APIKEY = "06a219211389dcc0bed021c3b48d71af"



    const [movies, setMovies] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [allPages, setAllPages] = useState(1)
    const searchEl = useRef()

    let totalPagesNumber = []
    for (let i = 2; i < allPages; i++) {
        totalPagesNumber.push(i)
    }

    useEffect(()=>{
        axios.get(' https://api.themoviedb.org/3/movie/popular',{
            params:{
                api_key: APIKEY,
                page:pageNumber
            }
        })
        .then(res => {setMovies(res.data.results);setAllPages(res.data.total_pages)})
        .catch(err => console.log(err))
    },[pageNumber])

    const decrement = () => {
        if(pageNumber !== 1){
            setPageNumber(pageNumber - 1)
        }
    }

    const increment = () => {
        if(pageNumber !== allPages){
            setPageNumber(pageNumber + 1)
        }
    }

    const jumpTo = (number) => {
        setPageNumber(number)
    }

    const searchMovie = () => {
        const searchName =  searchEl.current.value;
        if(searchName){
            axios.get('https://api.themoviedb.org/3/search/movie',{
            params:{
                api_key: APIKEY,
                query:searchName
            }
            }).then(res => {setMovies(res.data.results);setAllPages(res.data.total_pages)})
        }
    }
    return (
        <>
        <div className="row mt-2 mb-2">
            <div className="col-lg-8">
                <input type="search"  ref={searchEl} placeholder="Search Movie Name.." className="form-control"/>
            </div>
            <div className="col-lg-2">
                <button  onClick={() => searchMovie()} className="btn btn-primary">Search</button>
            </div>
        </div>

        <div className="row mt-2" style={{backgroundColor:"#5a6d54"}}>
            {movies.map(movie => {
                return (
                <div className="col-lg-3 mt-2 mb-2"  key={movie.id}>
                        <MovieCard  movie={movie} key={movie.id}/>
                </div>
                )
            })}
        </div>
        <Pagination totalPagesNumber={totalPagesNumber} pageNumber={pageNumber} jumpTo={jumpTo} decrement={decrement} increment={increment}/>
        </>
    );
}

export default Movies;