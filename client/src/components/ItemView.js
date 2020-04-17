import React from 'react';
import { Card, Image, } from 'semantic-ui-react';

const ItemView = (props) => {

  // return (
  //   <>
  //     <Card color="pink">
  //       <Card.Content>
  //         <Image size="medium" src={props.image} />
  //         <Card.Header>{props.name}</Card.Header>
  //         <Card.Meta>{props.likes} likes</Card.Meta>
  //         <Card.Description>{props.description}</Card.Description>
  //       </Card.Content>
  //     </Card>
  //   </>
  // )

  return(
    <div style={styles.postCard}>
      <div style={styles.image}><img src={`${props.image}`}></img></div>
      <div style={styles.name}>{props.name}</div>
      <div style={styles.likes}>{props.likes} likes</div>
      <div style={styles.description}>{props.description}</div>
    </div>
  )
};

const styles = {
  postCard: {
    borderRadius: '5px',
    backgroundColor: 'pink',
    color: 'white',
    margin: '15px',
  },
  image: {

  },
  name: {

  },
  likes: {
    color: 'grey',
  },
  description: {

  },
};

export default ItemView;

