import PropTypes from 'prop-types'

export const Suit = {
  HEART: 'heart',
  SPADE: 'spade',
  CLUB: 'club',
  DIAMOND: 'diamond'
}

export const SuitPropType = PropTypes.oneOf([Suit.HEART, Suit.SPADE, Suit.CLUB, Suit.DIAMON])

export const RankPropType = PropTypes.string

export const CardPropType = PropTypes.shape({
  suit: SuitPropType.isRequired,
  rank: PropTypes.string.isRequired
})
