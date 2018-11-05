import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Card as BpCard, Elevation } from '@blueprintjs/core'
import classNames from 'classnames'

import styles from './Card.module.sass'
import { Suit, SuitPropType, RankPropType } from '../model/poker'

class Card extends PureComponent {
  static propTypes = {
    suit: SuitPropType.isRequired,
    rank: RankPropType.isRequired,
    elevation: PropTypes.number
  }

  static defaultProps = {
    elevation: Elevation.ONE
  }

  render() {
    const { rank, suit, elevation } = this.props
    const classes = classNames({
      [styles.root]: true,
      [styles.heart]: suit === Suit.HEART,
      [styles.diamond]: suit === Suit.DIAMOND,
      [styles.club]: suit === Suit.CLUB,
      [styles.spade]: suit === Suit.SPADE
    })
    return (
      <BpCard className={classes} interactive elevation={elevation}>
        <span className={styles.rank}>
          {rank}
        </span>
      </BpCard>
    )
  }
}

export default Card
