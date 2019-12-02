import React from 'react'
import {Button, Icon} from 'semantic-ui-react'


export default class Navigation extends React.Component {

  render() {
    return (
      <div>

        <Button animated='vertical'>
          <Button.Content hidden>
            <Icon name='home' />
          </Button.Content>
          <Button.Content visible>{"HOME"}</Button.Content>
        </Button>

        <Button animated='vertical'>
          <Button.Content hidden>
            <Icon name='food' />
          </Button.Content>
          <Button.Content visible>{"MENU"}</Button.Content>
        </Button>

        <Button animated='vertical'>
          <Button.Content hidden>
            <Icon name='truck' />
          </Button.Content>
          <Button.Content visible>{"CATERING"}</Button.Content>
        </Button>

        <Button animated='vertical'>
          <Button.Content hidden>
            <Icon name='shop' />
          </Button.Content>
          <Button.Content visible>{"ORDER"}</Button.Content>
        </Button>

      </div>
    )
  }

}
