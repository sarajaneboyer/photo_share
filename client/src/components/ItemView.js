import React from 'react';
import { Link, } from 'react-router-dom';
import { Card, Image, } from 'semantic-ui-react';

const ItemView = (props) => {

  const item = {name: props.name, description: props.description, image: props.image, likes: props.likes }

  return (
    <>
      {/* <Card
        image={props.image}
        header={props.name}
        meta={props.likes}
        description={props.description}
      /> */}
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