import React, { Component } from 'react';
import { render } from 'react-dom';
import { Button } from '../src/components';

const theme2 = {
  primaryButtonColor: "#A389F4",
  primaryButtonHoverColor: "#592DEA",
  primaryButtonFontColor: "#ffffff"
};

const divStyle = {
  backgroundColor: 'blue',
  width: '120px'
};

class Demo extends Component {  
  render() {
    return <div>
      <h1>react-component-library Demo</h1>
      <Button style={divStyle}>bobo</Button>
      <Button style={divStyle} disabled>bobo</Button>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
