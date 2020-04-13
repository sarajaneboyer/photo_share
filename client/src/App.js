import React from 'react';
import { Route, Switch, } from 'react-router-dom';
import { Container, } from 'semantic-ui-react';
import Home from './components/Home';
import AllItems from './components/AllItems';
import NewItemForm from './components/NewItemForm';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';

const App = () => (
  <>
  {/* put the navbar outside the container so it renders on top of the page, with content loading in a container below
  this container is one reason why I am using semantic-ui for a basic app */}
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/all_items" component={AllItems} />
        <Route exact path="/new_item" component={NewItemForm} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>
);

export default App;