import React, { useState, } from 'react';
import { Form, } from 'semantic-ui-react';
import axios from 'axios';

const NewItemForm = (props) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [likes, setLikes] = useState(0);

  const item = { name: name, image: image, description: description, likes: likes }

  const handleSubmit = (e) => {
    e.preventDefault();
    // const item = { name: name, image: image, description: description, likes: likes };
    axios.post(`api/items`, item)
      .then( (response) => {
        props.addItem(response.data)
        props.toggleForm();
        setName('')
        setImage('')
        setDescription('')
        setLikes('')
      });    
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          label="Name"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Form.Input
          label="Image URL"
          name="image"
          placeholder="Image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <Form.Input
          label="Description"
          name="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Form.Input
          label="Likes"
          name="likes"
          placeholder="Likes"
          value={likes}
          onChange={(e) => setLikes(e.target.value)}
        />
        <Form.Button style={styles.submitButton}>Submit</Form.Button>
      </Form>
    </div>
  );
};


const styles={
  submitButton: {
    backgroundColor: 'lightpink',
    color: 'white',
  }
}
export default NewItemForm;