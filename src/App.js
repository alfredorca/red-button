import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeView from './Views/HomeView';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomeView} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
