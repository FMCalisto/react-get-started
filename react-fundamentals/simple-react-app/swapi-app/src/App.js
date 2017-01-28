import React from 'react';

class App extends React.Component {

  constructor () {
    super();
    this.state = {items: []}
  }

  componentWillMount () {
    fetch('http://swapi.co/api/people/?format=json')
      .then(response => response.json())
      .then(({results: items}) => this.setState({items}))
  }

  render () {
    let items = this.state.items
    return (
      <div>
        {items.map(item => <h4 key={item.name}>{
          item.name
            +
          " is "
            +
          item.gender
        }</h4>)}
      </div>
    )
  }

}

export default App
