import './App.css';
import Escena from './componentes/Escena.jsx';
import Phrases from './componentes/Phrase.jsx';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <Escena 
          texto={Phrases[0].txt} />
        <Escena 
          texto={Phrases[1].txt} />
        <Escena 
          texto={Phrases[2].txt} />
        <Escena 
          texto={Phrases[3].txt} />
      </div>
    </div>
  );
}

export default App;
