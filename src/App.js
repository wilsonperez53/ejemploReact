import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header'
import Menu from './Components/Menu/Menu'
import Footer from './Components/Footer/Footer'
import Listado from './Components/Listado/Listado'
import { EditorConmutadorHOC, AreaExpandibleHOC } from './Components/HOCConmutador/HOCConmutador'
import { ListaUsuariosconSuscripcion, ComentarioconSuscripcion } from './Components/HOC/HOC'



function App() {

  /*<ListaUsuariosconSuscripcion url='https://jsonplaceholder.typicode.com/users' />
        <ComentarioconSuscripcion id="2" url='https://jsonplaceholder.typicode.com/comments' />*/
  return (
    <div>
      <Header author={{ name: "Jose", position: "editor" }} texto="Publicacion de prueba" fecha="03/13/2020" />
      <Menu></Menu>


      <br />
      <Footer author={{ name: "Wilson Perez", email: "wilsonperez@gmail.com" }} texto="Derechos Reservados" fecha="05/18/2020" />
    </div>
  );
}
export default App;