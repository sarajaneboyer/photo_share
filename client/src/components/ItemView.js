import React from 'react';
import styled from 'styled-components';
import { FaThumbsUp } from 'react-icons/fa';
import { Card, Image, } from 'semantic-ui-react';
import '../Home.css';   

const ItemView = (props) => {

  return (
    <>
      <Card color="pink">
        <Card.Content>
          <Image size="medium" src={props.image} />
          <Card.Header>{props.name}</Card.Header>
          <Card.Description>{props.description}</Card.Description>
        </Card.Content>
          <Card.Content extra><FaThumbsUp />{props.likes} likes</Card.Content>
      </Card>
    </>
  )
};

  // return(
  //   <>
  //     <div style={styles.postCard}>
  //       <div style={styles.image}><img src={`${props.image}`}></img></div>
  //       <div style={styles.name}>{props.name}</div>
  //       <div style={styles.description}>{props.description}</div>
  //     </div>
  //     <div style={styles.likes}><FaThumbsUp />{props.likes} likes</div>
  //   </>
  // )

// const styles = {
//   postCard: {
//     borderRadius: '10px',
//     backgroundColor: 'pink',
//     color: 'white',
//     margin: '15px 15px 0px 15px',
//     justifyContent: 'left',
//   },
//   image: {
//     padding: '8px'
//   },
//   name: {
//     fontWeight: '300'
//   },
//   likes: {
//     marginLeft: '20px',
//     color: 'grey',
//   },
//   description: {

//   },
// };

export default ItemView;

