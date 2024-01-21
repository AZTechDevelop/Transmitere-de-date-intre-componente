import React, { useEffect } from 'react';
import Componenta1 from './components/Component1';
import AppTsxConfigurare from './components/AppTsxConfigurare';
import ComponentaConsumatoare from './contexts/ComponentaConsumatoare';
import { ExempluContextProvider } from './contexts/ExempluContext';
const App: React.FC = () => {

  return (
    <div>
   
      <h1 style={{ textAlign: 'center' }}>React TypeScript transmitere de date între componente</h1>
      <AppTsxConfigurare />
      <Componenta1 message="nu știu ce să zic" />
      
      <ExempluContextProvider>
      <div>
        <h1>Exemplu Context API in TypeScript</h1>
        <h3>Context API este o caracteristică a React care oferă o modalitate de a partaja starea între 
        componente într-un arbore de componente fără a trebui să trimiti proprietăți în mod explicit între ele. 
        Este util în cazurile în care mai multe componente trebuie să acceseze aceeași stare sau funcționalități.</h3>
        <ComponentaConsumatoare />
      </div>
    </ExempluContextProvider>

    
    </div>
  );
};

export default App;
