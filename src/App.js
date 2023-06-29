import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';



import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ProductDetailPage from './pages/ProductDetailPage';
import Cart from './pages/Cart';
import Favourite from './pages/Favourite';
import Mensclothing from './pages/Mensclothing';
import WoMensclothing from './pages/WomensClothing';
import Jewellery from './pages/jewellery';
import Electronics from './pages/Electronics';


function App() {
  return (

    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />

          <Route path='/signup' element={<SignupPage />} />

          <Route path='/login' element={<LoginPage />} />
          <Route path='/products/:id' element={<ProductDetailPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/favourite' element={<Favourite />} />
          <Route path='/Mensclothing' element={<Mensclothing />} />
          <Route path='/Womenscolthing' element={<WoMensclothing />} />
          <Route path='/Jewellery' element={<Jewellery />} />
          <Route path='/Electronics' element={<Electronics />} />

        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
