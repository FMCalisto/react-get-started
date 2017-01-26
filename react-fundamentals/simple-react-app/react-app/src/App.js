import React from 'react';

class App extends React.Component {

  constructor () {
    super();
    this.state = {currentEvent: "---"}
    this.update = this.update.bind(this)
  }

  update (event) {
    this.setState({currentEvent: event.type})
  }

  render () {
    return (
      <div>
        <textArea
          onKeyPress={this.update}
          onCopy={this.update}
          onCut={this.update}
          onPaste={this.update}
          cols="30"
          rows="10"
        />
        <h1>{this.state.currentEvent}</h1>
      </div>
    )
  }

}

export default App
