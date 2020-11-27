import React from 'react';
import Contador from './components/Contador'
import Jsx from './components/Jsx'
import Lista from './components/Lista'
import Formulario from './components/Formulario'
function App() {
  return (
    <div className="container">
      <h1>Hola m undo</h1>
      <Contador/>      
      <Jsx/>
      <Lista/>
      <Formulario/>
    </div>
  );
}

export default App;
