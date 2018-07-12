# gauge-coffee-react

[![npm version](https://badge.fury.io/js/gauge-coffee-react.svg)](https://badge.fury.io/js/gauge-coffee-react)

A react wrapper for [gauge.coffee](https://bernii.github.io/gauge.js/)

![Example](./imgs/example.png)

|Name             |Description                |Type     |Required |
|:---------------:|:-------------------------:|:-------:|:-------:|
|`value`          |The value of the gauge     |`number` |`true`   |
|`width`          |Width of the gauge         |`number` |`true`   |
|`height`         |Height of the gauge        |`number` |`true`   |
|`maxValue`       |Max value of the gauge     |`number` |`false`  |
|`minValue`       |Min value of the gauge     |`number` |`false`  |
|`animationSpeed` |The speed of the animation |`number` |`false`  |

## Example

```
'use strict'

import React, { Component } from 'react'
import GaugeWrapper from 'gauge-coffee-react'

class MyComponent extends Component {
  constructor() {
    super()
    this.state = {
      value: 75,
      opts: {
        angle: 0.1,
        lineWidth: 0.3,
        radiusScale: 1,
        pointer: {
          length: 0.5,
          strokeWidth: 0.035,
          color: '#000000'
        },
        limitMax: false,
        limitMin: false,
        colorStart: '#6f6ea0',
        colorStop: '#c0c0db',
        strokeColor: '#eeeeee',
        generateGradient: true,
        staticZones: [
          {strokeStyle: '#087C08', min: 0, max: 10, height: 1},
          {strokeStyle: '#189C18', min: 10, max: 20, height: .9},
          {strokeStyle: '#34B334', min: 20, max: 30, height: .8},
          {strokeStyle: '#54CA54', min: 30, max: 40, height: .7},
          {strokeStyle: '#78DD78', min: 40, max: 50, height: .6},
          {strokeStyle: '#A2EDA2', min: 50, max: 60, height: .5},
          {strokeStyle: '#CDF8CD', min: 60, max: 70, height: .4},
          {strokeStyle: '#FF6961', min: 70, max: 80, height: .8},
          {strokeStyle: '#E6443B', min: 80, max: 90, height: .8},
          {strokeStyle: '#C02119', min: 90, max: 100, height: .8},
          {strokeStyle: 'black', min: 69, max: 71, height: 1}
        ],
        highDpiSupport: true
      }
    }
  }

  render() {
    return (
      <GaugeWrapper width={500} height={400} options={this.state.opts} maxValue='100' value={this.state.value} />,
    )
  }
}
```
