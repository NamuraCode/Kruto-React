import { Route, Routes } from 'react-router-dom'
import './App.css';

import Footer from './components/utils/Footer/Footer';
import SideBar from './components/utils/Sidebar/Sidebar';
import Products from './components/pages/Products/Products';
import Header from './components/utils/Header/Header';
import AllProducts from './components/pages/AllProducts/AllProducts';


function App() {
  return (
    <div className="App">
      <Header />
      <div className='home'>
        <SideBar />
        <Routes>
          <Route path='/' exact="true" element={<Products/>} />
          <Route path='/products' element={<AllProducts/>}/>
          <Route path='/users' element={<Products/>}/>
          <Route path='/lastProduct' element={<Products/>}/>
          <Route path='/lastUser' element={<Products/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
