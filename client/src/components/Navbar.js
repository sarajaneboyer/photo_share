import React from 'react';
import { Link, } from 'react-router-dom';
import { Menu, } from 'semantic-ui-react';

// using an implicit return
const Navbar = () => (
  <Menu>
    <Link to="/">
      <Menu.Item>
        Home
      </Menu.Item>
    </Link>
    <Link to="/all_items">
      <Menu.Item>
        All Items
      </Menu.Item>
    </Link>
    {/* <Link to="/items/descending">
      <Menu.Item>
        View Most Liked Items
      </Menu.Item>
    </Link>
    <Link to="/items/ascending">
      <Menu.Item>
        View Least Liked Items
      </Menu.Item>
    </Link> */}
  </Menu>
);

export default Navbar;