// ComponentaConsumatoare.tsx

import React from 'react';
import { useExempluContext } from './ExempluContext';

const ComponentaConsumatoare: React.FC = () => {
  const { count, increment } = useExempluContext();

  return (
    <div>
      <p>Valoarea din context: {count}</p>
      <button onClick={increment}>Incrementează</button>
    </div>
  );
};

export default ComponentaConsumatoare;
