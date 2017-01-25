import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <b>Bold</b>
      </div>
    )
  }
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
