import React from "react";
import frases from "./Frases";
import { Paragraph } from "../hojas-de-estilo/Styled";

// Generally, the key should be a unique ID assigned to each item. We can use the array index as a key.

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