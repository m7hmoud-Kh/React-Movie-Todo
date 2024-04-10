import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from './Pages/Home';
import Post from './Pages/Post';
import NotFound from './Pages/NotFound';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './Layout';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Todo from './Pages/Todo';
import Movies from './Pages/Movies';
import MovieDetails from './Pages/MovieDetails';
import FavMovies from './Pages/FavMovies';
function App() {
  return (

    <Router>
          <Routes >
            <Route path='/' element={<Layout/>}>
              <Route index  element={<Home/>} />
              <Route path='posts' element={<Post/>}/>
              <Route path='login' element={<Login />}/>
              <Route path='register' element={<Register/>}/>
              <Route path='todo' element={<Todo/>}/>
              <Route path='movies'  element={<Movies/>}/>
              <Route path='movies/:id' element={<MovieDetails/>}/>
              <Route path='fav-movies' element={<FavMovies/>} />
              <Route path='*' element={<NotFound/>} />
            </Route>
          </Routes>
    </Router>


    );
}

export default App;
