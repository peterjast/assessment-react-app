import React from 'react';

import {Form, Button} from 'react-bootstrap';

class AddNewItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formData: {}
    };
  }

  handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const formData = this.state.formData;
    formData[field] = value;
    this.setState({formData});
    console.log('formData', formData);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddItem(this.state.formData)
    console.log('in handleSubmit', this.state.formData);
  }

  render() {

    return (
      <Form data-testid="add-form" onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>Item</Form.Label>
          <Form.Control type="text" placeholder="Name" data-testid="add-form-name" name="name" onChange={this.handleChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Description" data-testid="add-form-description" name="description" onChange={this.handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Item
        </Button>
      </Form>
    );
  }
}

export default AddNewItem;