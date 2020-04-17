import React from 'react';
import { Route, Switch, } from 'react-router-dom';
import { Container, } from 'semantic-ui-react';
import Home from './components/Home';
import AllItems from './components/AllItems';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import MostLikes from './components/MostLikes';
import LeastLikes from './components/LeastLikes';


const App = () => (
  <>
  {/* put the navbar outside the container so it renders on top of the page, with content loading in a container below
  this container is one reason why I am using semantic-ui for a basic app */}
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/all_items" component={AllItems} />
        <Route exact path="/items/descending" component={MostLikes} />
        <Route exact path="/items/ascending" component={LeastLikes} />

        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>
);

export default App;