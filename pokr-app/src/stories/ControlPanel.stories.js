import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, radios, boolean, number } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import ControlPanel from '../components/ControlPanel'

storiesOf('ControlPanel', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const minKnob = number('Min value', 4)
    const maxKnob = number('Max value', 200)
    const stepKnob = number('Step size', 1)
    return <ControlPanel
      isOpener={boolean('Is opener', true)}
      min={minKnob}
      max={maxKnob}
      step={stepKnob}
      onFold={action('Folded')}
      onAggressiveAction={action('Bet/Raised')}
      onPassiveAction={action('Check/Call')}
    />
  })
