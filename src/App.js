import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";


import Home from './Home';
import Post from './Post';
import NotFound from './NotFound';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layout from './Layout';
function App() {
  return (

    <Router>
          <Routes >
            <Route path='/' element={<Layout/>}>
              <Route index  element={<Home/>} />
              <Route path='posts' element={<Post/>}/>
              <Route path='*' element={<NotFound/>} />
            </Route>
          </Routes>
    </Router>


    );
}

export default App;
