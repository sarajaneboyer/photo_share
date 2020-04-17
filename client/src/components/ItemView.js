import React from 'react';
import { Card, Image, } from 'semantic-ui-react';

const ItemView = (props) => {

  return (
    <>
      <Card>
        <Card.Content>
          <Image size="small" src={props.image} />
          <Card.Header>{props.name}</Card.Header>
          <Card.Meta>{props.likes} likes</Card.Meta>
          <Card.Description>{props.description}</Card.Description>
        </Card.Content>
      </Card>
    </>
  )
}

export default ItemView;