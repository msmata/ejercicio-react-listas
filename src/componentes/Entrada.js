import React, {useState} from 'react';
import CharComponent from './CharComponent';
import Validation from './ValidationComponent';
import './Entrada.css'

const Entrada = () => {

    const estiloInput = {
        marginTop: 100
    };

    const estiloCentrado = {
        textAlign: "center"
    };

    const [caracteres, setCaracteres] = useState("");

    const refrescarCantidadCaracteres = (event) => {
        const cadena = event.target.value;
        setCaracteres(cadena);
    }

    return (
        <div style={estiloCentrado}>
          <input type="text" style={estiloInput} onChange={refrescarCantidadCaracteres} />
          <p>El input tiene {caracteres.length} caracteres</p>
          <Validation texto={caracteres} />
          <ul className="estiloLista">
            {Array.from(caracteres).map(caracter => <CharComponent caracter={caracter} />)}
          </ul>
        </div>
      );
}

export default Entrada;