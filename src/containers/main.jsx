import React from 'react'

import Home from './Home'
import Menu from './Menu'
import Catering from './Catering'
import Order from './Order'

export default class Main extends React.Component {

  renderMain = () => {
    if (this.props.activePage === "HOME") {
      return (<Home />)
    }
    if (this.props.activePage === "MENU") {
      return (<Menu />)
    }
    if (this.props.activePage === "CATERING") {
      return (<Catering />)
    }
    if (this.props.activePage === "ORDER") {
      return (<Order />)
    }
  }

  render() {
    return (
      this.renderMain()
    )
  }

}
