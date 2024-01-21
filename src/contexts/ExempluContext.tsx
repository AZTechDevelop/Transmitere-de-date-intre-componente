// ExempluContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Definim tipul datelor pe care le vom stoca în context
type ExempluContextType = {
  count: number;
  increment: () => void;
};

// Inițializăm contextul cu o valoare implicită
const ExempluContext = createContext<ExempluContextType | undefined>(undefined);

// Componenta ContextProvider furnizează starea și metodele pentru modificarea stării
export const ExempluContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <ExempluContext.Provider value={{ count, increment }}>
      {children}
    </ExempluContext.Provider>
  );
};

// Hook-ul custom pentru a folosi valoarea contextului în alte componente
export const useExempluContext = () => {
  const context = useContext(ExempluContext);

  if (!context) {
    throw new Error('useExempluContext must be used within a ExempluContextProvider');
  }

  return context;
};
