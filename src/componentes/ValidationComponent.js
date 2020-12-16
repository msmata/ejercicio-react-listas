import React from 'react';

const Validation = (props) => {

    let textoADesplegar = "";
    if (props.texto.length < 10) {
        textoADesplegar = "Text too short";
    } else {
        textoADesplegar = "Text long enough";
    }

    return (
        <div>
            {textoADesplegar}
        </div>
    );
}

export default Validation;