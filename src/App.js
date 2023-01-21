import './App.css';
import {BrowserRouter,Routes,Link,Route} from 'react-router-dom';
import Home from './components/Home';
import RestaurantDetails from './components/RestaurantDetails';
import RestaurantList from './components/RestaurantList';
import RestaurantSearch from './components/RestaurantSearch';
import RestaurantUpdate from './components/RestaurantUpdate';
import RestraurantCreate from './components/RestraurantCreate';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/list">List</Link></li>
      <li><Link to="/create">Create</Link></li>
      <li><Link to="/search">Search</Link></li>
      <li><Link to="/details">Details</Link></li>
      <li><Link to="/update">Update</Link></li>
    </ul>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/list' element={<RestaurantList/>}></Route>
      <Route path='/create' element={<RestraurantCreate/>}></Route>
      <Route path='/search' element={<RestaurantSearch/>}></Route>
      <Route path='/details' element={<RestaurantDetails/>}></Route>
      <Route path='/update' element={<RestaurantUpdate/>}></Route>
    </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
