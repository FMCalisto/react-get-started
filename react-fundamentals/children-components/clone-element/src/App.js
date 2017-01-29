import React from 'react';

class App extends React.Component {
  render() {
    <Buttons>
      <button value="A">A</button>
      <button value="B">B</button>
      <button value="C">C</button>
    </Buttons>
  }
}

class Buttons extends React.Component {
  constructor(){
    super();
    this.state = {selected: 'None'}
  }
  selectItem(selected){
    this.setState({selected})
  }
  render(){
    let items = this.props.children;
    return (
      <div>
        <h2>You have Selected: {this.state.selected}</h2>
        {items}
      </div>
    )
  }
}

export default App
