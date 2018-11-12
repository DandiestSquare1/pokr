import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, radios, boolean, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import Player from '../components/Player'

storiesOf('Player', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    return (
      <Player
        username={text('User name')}
        chips={number('Chip count')}
        currency={text('Currency', '$')}
      />
    )
  })
  .add('BobShark', () => (
    <Player
      username='BobShark'
      chips={257.8}
      currency='€'
    />
  ))
