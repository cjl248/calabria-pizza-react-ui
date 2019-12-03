import React from 'react'

import { Container } from 'semantic-ui-react'

import brickBackground from '../images/brickBackground.jpg'

import Home from './Home'
import Menu from './Menu'
import Catering from './Catering'
import Order from './Order'

const containerStyle = {
  border: "2px solid red",
  marginTop : "10px",
  height: "40rem"
}

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
      <Container fluid style={containerStyle}>
        {this.renderMain()}
      </Container>
    )
  }

}
