import React, {useState} from 'react';
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

    return (
        <div style={estiloCentrado}>
          <input type="text" style={estiloInput} onChange={refrescarCantidadCaracteres} />
          <p>El input tiene {caracteres.length} caracteres</p>
          <Validation texto={caracteres} />
        </div>
      );
}

export default Entrada;