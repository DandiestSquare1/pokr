import React, { Component } from 'react';

import Board from './Board'
import { Suit } from '../model/poker'

const cards = [{
  suit: Suit.SPADE,
  rank: '5'
}, {
  suit: Suit.HEART,
  rank: '8'
}, {
  suit: Suit.DIAMOND,
  rank: 'T'
}, {
  suit: Suit.CLUB,
  rank: 'A'
}, {
  suit: Suit.DIAMOND,
  rank: '7'
}]


class App extends Component {
  render() {
    return (
      <div className="App">
        <Board cards={cards.slice(0, 4)} />
      </div>
    );
  }
}

export default App;
