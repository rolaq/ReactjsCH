
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';
import ItemsDetailsContainer from './components/ItemsListContainer/ItemsDetailsContainer.jsx';
import Layout from './pages/Layout';
import "bulma/css/bulma.css";

function App() {
  
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Layout/>}>
        
          <Route index element={<ItemsListContainer />} />
          <Route path="/category/:id" element={<ItemsListContainer />} />
          <Route path="/item/:id" element={<ItemsDetailsContainer />}/>
         
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
