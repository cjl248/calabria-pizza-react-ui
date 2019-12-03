import React from 'react'

import Banner from './containers/Banner'
import Navigation from './containers/Navigation'
import Main from './containers/Main'

import './App.css';

class App extends React.Component {

  state = {
    activePage: 'HOME'
  }

  setPage = (activePage) => {
    this.setState({
      activePage
    })
  }

  render() {
    return (
      <div className="App">
        <Banner />
        <Navigation setPage={this.setPage} />
        <Main activePage={this.state.activePage} />
      </div>
    )
  }

}

export default App;
