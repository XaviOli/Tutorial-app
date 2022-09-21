import React from "react";
import '../hojas-de-estilo/Styled.js';

function Escena(props) {
    return (
        <div className='contenedor-escena'>
            <div className='contenedor-texto-escena'>
                <p className='texto-escena'>{props.texto}</p>
            </div>
        </div>
    )
}

export default Escena;