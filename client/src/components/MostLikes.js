import React, {useState, useEffect, } from 'react';
import axios from 'axios';
import ItemView from './ItemView';
import '../Home.css';   
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

  const sortedItemsArray = items.sort( (a,b) => (a.likes > b.likes) ? -1 : 1)


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
      <h2 align="center">Sorted by Most Likes to Least Likes</h2>
      <div className="Posts">
        <Card.Group align="center" itemsPerRow={1}>
          {renderItems()}
        </Card.Group>
      </div>
    </div>
  )
};

export default MostLikes;