import React from "react";
import '../hojas-de-estilo/Styled.js';
import { Rectangulo, Frame } from "../hojas-de-estilo/Styled.js";

function Escena(props) {
    return (
        <Rectangulo>
           <Frame>{props.texto}</Frame>
        </Rectangulo>
    )
}

export default Escena;