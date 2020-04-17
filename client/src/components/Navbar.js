import React from 'react';
import { Link, } from 'react-router-dom';
import { Menu, } from 'semantic-ui-react';

// using an implicit return
const Navbar = () => (
  <Menu style={styles.navbar}>
    <Link to="/">
      <Menu.Item>
        Home
      </Menu.Item>
    </Link>
    <Link to="/all_items">
      <Menu.Item>
        All Posts
      </Menu.Item>
    </Link>
  </Menu>
);

const styles = {
  navbar: {
    backgroundColor: '#E8E9EE',
  }
}


export default Navbar;