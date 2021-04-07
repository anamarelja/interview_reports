import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom'
import Home from './pages/Home'
import Admin from './pages/Admin'
import Login from './pages/Login'
import NewReport from './pages/NewReport'
import User from './pages/User'

function App() {
  return (
    <div className="App">

    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/admin" component={Admin}/>
      <Route path="/login" component={Login}/>
      <Route path="/user" component={User}/>
      <Route path="/admin/newreport" component={NewReport}/>
      <Redirect from="" to="/"></Redirect>
    </Switch>
      
    </div>
  );
}

export default App;
