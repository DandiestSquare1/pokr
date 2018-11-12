import React from 'react'

import Board from './Board'
import Player from './Player'
import ControlPanel from './ControlPanel'
import { Suit } from '../model/poker'
import styles from './Table.module.sass'

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

const Table = () => (
  <div className={styles.root}>
    <Board cards={cards.slice(0, 4)} />
  </div>
)

export default Table
