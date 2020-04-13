import React, { useState, useEffect, } from 'react';
import axios from 'axios';
import { Card,} from 'semantic-ui-react';
import ItemView from './ItemView';
import NewItemForm from './NewItemForm';
import '../Home.css';

const AllItems = () => {
  const [items, setItems] = useState([]);

  useEffect( () => {
    axios.get('/api/items')
      .then( (res) => {
        setItems(res.data)
        console.log(res.data)
      })
  }, []);


  const renderItems = () => {
    return items.map( item => (
      <ItemView key={item.id} {...item} />
    ))
  };


  return(
    <div maxwidth='800px'>
      <h1 align="center">All Items</h1>
      <Card.Group align="center" itemsPerRow={3}>
        {renderItems()}
      </Card.Group>
    </div>
  )
}

export default AllItems;