import { Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import Playground from './pages/playground/Playground';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/playground" component={Playground} />
      </Switch>
    </>
  );
};

export default App;
