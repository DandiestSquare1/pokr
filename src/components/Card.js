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
    elevation: PropTypes.number,
    size: PropTypes.oneOf('small', 'medium', 'large')
  }

  static defaultProps = {
    elevation: Elevation.ONE
  }

  render() {
    const { rank, suit, elevation, size } = this.props
    console.log(size)
    const classes = classNames({
      [styles.root]: true,
      [styles.small]: size === 'small',
      [styles.medium]: size === 'medium',
      [styles.large]: size === 'large',
      [styles.heart]: suit === Suit.HEART,
      [styles.diamond]: suit === Suit.DIAMOND,
      [styles.club]: suit === Suit.CLUB,
      [styles.spade]: suit === Suit.SPADE
    })
    return (
      <BpCard className={classes} interactive elevation={elevation}>
        <span>
          {rank}
        </span>
      </BpCard>
    )
  }
}

export default Card
