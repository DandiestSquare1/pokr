import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, radios, boolean, number } from '@storybook/addon-knobs'

import { Suit } from '../model/poker'
import Board from '../components/Board'

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

storiesOf('Board', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const sizeKnob = radios(
      'Size',
      ['small', 'medium', 'large'],
      'medium'
    )
    const visibleCardsKnob = number(
      'Cards',
      {
        range: true,
        min: 0,
        max: 5,
        step: 1
      },
      2
    )
    return <Board size={sizeKnob} cards={cards.slice(0, visibleCardsKnob)} max={number('Max no of cards', 5)}/>
  })
