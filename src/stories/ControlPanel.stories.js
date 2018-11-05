import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, radios, boolean } from '@storybook/addon-knobs'

import ControlPanel from '../components/ControlPanel'

storiesOf('ControlPanel', module)
  .addDecorator(withKnobs)
  .add('Default', () => <ControlPanel isOpener={boolean('Is opener', true)}/>)
