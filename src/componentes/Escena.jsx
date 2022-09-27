import React from "react";
import frases from "./Frases";
import { Paragraph } from "../hojas-de-estilo/Styled";

// We always must put an unic key when we are iterating an array.

function Escena(props){
    
    const paragraph = frases.map(frase => {
        return(
            <div key={frase.id}>
            <Paragraph active={props.numEscena === frase.id}>{frase.txt}</Paragraph>
            </div> 
        ) 
    })
    
    return (
        <div> 
        {paragraph}
        </div>
        )   
}


export default Escena;