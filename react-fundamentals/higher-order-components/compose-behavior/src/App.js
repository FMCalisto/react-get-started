import React from 'react';

class App extends React.Component {

  render () {
    return (
      <div>
        <Button>button</Button>
        <hr />
        <Label>label</Label>
      </div>
    )
  }

}

const Button = (props) => <button>{props.children}</button>

class Label extends React.Component {
  render () {
    return (
      <label>{this.props.children}</label>
    )
  }
}

export default App
