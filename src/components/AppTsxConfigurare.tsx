import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const AppTsxConfigurare = () => {
  return (
    <div>
      <h1>Folosind props-uri (de la parinte la copil)</h1>
      <p>Props (proprietăți) în React reprezintă date transmise între componente. 
  Acestea sunt utilizate pentru a trimite informații de la un component părinte la unul copil, facilitând comunicarea între ele.

</p>
      <p>
        In componenta parinte, setezi o proprietate si o trimiti catre componenta copil ca un atribut. Componenta copil
        primește aceste date prin intermediul propriilor sale proprietăți (props).
      </p>
      <h3>Vom avea urmatorul fisier `App.tsx' sau componenta parinte</h3>
      <SyntaxHighlighter language="javascript" style={docco }  className="SyntaxHighlighter">
        {`
          import React from 'react';

          //importam Component1 din folderul components-> fisierul Component1
          import Component1 from './components/Component1';
          
          //cream componenta principala a aplicatiei
          const App: React.FC = () => {
            
            return (
              <div>
                <h1 style={{margin:'auto', textAlign:'center'}}>React TypeScript transmitere de date intre componente</h1>

                {/* cream o instanta a componentei cu numele Component1 */}
                {/* Proprietatea "message" este trimisa catre componenta cu valoarea "Acesta este primul mesaj"  */}
                <Component1 message="Acesta este primul mesaj" />
          
              </div>
            );
          };
          
          // Exportam componenta principala pentru a o putea randa în index.tsx
          export default App;
        `}
      </SyntaxHighlighter>
          <br />
      <h2>Rezumat la ce-am adaugat:</h2>
      <p>
        Este necesar sa importam `Component1` pentru a face TypeScript <b>sa recunoasca `Component1`. </b>Acest lucru este
        util in cazul autocompletarii (TypeScript iti ofera sugestii automate), verificarea statica a tipurilor de date
        (daca introducem o valoare de <b>tip gresit</b> unei variabile sau sa trimiti prop-uri nevalide catre o componenta
        TypeScript va emite erori).
      </p>
      <p>
        &lt; Component1 message="Acesta este primul mesaj" / &gt; este o modalitate de a crea o instanță a componentei
        Component1 și de a-i trimite o proprietate numită "message" cu valoarea specificată.
      </p>
      <br />
    </div>
  );
};

export default AppTsxConfigurare;
