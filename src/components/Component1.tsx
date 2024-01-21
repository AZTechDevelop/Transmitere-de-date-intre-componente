import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
interface Componenta1Props {
  message: string;
}

const Componenta1: React.FC<Componenta1Props> = ({ message }) => {
  return (
     <div>
      <h3>Urmatorul fisier de care avem nevoie este `Component1.tsx` sau componenta copil</h3>
      <h4>Atentie! trebuie creat in directorul (folderul) corespunzator, daca nu aveti in directorul `src` directorul `components` creati-l.</h4>
      <p>In directorul components cream fisierul 'Component1.tsx'</p>

      <SyntaxHighlighter language="javascript" style={docco} className="SyntaxHighlighter">
      {`
          import React from 'react';

          // Definim o interfata pentru proprietatile componentei 1
          interface Component1Props {
            message: string;
          }

          //cream "Component1" ca o functie functionala React.FC, care primeste un obiect de proprietati "Component1Props"
          const Component1: React.FC<Component1Props> = ({ message }) => {
            return (
              <div>
                <h2>Transmitere de date intre componente React</h2>
                {/* Afisam mesajul primit ca proprietate */}
                <p>{message}</p>
              </div>
            );
          };
          
          // Exportam "Component1"  pentru a o putea importa în alte fisiere
          export default Component1;
          `}
    </SyntaxHighlighter>
    </div>
  );
};


export default Componenta1;
