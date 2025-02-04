
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';
import ItemsDetailsContainer from './components/ItemsListContainer/ItemsDetailsContainer.jsx';
import Layout from './pages/Layout';
import "bulma/css/bulma.css";
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

function App() {
  
  return (
    <BrowserRouter> 
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout/>}>
          
            <Route index element={<ItemsListContainer />} />
            <Route path="/category/:categoryId" element={<ItemsListContainer />} />
            <Route path="/item/:itemId" element={<ItemsDetailsContainer />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/checkout" element={<Checkout/>}/>
            
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
    
  );
}

export default App;
