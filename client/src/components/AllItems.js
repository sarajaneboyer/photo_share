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
      <div style={styles.headings}>
        <Header as="h1">All Posts</Header>
        <h3>Sort By:</h3>
        <select onChange={ (e) => setSortType(e.target.value) } style={styles.select}>
          <option value='default' defaultValue> -- Default View -- </option>
          <option value='mostLiked'>Likes - Most to Least</option>
          <option value='leastLiked'>Likes - Least to Most</option>
        </select><br />
        <Button onClick={ () => setShowItemForm(!showItemForm)} style={styles.button}>
          {showItemForm ? "Cancel" : "Add New Item!"}
        </Button>
          {showItemForm && <NewItemForm addItem={addItem} toggleForm={setShowItemForm} /> }
      </div>
      <div className="Posts">
        <Card.Group align="center" itemsPerRow={1}>
          {renderItems()}
        </Card.Group>
      </div>
    </div>
  )
};

const styles = {
  button: {
    backgroundColor: 'grey',
    color: 'white',
  },
  headings: {
    marginLeft: '150px',
  },
  select: {
    display: 'block',
    borderRadius: '10px',
    padding: '10px',
    margin: '10px',
  }
}


export default AllItems;