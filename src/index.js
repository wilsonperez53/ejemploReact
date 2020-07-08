import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BasicoE from './Components/Login2/Login2';
import * as serviceWorker from './serviceWorker';
// Se importa el "store"
import storeF from './Components/redux/store'

// Para conectar Redux con React se importa el siguiente paquete
import { Provider } from 'react-redux';

const store = storeF();


const elementoDOM = <div />;
const elementoUsuario = <Saludo nombre="Maria" edad="4" />;

function Saludo(props) {
  return <h1>Index JS {props.nombre} edad {props.edad}</h1>
}
/*function presentarHora() {
  const elemento = (
    <div>
      <h1>Hola Mundo</h1>
      <h2>la hora actual es {new Date().toLocaleTimeString()}.</h2>
    </div>

  )

  ReactDOM.render(
    elemento,
    document.getElementById('root')
  );

}
setInterval(presentarHora, 1000);*/
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

//ReactDOM.render(<BasicoE nombre="José" />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

