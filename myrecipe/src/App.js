import './App.css';
import Header from './components/header'
import Body from './components/body'
import Footer from './components/footer';
import { Route,Routes } from 'react-router-dom';
import Sidelist from './components/sidelist';
import Recipes from './components/recipes';
import Trending from './components/trending';
function App() {
  return (
    <div className='appclass'>
    <Header />
    <div className='headerimage' > My Recipes</div>
    <Sidelist />
    <Routes >
        <Route path='/' element={<Body />} />
        <Route path='/Home' element={<Body />} />
        <Route path='/Recipes' element={<Recipes/>} />
        <Route path='/Trending' element={<Trending/>} />
      </Routes>
    
    <Footer />
    
    
    </div>
  );
}

export default App;
