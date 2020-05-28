import React, {Component} from 'react';
import {Header} from './header.jsx';
import {Projects} from './projects.jsx';
import karate from '../img/karate.png';

class FrontPage extends Component {
  
    state = {
      projects: [
        {
          title:'Karate School Webiste',
          tags: ['react', 'express', 'mongoDB', 'sass'],
          packages: ['react-router-dom', '@hapi/joi', 'jwstoken', 'mongoose'],
          description:'App with modern design and backend',
          img:karate,
          url:'https://glacial-refuge-74459.herokuapp.com',
          github:''
        },
        {
          title:'News API',
          tags: ['react', 'css'],
          packages: false,
          description:'Watch news from 30.000 diferent sources and 7 categories',
          img:karate,
          url:'https://luisleopardi.github.io/newsApi/',
          github:'https://github.com/LuisLeopardi/newsApi'
        },
      ]
    }
   
    render(){
      const {projects} = this.state;
      return (
      <>
        <Header/>
        <h1 className='checkOut'> Check out my projects </h1>  
        {
          projects.map(e=> 
          <Projects 
            title={e.title} 
            tags={e.tags} 
            description={e.description} 
            img={e.img} pack={e.packages} 
            url={e.url} github={e.github}
          /> )
        }
      </>
    );
    }
  }
  
  export default FrontPage;