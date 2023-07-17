import NavBar from "./components/NavBar/NavBar";
import Maia from "./components/Inicio/Maia";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={'Bienvenidos'}/>
      <Maia/>
    </div>
  );
}

export default App;
