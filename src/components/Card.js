import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Card as BpCard, Elevation, Classes } from '@blueprintjs/core'
import Tilt from 'react-tilt'
import classNames from 'classnames'

import styles from './Card.module.sass'
import { Suit, SuitPropType, RankPropType } from '../model/poker'

class Card extends PureComponent {
  static propTypes = {
    suit: SuitPropType,
    rank: RankPropType,
    elevation: PropTypes.number,
    size: PropTypes.oneOf('small', 'medium', 'large'),
    facedown: PropTypes.bool,
    placeholder: PropTypes.bool,
    disableTilt: PropTypes.bool
  }

  static defaultProps = {
    elevation: Elevation.ONE
  }

  render() {
    const { rank, suit, elevation, size, facedown, placeholder, disableTilt } = this.props
    const classes = classNames({
      [styles.root]: true,
      [styles.small]: size === 'small',
      [styles.medium]: size === 'medium',
      [styles.large]: size === 'large',
      [styles.heart]: !facedown && suit === Suit.HEART,
      [styles.diamond]: !facedown && suit === Suit.DIAMOND,
      [styles.club]: !facedown && suit === Suit.CLUB,
      [styles.spade]: !facedown && suit === Suit.SPADE,
      [styles.facedown]: facedown,
      [Classes.SKELETON]: placeholder,
    })
    return (
      <Tilt className={styles.tilt}>
        <BpCard className={classes} interactive elevation={elevation}>
          {facedown ? (
            <div className={styles.backside} />
          ) : (
            <span>
              {rank}
            </span>
          )}
        </BpCard>
      </Tilt>
    )
  }
}

export default Card
