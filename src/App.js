import React, { useState } from 'react';
import ChildComponent from './Components/ChildComponent';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Compteur : {count}</h1>
      <button onClick={() => setCount(count +1)}>Incrémenter</button>
     <button onClick={ () => setCount(count -1)}>Decrementer</button>
      <ChildComponent count={count} />
    </div>
  );
}


export default App;

