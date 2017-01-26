import React from 'react';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      txt: 'this is my state',
      cat: 0
    }
  }

  update(e) {
    this.setState({txt: e.target.value});
  }

  render() {
    let txt = this.props.txt;
    return (
      <div>
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
        <Widget update={this.update.bind(this)} />
        <h1>{this.state.txt}</h1>
      </div>
    )
  }
}

const Widget = (props) =>
  <input type="text" onChange={props.update}/>

// Do have state
// class App extends React.Component {
//   render() {
//     return React.createElement('h1', null, 'Hello New');
//   }
// }

// Do not have state
// const App = () => <h1>Hello Stateless</h1>

export default App
