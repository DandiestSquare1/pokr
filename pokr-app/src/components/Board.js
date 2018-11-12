import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import times from 'lodash/times'

import { Suit, CardPropType } from '../model/poker'
import Card from './Card'
import styles from './Board.module.sass'

class Board extends PureComponent {
  static propTypes = {
    cards: PropTypes.arrayOf(CardPropType),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    max: PropTypes.number
  }

  static defaultProps = {
    max: 5,
    size: 'medium'
  }

  render() {
    const { cards, size, max } = this.props
    const cardsLength = cards ? cards.length : 0
    const placeholders = cards ? max - cardsLength : max
    return (
      <div className={styles.root}>
        {cards && cards.map((card, index) => <Card key={index} size={size} rank={card.rank} suit={card.suit} />)}
        {times(placeholders, i => <Card key={'placeholder' + (cardsLength + i)} size={size} placeholder /> )}
      </div>
    )
  }
}

export default Board
