import React from 'react'
import {Button, Icon} from 'semantic-ui-react'

// margin : "TOPpx RIGHTpx BOTTOMpx LEFTpx"

const buttonFont = {
  fontSize: "20px",
  margin: "0px 10px 0px 10px"
}

export default class Navigation extends React.Component {

  render() {
    return (
      <div>
        <Button.Group>

          <Button
            style={buttonFont}
            animated='vertical'
            onClick={ () => {this.props.setPage("HOME")} }
          >
            <Button.Content hidden>
              <Icon name='home' />
            </Button.Content>
            <Button.Content visible>{"HOME"}</Button.Content>
          </Button>

          <Button
            style={buttonFont}
            animated='vertical'
            onClick={ () => {this.props.setPage("MENU")} }
            >
            <Button.Content hidden>
              <Icon name='food' />
            </Button.Content>
            <Button.Content visible>{"MENU"}</Button.Content>
          </Button>

          <Button
            style={buttonFont}
            animated='vertical'
            onClick={ () => {this.props.setPage("CATERING")} }
            >
            <Button.Content hidden>
              <Icon name='truck' />
            </Button.Content>
            <Button.Content visible>{"CATERING"}</Button.Content>
          </Button>

          <Button
            style={buttonFont}
            animated='vertical'
            onClick={ () => {this.props.setPage("ORDER")} }
            >
            <Button.Content hidden>
              <Icon name='shop' />
            </Button.Content>
            <Button.Content visible>{"ORDER"}</Button.Content>
          </Button>

        </Button.Group>
      </div>
    )
  }

}
