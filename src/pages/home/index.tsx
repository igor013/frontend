import React from 'react';

import ButtonExample from '../../components/buttonexample/examplecomponentbutton';

const Home: React.FC = () => {
  return (
      <p>Home</p>

    // Para chamar um componenete criar importe acima e faca assim (passando paramoetros)
    <ButtonExample titulo="Botao Teste" />

  );
}

export default Home;