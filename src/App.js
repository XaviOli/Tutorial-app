import React from "react";
import { useState } from "react";
import Navbar from "./componentes/Navbar";
import Escena from "./componentes/Escena";
import { Background, ButtonsDiv, Title, ButtonHome, Fons } from "./hojas-de-estilo/Styled";
import frases from "./componentes/Frases";
import { GoRocket } from "react-icons/go";

function App() {

  const [ count, setCount ] = useState(1);
  const [ isShown, setIsShown ] = useState(true);

  function Landing(){
    return(
      <div>
        <Fons>
        <Title>
          <h1>Benvinguts i benvingudes</h1>
          <h3>Us explicarem una breu història de herois del espai sideral.</h3>
          <img src="https://robohash.org/Cherembo"/>
          <img  src="https://robohash.org/Miltika"/>
          <img  src="https://robohash.org/Pomposi"/> 
          <ButtonHome onClick={() => setIsShown(false)}>
            <GoRocket />
              Començar ara
          </ButtonHome>
          </Title>
          </Fons>
      </div>
    )
  }

  function handleClick(i) {
    setCount((prevCount) => {
      if (prevCount + i > frases.length || prevCount + i <= 0) return prevCount;
      return prevCount + i;
    });
  }

  return (
    <div>
      {isShown ? (
         <Landing />
      ) : (
        <Background image={frases[count - 1].img}>
        <ButtonsDiv>
          <Navbar handleClick={handleClick} />
        </ButtonsDiv>
          <Escena numEscena={count} />
        </Background>
      )}
    </div>
  );
}


export default App;
