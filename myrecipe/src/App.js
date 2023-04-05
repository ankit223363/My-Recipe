import './App.css';
import Header from './components/header'
import Body from './components/body'
import Footer from './components/footer';
import { Route,Routes } from 'react-router-dom';
import Sidelist from './components/sidelist';
import Recipes from './components/recipes';
import Popular from './components/popular';
function App() {
  return (
    <div className='appclass'>
    <Header />
    <div className='headerimage' > My Recipes</div>
    <Sidelist />
    <Routes >
        <Route path='/' element={<Body />} />
        <Route path='/Home' element={<Body />} />
        <Route path='/Popular' element={<Popular />} />
        <Route path='/Trending' element={<Recipes/>} />
      </Routes>
    
    <Footer />
    
    
    </div>
  );
}

export default App;
