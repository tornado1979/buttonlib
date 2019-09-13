import React, { Component } from 'react'

//import ExampleComponent from 'buttonlib'
import { Button, Label, Input } from 'buttonlib'

export default class App extends Component {
  render () {
    return (
      <div className="wrapper">
        <Button text='Modern React component module' />
        <Label text='this is a label' />
        <Input />
      </div>
    )
  }
}
