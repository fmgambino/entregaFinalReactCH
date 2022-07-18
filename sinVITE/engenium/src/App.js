import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './pages/products';
import Home from './pages/home';
import Detalle from './pages/detalleProducto';
import Categoria from './pages/categorias';
import Cart from './components/Cart/Cart';
import {CartContextProvider} from './context/CartContext';
import CompradoPage from './pages/compraRealizada';
import Aboutus from './pages/aboutus';
import DotsMobileStepper from './pages/projects';
import Contacto from './pages/contacts';

function App() { 
  return (
    //JSX   
      <div className='wrapper'>
        <CartContextProvider>
          <BrowserRouter>
            <NavBar/>           
              <Routes>
                  <Route exact path='/' element={<Products/>}/> 
                  <Route exact path='/home' element={<Products/>}/> 
                  <Route exact path='/inicio' element={<Home/>}/>
                  <Route exact path='/aboutus' element={<Aboutus/>}/>
                  <Route exact path='/projects' element={<DotsMobileStepper/>}/>
                  <Route exact path='/products' element={<Products/>}/>
                  <Route exact path='products/:category' element={<Categoria/>}/>
                  <Route path='/product/:id' element={<Detalle/>}/> 
                  <Route exact path='/contacts' element={<Contacto/>}/>     
                  <Route path='*' element={<h1>404 - NO EXISTE LA PAGINA</h1>}/>  
                  <Route exact path='/cart' element={<Cart/>}/> 
                  <Route path="comprado/:orderId" element={<CompradoPage />} />       
              </Routes> 
                     
          </BrowserRouter>  
        </CartContextProvider>  
      </div>
  );
}

export default App;
