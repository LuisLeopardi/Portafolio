import React, {Component} from 'react';
import './css/style.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import FrontPage from './components/frontPage.jsx';
import {Navbar} from './components/navbar.jsx';
import {About} from './components/about.jsx';
import {Footer} from './components/footer.jsx';
class App extends Component {
render(){
return (
<div className='wrap'>

<Navbar/>

<Router>
  <Switch>
    <Route path="/" exact component={FrontPage}/>
    <Route path="/about" exact component={About}/>
  </Switch>
</Router>

<Footer/>

</div>
)}}

export default App;
