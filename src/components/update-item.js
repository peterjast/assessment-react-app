import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class UpdateForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    const field = e.target.name;
    const value = e.target.value;
    const item = this.state.item;
    item[field] = value;
    this.setState({item});
    console.log(item);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleUpdate(this.state.item);
  }

  render() {

    return (
      <Form data-testid={`update-form-${this.props.item.name}`} onSubmit={this.handleSubmit}>
        <Form.Control className="mb-3" data-testid={`update-field-${this.props.item.name}`} name="notes" placeholder="Add Notes" onChange={this.handleChange} />
        <Button className="float-left" variant="info" type="submit">Update</Button>
      </Form>
    );
  }
}

export default UpdateForm;
