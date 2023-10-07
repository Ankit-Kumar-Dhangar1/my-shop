import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import { sum } from '../App';

function main(name: string) {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello {name}!</p>
      </header>
    </div>
  );
}

export default main;
