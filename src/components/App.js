import React, { Component } from 'react';

import Board from './Board'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board cards={['A']} />
      </div>
    );
  }
}

export default App;
