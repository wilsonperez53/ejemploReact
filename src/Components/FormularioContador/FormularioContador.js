import React, { useRef } from 'react';
import './FormularioContador.css';
import { aumentarContador, disminuirContador } from '../redux/store/Contador/action'
import { connect } from 'react-redux';
import { selectActiveContador } from '../redux/store/Contador/reducer';

const FormularioContador = ({ contador, aumentarContador, disminuirContador }) => {
  const onButtonAumentarClick = () => {
    aumentarContador(contador);
  }
  const onButtonDisminuirClick = () => {
    disminuirContador(contador);
  }
  return (
    <div>
      Rate this page:
      <button onClick={onButtonDisminuirClick}><i class="fa fa-minus" aria-hidden="true"></i></button> {contador} <button onClick={onButtonAumentarClick}><i class="fa fa-plus" aria-hidden="true"></i></button>

    </div>
  );
}

const mapStateToProps = state => {
  return {
    contador: selectActiveContador(state)
  }
}

// Se conecta con Redux: recuperando y enviando parámetros al "store"
export default connect(mapStateToProps, { aumentarContador, disminuirContador })(FormularioContador);



