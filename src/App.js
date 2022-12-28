import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import {CartProvider} from './context/CartContext'
import Checkout from './components/Checkout/Checkout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <CartProvider >
        <BrowserRouter>
          <Navbar/>
          <ToastContainer/>
          <Routes>
            <Route path='/' element={<ItemListContainer greeting="Bienvenido a OpelTech"/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
