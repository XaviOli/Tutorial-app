import React from "react";

export default function Navbar(props){

    return(   
        <div>
            <button onClick={()=> props.handleClick(-1)}>Anterior</button>
            <button onClick={()=> props.handleClick(1)}>Següent</button>
        </div> 
    )
};