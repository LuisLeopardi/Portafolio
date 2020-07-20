import React, {Component} from 'react';
import './css/style.css';
import FrontPage from './components/frontPage.jsx';
import {Footer} from './components/footer.jsx';
class App extends Component {
render(){
return (
<div className='wrap'>

<FrontPage/>

<Footer/>

</div>
)}}

export default App;
