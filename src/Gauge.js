'use strict'

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Gauge } from '../vendors/gauge.min.js'

class GaugeWrapper extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <canvas ref={node => this.node = node} width={this.props.width} height={this.props.height} />
    )
  }

  componentDidMount() {
    var g = new Gauge(this.node).setOptions(this.props.options)

    if (this.props.maxValue !== undefined)
      g.maxValue = this.props.maxValue
    if (this.props.minValue !== undefined)
      g.setMinValue(this.props.minValue)
    if (this.props.animationSpeed !== undefined)
      g.animationSpeed = this.props.animationSpeed
    g.set(this.props.value)
  }
}

GaugeWrapper.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  options: PropTypes.object,
  maxValue: PropTypes.number,
  minValue: PropTypes.number,
  animationSpeed: PropTypes.number
}

export default GaugeWrapper
