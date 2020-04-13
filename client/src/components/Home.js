import React from 'react';
import '../Home.css';
import AllItems from './AllItems';    
import Navbar from './Navbar';

    
const Home = () => (
    <div className="App">
      <Navbar />
      <h1>Welcome to PhotoShare</h1>
      <h3>The photo sharing website where you can see images, like images, and even upload your own images!</h3>
      <AllItems />
    </div>
);

export default Home;