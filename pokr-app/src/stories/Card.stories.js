import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, radios, boolean } from '@storybook/addon-knobs'

import { Suit } from '../model/poker'
import Card from '../components/Card'

storiesOf('Card', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const suitKnob = radios(
      'Suit',
      Suit,
      Suit.HEART
    )
    const sizeKnob = radios(
      'Size',
      ['small', 'medium', 'large'],
      'medium'
    )
    return <Card
      rank={text('Rank', 'A')}
      suit={suitKnob}
      size={sizeKnob}
      facedown={boolean('Facedown', false)}
      placeholder={boolean('Placeholder', false)}
      disableTilt={boolean('Disable tilt effect', false)}
    />
  })
  .add('Facedown', () => <Card facedown />)
  .add('Placeholder', () => <Card placeholder />)
