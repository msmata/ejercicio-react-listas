import React, {useState} from 'react';
import CharComponent from './CharComponent';
import Validation from './ValidationComponent';

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

    const eliminarCaracterDeCadena = (indice) => {
        let arregloCadena = Array.from(caracteres);
        arregloCadena.splice(indice, 1);
        let cadena = arregloCadena.join('');
        setCaracteres(cadena);
    }

    return (
        <div style={estiloCentrado}>
          <input type="text" style={estiloInput} onChange={refrescarCantidadCaracteres} value={caracteres} />
          <p>El input tiene {caracteres.length} caracteres</p>
          <Validation texto={caracteres} />
          <ul>
            {Array.from(caracteres).map((caracter, _index) => <CharComponent caracter={caracter} click={() => eliminarCaracterDeCadena(_index)} />)}
          </ul>
        </div>
      );
}

export default Entrada;