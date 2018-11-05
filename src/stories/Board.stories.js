import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, radios, boolean } from '@storybook/addon-knobs'

import { Suit } from '../model/poker'
import Board from '../components/Board'

storiesOf('Board', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const sizeKnob = radios(
      'Size',
      ['small', 'medium', 'large'],
      'medium'
    )
    return <Board size={sizeKnob}/>
  })
