import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default class Main extends React.Component {

  render() {
    return (
      <>
      <h1>Calabria Pizza</h1>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
      </>
    )
  }
}
