import React, { useState, useEffect, } from 'react';
import axios from 'axios';
import { Card, Button, Header, } from 'semantic-ui-react';
import ItemView from './ItemView';
import NewItemForm from './NewItemForm';
import '../Home.css';

const AllItems = () => {
  const [items, setItems] = useState([]);
  const [showItemForm, setShowItemForm] = useState(false);

  useEffect( () => {
    axios.get('/api/items')
      .then( (res) => {
        setItems(res.data)
      })
  }, []);


  const renderItems = () => {
    if(items.length === 0){
      return "No Items"
    } else {
      return items.map( item => (
        <ItemView key={item.id} {...item} />
      ))
    }
  };

  const addItem = (item) => {
    setItems([...items, item])
  };

  return(
    <div>
      <Button onClick={ () => setShowItemForm(!showItemForm)} color="pink">
        {showItemForm ? "Cancel" : "Add New Item!"}
      </Button>
        {showItemForm && <NewItemForm addItem={addItem} toggleForm={setShowItemForm} /> }
        <Header as="h1" align="center">All Items</Header>
      <div className="Posts">
        <Card.Group align="center" itemsPerRow={1}>
          {renderItems()}
        </Card.Group>
      </div>
    </div>
  )
};


export default AllItems;


// items.sortBy(item.like)