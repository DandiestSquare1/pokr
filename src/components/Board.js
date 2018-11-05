import React from 'react'
import PropTypes from 'prop-types'
import { Suit } from '../model/poker'

import Card from './Card'

const Board = ({ cards }) => (
  <div>
    {cards.map((card, index) => <Card key={index} suit={Suit.CLUB} rank={card}/>)}
  </div>
)

Board.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.string)
}

export default Board
