import React, {useState, useEffect, } from 'react';
import axios from 'axios';
import ItemView from './ItemView';
import { Card, Header, } from 'semantic-ui-react';

const MostLikes = () => {
  const [items, setItems] = useState([]);

  useEffect( () => {
    axios
      .get("/api/items")
      .then( res => {
        setItems(res.data)
      })
  }, []);

  const sortedItemsArray = items.sort( (a,b) => (a.likes > b.likes) ? 1 : -1)


  const renderItems = () => {
    if(sortedItemsArray.length === 0){
      return "No Items"
    } else {
      return sortedItemsArray.map( item => (
        <ItemView key={item.id} {...item} />
      ))
    }
  };

  return(
    <div>
      <Header as="h1" align="center">All Items</Header>
      <h2 align="center">Sorted by Least Likes to Most Likes</h2>
      <Card.Group align="center" itemsPerRow={3}>
        {renderItems()}
      </Card.Group>
    </div>
  )
};

export default MostLikes;