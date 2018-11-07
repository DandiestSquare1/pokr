import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, Button, Slider, InputGroup } from '@blueprintjs/core'

import styles from './ControlPanel.module.sass'

const ControlButton = (props) => <Button large {...props}>{props.children}</Button>

class ControlPanel extends Component {
  static propTypes = {
    isOpener: PropTypes.bool,
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    step: PropTypes.number.isRequired,

    // called when the FOLD button is clicked
    onFold: PropTypes.func,
    // called when the CHECK/CALL button is clicked
    onPassiveAction: PropTypes.func,
    // called when the BET/RAISE button is clicked, first param is the bet size
    onAggressiveAction: PropTypes.func
  }

  static defaultProps = {
    onFold: () => console.log('No onFold prop'),
    onPassiveAction: () => console.log('No onPassiveAction'),
    onAggressiveAction: () => console.log('No onAggressiveAction')
  }

  state = {
    sliderValue: this.props.min,
    // Since the slider expect a number, we cannot use the same variable for the slider and
    // bet input (can be empty string)
    inputValue: this.props.min
  }

  handleInputChange = event => {
    const value = event.currentTarget.value
    if (!value.trim()) {
      this.setState({ sliderValue: this.props.min })
    } else {
      this.setState({ sliderValue: parseFloat(value, 10) })
    }
    this.setState({ inputValue: event.currentTarget.value })
  }

  handleSliderChange = value => {
    this.setState({ sliderValue: value, inputValue: value })
  }

  handleFoldClick = event => {
    this.props.onFold()
  }

  handlePassiveClick = event => {
    this.props.onPassiveAction()
  }

  // called when the aggressive action button (bet or raise) is clicked
  handleAggressiveClick = event => {
    this.props.onAggressiveAction(this.state.sliderValue)
  }

  render() {
    const { isOpener, min, max, step, onFold, onPassiveAction } = this.props
    const { inputValue, sliderValue } = this.state
    return (
      <Card className={styles.root}>
        <div className={styles.actionPanel}>
          <ControlButton
            text='Fold'
            onClick={this.handleFoldClick}
            intent={isOpener ? 'warning' : undefined}
          />
          <ControlButton onClick={this.handlePassiveClick} text={isOpener ? 'Check' : 'Call'}/>
          <ControlButton onClick={this.handleAggressiveClick} text={isOpener ? 'Bet' : 'Raise'}/>
        </div>
        <div className={styles.betPanel}>
          <InputGroup
            className={styles.betInput}
            type='number'
            min={min}
            max={max}
            step={step}
            large
            value={inputValue}
            onChange={this.handleInputChange}
          />
          <Slider
            className={styles.betSlider}
            min={min}
            max={max}
            stepSize={step}
            labelRenderer={false}
            value={sliderValue}
            onChange={this.handleSliderChange}
          />
        </div>
      </Card>
    )
  }
}

export default ControlPanel
