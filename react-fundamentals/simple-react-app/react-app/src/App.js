import React from 'react';

class App extends React.Component {
  render() {

    let txt = this.props.txt;

    return (
      <div>
        <h1>{txt}</h1>
        <b>Bold</b>
      </div>
    )
  }
}

App.proTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: "this is the default text"
}

// Do have state
// class App extends React.Component {
//   render() {
//     return React.createElement('h1', null, 'Hello New');
//   }
// }

// Do not have state
// const App = () => <h1>Hello Stateless</h1>

export default App
