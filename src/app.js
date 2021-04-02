import React from 'react';

import axios from 'axios';

import AddNewItem from './components/add-item.js';

import Items from './components/items.js';

const API_SERVER = process.env.REACT_APP_API;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
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

  addItem = async (item) => {
    // console.log(item);
    // this.state.items.push(item);
    // console.log('items', this.state.items)
    await axios.post(`${API_SERVER}/items`, { name: item.name, description: item.description });
    this.getItems();
  }

  deleteItem = async (id) => {
    await axios.delete(`${API_SERVER}/items/${id}`);
    this.getItems();
  }

  updateItem = async (item) => {
    await axios.put(`${API_SERVER}/items/${item._id}`, item);
    this.getItems();
  }

  render() {
    return (
      <div>
        <h1>Our Items</h1>
        <AddNewItem handleAddItem={this.addItem} />
        <hr />
        <Items         
        handleUpdate={this.updateItem} 
        handleDelete={this.deleteItem} 
        itemsList={this.state.items} 
        />
      </div>
    );
  }
}

export default App;
