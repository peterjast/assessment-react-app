import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class UpdateItemForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item
    };
  }

  handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const item = this.state.item;
    item[field] = value;
    this.setState({item});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleUpdate(this.state.item);
  }

  render() {

    return (
      <Form data-testid={`update-form-${this.props.item.name}`} onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Control data-testid={`update-field-${this.props.item.name}`} type="text" name="notes" placeholder="add a note" onChange={this.handleChange} />
        </Form.Group>
        <Button className="float-left mt-3" variant="info" type="submit">Update</Button>
      </Form>
    );
  }
}

export default UpdateItemForm;
