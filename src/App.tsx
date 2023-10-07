import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './pages/main'; // Note the capitalized 'Main' component

function sum(a: number, b: number): JSX.Element {
   return <div> <p>{a + b}</p></div>;
}

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
      {/* Include the 'Main' component here */}
      {Main('Ankit')}; 
      {sum(1, 2)}
    </div>
  );
}

export { sum };
export default App;
