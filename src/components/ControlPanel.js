import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Button } from '@blueprintjs/core'

import styles from './ControlPanel.module.sass'

const ControlButton = (props) => <Button large {...props}>{props.children}</Button>

class ControlPanel extends Component {
  static propTypes = {
    isOpener: PropTypes.boolean
  }
  render() {
    const { isOpener } = this.props
    return (
      <Card className={styles.root}>
        <div className={styles.actionPanel}>
          <ControlButton text='Fold' intent={isOpener ? 'warning' : undefined}/>
          <ControlButton text={isOpener ? 'Check' : 'Call'}/>
          <ControlButton text={isOpener ? 'Bet' : 'Raise'}/>
        </div>
        <div>

        </div>
      </Card>
    )
  }
}

export default ControlPanel
