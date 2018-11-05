import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import times from 'lodash/times'

import { Suit } from '../model/poker'
import Card from './Card'
import styles from './Board.module.sass'

class Board extends PureComponent {
  static propTypes = {
    cards: PropTypes.arrayOf(PropTypes.string),
    size: PropTypes.oneOf(['small', 'medium', 'large'])
  }

  render() {
    const { cards, size } = this.props
    const placeholders = cards ? cards.length - 5 : 5
    return (
      <div className={styles.root}>
        {cards && cards.map((card, index) => <Card key={index} size={size} suit={Suit.CLUB} rank={card}/>)}
        {times(placeholders, i => <Card key={'placeholder' + i} size={size} placeholder />)}
      </div>
    )
  }
}

export default Board
