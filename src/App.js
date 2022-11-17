import {Route, Routes} from "react-router-dom"
import Busqueda from "./components/Busqueda/Busqueda.jsx";
import Cat from "./components/Cat/Cat.jsx";
import Home from './components/Home/Home.jsx';
import Listas from "./components/Listas/Listas.jsx";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cat' element={<Cat />} />
      <Route path='/fetch' element={<Listas />} />
      <Route path='/busqueda' element={<Busqueda />} />
    </Routes>
  );
}

export default App;
