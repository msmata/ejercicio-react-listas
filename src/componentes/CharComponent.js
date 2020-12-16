import React from 'react';
import './Entrada.css';

const CharComponent = (props) => {

    return (
        <li className="estiloLista" onClick={props.click}>{props.caracter}</li>
    );
}

export default CharComponent;