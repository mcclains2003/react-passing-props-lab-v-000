import React from 'react';

import FruitBasket from './FruitBasket';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      fruit: [],
      filters: [],
      currentFilter: null
    };

    this.updateFilterCallback = this.updateFilterCallback.bind(this);
    this.fetchFruit = this.fetchFruit.bind(this);
    this.fetchFilters = this.fetchFilters.bind(this);
  }

  componentWillMount() {
    this.fetchFruit();
    this.fetchFilters();
  }

  fetchFruit() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit: fruit }));
  }

  fetchFilters() {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters: filters }));
  }

  updateFilterCallback(event) {
    this.setState({
      currentFilter: event.target.value
    });
  }

  render() {
    return <FruitBasket fruit={this.state.fruit} 
                        filters={this.state.filters}
                        currentFilter={this.state.currentFilter}
                        updateFilterCallback= {this.updateFilterCallback} />
  }
}

export default App;
