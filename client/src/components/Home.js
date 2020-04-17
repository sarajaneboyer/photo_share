import React from 'react';
import '../Home.css';   
import { Image, } from 'semantic-ui-react';

    
const Home = () => (
    <div className="App">
      <div style={styles.home}>
        <h1>Welcome to ItemShare!</h1>
        <h3>The content-sharing website where you can see images or word-posts and even upload your own!</h3>
      </div>
      <div>
        <Image src="https://thesavvycouple.com/wp-content/uploads/2018/09/Best-Stock-Photo-Sites.jpg" alt="person blogging on a rustic table with wild flowers" />
      </div>
    </div>
);

const styles = {
  home: {
    color: 'black',
    backgroundColor: 'pink',
    borderRadius: '20px',
    padding: '20px',
    width: '460px',
  }
}

export default Home;