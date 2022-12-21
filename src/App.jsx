
import './App.css';
import {Routes,Route,Link, BrowserRouter} from "react-router-dom";
import Listado from './componentes/Listado';
import Filtrar from './componentes/Filtrar';
import Main from './componentes/Main'
import { Footers } from './componentes/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componentes/Header';





function App() {


  return (
    <div className="container">
      <BrowserRouter> 

    <Header/>

   
  <hr />
  <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/Filtrar" element={<Filtrar/>}/>
    <Route path="/Listado"element={<Listado/>}/>
  </Routes>

  </BrowserRouter>
  
  <Footers/>

    </div>
  );
}

export default App;
