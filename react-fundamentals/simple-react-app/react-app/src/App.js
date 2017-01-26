import React from 'react';

class App extends React.Component {
  render() {
    return <Title />
  }
}

const Title = (props) =>
  <h1>Title: {props.text}</h1>

Title.propTypes = {
  text: React.PropTypes.string.isRequired
}

export default App
