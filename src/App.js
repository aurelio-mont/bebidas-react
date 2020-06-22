import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario'
import CategotiasProvider from './context/CategoriasContex'

function App() {
  return (
    <CategotiasProvider>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <Formulario />
        </div>
      </div>
    </CategotiasProvider>
  );
}

export default App;
