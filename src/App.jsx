
import NavBar from './components/NavBar/NavBar';
import ItemsListContainer from './components/ItemsListContainer/ItemsListContainer';


import "bulma/css/bulma.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemsListContainer greeting={'Bienvenidos'}/>
    </div>
  );
}

export default App;
