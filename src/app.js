import React from 'react';
import axios from 'axios';
import AddNewItem from './components/add-item.js';
import Items from './components/items.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Header from './components/header.js';
import Footer from './components/footer.js';

const API_SERVER = process.env.REACT_APP_API;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      selectedItem : {}
    }
  }
  
  addItem = async (item) => {
    try{
      await axios.post(`${API_SERVER}/items`, { name: item.name, description: item.description });
      this.getItems();
    } catch(err){
      console.log(err.message);
    }
  }
  
  deleteItem = async (id) => {
    await axios.delete(`${API_SERVER}/items/${id}`);
    this.getItems();
  }
  
  updateItem = async (item) => {
    try{
      // const updatedItems = items.map(currentItem => item._id === currentItem._id ? item : currentItem );
      // this.setState({ items: updatedItems }) 
      await axios.put(`${API_SERVER}/items/${item._id}`, item);
      console.log('in update', this.state.items);
      await this.getItems();
    } catch(err){
      console.log(err.message);
    }
  }
  
  async componentDidMount() {
    await this.getItems();
  }
  
  getItems = async () => {
    try{
      const response = await axios.get(`${API_SERVER}/items`);
      const items = response.data;
      console.log('response', response);
      this.setState({items});
    } catch(err){
      console.log(err.message);
    }
  }

  selectItem = (item) => {

  }
  // updateItemsArr = async(itemsArr) => {
  //   await this.setState({ items: itemsArr });
  // }

render() {
  return (
    <>
      <Header />
      <Container fluid>
        <div className="mx-auto w-75 my-5">
          <h1 className="mx-auto my-5">Our Items</h1>
          <AddNewItem handleAddItem={this.addItem} />
          <hr className="my-5" />
          {this.state.items.length > 0 &&
          <Items className="my-5"         
          handleUpdate={this.updateItem} 
          handleDelete={this.deleteItem} 
          itemsList={this.state.items}
          selectedItem={this.state.selectedItem}
          />
          }
        </div>
      </Container>
      <Footer />
      </>
    );
  }
}

export default App;
