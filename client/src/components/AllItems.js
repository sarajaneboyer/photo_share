import React from 'react';
import { Card, } from 'semantic-ui-react';
import ItemView from './ItemView';
import NewItemForm from './NewItemForm';

const AllItems = () => {
  return(
    <div>All Items
    <ItemView />
    <NewItemForm />
    </div>
  )
}

export default AllItems;