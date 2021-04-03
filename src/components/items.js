import React from 'react';
import UpdateForm from './update-item';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

class Items extends React.Component {

  render() {

    return (
      <section className="mx-auto">
        <h2>Items</h2>
        <Row>
        {
          this.props.itemsList.map( (item,idx) => (
            <div key={idx} className="mx-auto w-25 float-left">
              <Card className="text-dark mx-3 my-5">
                <Card.Header className="bg-info text-light"><h3>{item.name.toUpperCase()}</h3></Card.Header>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    {item.description}
                  </Card.Text>
                  <UpdateForm item={item} handleUpdate={this.props.handleUpdate} />
                    <Button className="float-right" variant="info"
                      data-testid={`delete-button-${item.name}`}
                      onClick={ () => this.props.handleDelete(item._id) }
                    >Delete Item</Button>
                </Card.Body>
              </Card>
            </div>
          ))
        }
        </Row>
      </section>
    );
  }
}

export default Items;
