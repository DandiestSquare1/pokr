import React, { PureComponent } from 'react'
import { Card, Classes } from '@blueprintjs/core'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './Player.module.sass'

const isNumber = n => !isNaN(parseFloat(n)) && isFinite(n);

class Player extends PureComponent {
  static propTypes = {
    username: PropTypes.string,
    chips: PropTypes.number,
    currency: PropTypes.string,
    absent: PropTypes.bool
  }

  static defaultProps = {
    currency: '$'
  }

  render() {
    const { username, chips, currency, placeholder } = this.props

    const usernameClasses = classNames({
      [styles.username]: true,
      [Classes.SKELETON]: !username
    })

    const chipsClasses = classNames({
      [styles.chips]: true,
      [Classes.SKELETON]: !isNumber(chips)
    })

    return (
      <Card className={styles.root}>
        <div>
          <span className={usernameClasses}>
            {username || 'playername'}
          </span>
        </div>
        <div>
          <span className={chipsClasses}>
            {chips || 9999}{' '}{currency}
          </span>
        </div>
      </Card>
    )
  }
}

export default Player
