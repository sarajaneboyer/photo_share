import React, { useState, useEffect, } from 'react';
import axios from 'axios';
import { Card, Button, Header, } from 'semantic-ui-react';
import ItemView from './ItemView';
import NewItemForm from './NewItemForm';
import '../Home.css';

const AllItems = () => {
  const [items, setItems] = useState([]);
  const [sortType, setSortType] = useState('created_at');
  const [showItemForm, setShowItemForm] = useState(false);

  useEffect( () => {
    axios.get('/api/items')
      .then( (res) => {
        setItems(res.data)
        sortItems(sortType)
      })
  }, [sortType]);


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


  const sortItems = type => {
    if(type == 'mostLiked'){
      const sorted = [...items].sort( (a,b) => (a.likes > b.likes) ? -1 : 1);
      setItems(sorted);
      console.log(sorted)
    } else if(type == 'leastLiked'){
      const sorted = [...items].sort( (a,b) => (a.likes > b.likes) ? 1 : -1);
      setItems(sorted);
      console.log(sorted)
    } else {
      const sorted = [...items].sort( (a,b) => {
        a = new Date(a.created_at);
        b = new Date(b.created_at);
        return a > b ? 1 : -1;
      });
    };
  };

  return(
    <div>
      <Button onClick={ () => setShowItemForm(!showItemForm)} color="pink">
        {showItemForm ? "Cancel" : "Add New Item!"}
      </Button>
      <h3>Sort By:</h3>
      <select onChange={ (e) => setSortType(e.target.value) }>
      {/* <option disabled selected value> -- select an option -- </option> */}
        <option value='default' defaultValue> -- Default View -- </option>
        <option value='mostLiked'>Most Liked</option>
        <option value='leastLiked'>Least Liked</option>
      </select>
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