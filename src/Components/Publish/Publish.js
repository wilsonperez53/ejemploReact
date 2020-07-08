import React from 'react'
import './Publish.css'
import Header from '../Header/Header';

function Publish(props) {

    return (
        <div>
            <div className="Header">
                <h1>Publicacion</h1>
                <h2>{props.author.name}</h2>
                <h2>{props.author.position}</h2>
            </div>
            <div className="Content">
                {props.texto}
            </div>
            <div className="Footer">
                {props.fecha}
            </div>
        </div>
    );
}

export default Publish;