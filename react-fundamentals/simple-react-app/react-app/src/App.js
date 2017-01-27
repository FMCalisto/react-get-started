import React from 'react';

class App extends React.Component {

  constructor () {
    super();
    this.state = {a: ''}
    this.state = {b: ''}
  }

  update () {
    this.setState({
      a: this.a.value,
      b: this.b.value
    })
  }

  render () {
    return (
      <div>
        <input
          ref={node => this.a = node}
          text="text"
          onChange={this.update.bind(this)}
        />
          {this.state.a}
        <hr />
        <input
          ref={node => this.b = node}
          text="text"
          onChange={this.update.bind(this)}
        />
          {this.state.b}
      </div>
    )
  }

}

export default App
