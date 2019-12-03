import React from 'react'

import { Container, Header } from 'semantic-ui-react'

import title from '../images/calabria_pizza_title.png'

// margin : "TOPpx RIGHTpx BOTTOMpx LEFTpx"

const sloganStyle = {
  margin :  "5px 0px 25px 0px",
  color : "#005100"
}
const imgStyle = {
  margin : "0px 20px 20px 20px",
  width : "600px",
  height : "105px",
}
const phoneStyle = {
  margin :  "0px 0px 0px 0px",
}
const addressStyle = {
  margin :  "0px 0px 20px 0px",
  color : "#7F2432"
}

export default class Banner extends React.Component {

  render() {
    return (
      <Container fluid id={"banner-container"}>

        <Header
          as='h2'
          style={sloganStyle}
        >
          {"\"A Taste of Italy in Your Neighborhood\""}
        </Header>
        <img
          src={title}
          style={imgStyle}
          alt="Calabria Pizza"
        >
        </img>
        <Header
          as='h2'
          style={phoneStyle}
        >
          {"201-523-9228"}
        </Header>
        <Header
          as='h2'
          style={addressStyle}
        >
          {"239 Kinderkamack Road, Oradell, NJ"}
        </Header>

      </Container>
    )
  }

}
