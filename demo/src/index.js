import React, { Component } from 'react';
import { render } from 'react-dom';
import { Button } from '../../src';

class Demo extends Component {
  render() {
    return <div>
      <h1>react-component-library Demo</h1>
      <Button label="toto" fontColor="darkOrange"/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
