import React, {useState} from 'react';

const Entrada = () => {

    const estiloInput = {
        marginTop: 100
    };

    const estiloCentrado = {
        textAlign: "center"
    };

    const [cantidadCaracteres, setCantidadCaracteres] = useState(0);

    const refrescarCantidadCaracteres = (event) => {
        const cadena = event.target.value;
        setCantidadCaracteres(cadena.length);
    }

    return (
        <div style={estiloCentrado}>
          <input type="text" style={estiloInput} onChange={refrescarCantidadCaracteres} />
          <p>El input tiene {cantidadCaracteres} caracteres</p>
        </div>
      );
}

export default Entrada;