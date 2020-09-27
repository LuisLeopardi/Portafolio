import React, {Component} from 'react';
import {Header} from './header.jsx';
import {Projects} from './projects.jsx';
import karate from '../img/karate.png';
import chatApp from '../img/chatApp.PNG';
import shop from '../img/chatApp.PNG';
class FrontPage extends Component {
  
    state = {
      projects: [
        {
          title:'Karate School Webiste',
          tags: ['react', 'express', 'mongoDB', 'sass'],
          packages: ['react-router-dom', '@hapi/joi', 'jwstoken', 'mongoose', 'nodemailer'],
          description:'Website with modern design and backend',
          img:karate,
          url:'https://glacial-refuge-74459.herokuapp.com',
          github:'https://github.com/LuisLeopardi/karate'
        },
        {
          title:'Chat App',
          tags: ['react', 'express', 'mongoDB', 'sass'],
          packages: ['react-router-dom', '@hapi/joi', 'jwstoken', 'mongoose', 'socket.io', 'express-session'],
          description:'App with public chat rooms and private messaging',
          img:chatApp,
          url:'https://chatapp-luisleopardi.herokuapp.com',
          github:'https://github.com/LuisLeopardi/chatApp'
        },
        {
          title:'Fictional Shop',
          tags: ['react', 'express', 'mongoDB', 'sass'],
          packages: ['react-router-dom', 'jwstoken', 'mongoose', 'express-session', 'multer'],
          description:'A fictional shop where you can not buy anything... Only admins can upload items',
          img:shop,
          url:'https://fictional-shop.herokuapp.com',
          github:'https://github.com/LuisLeopardi/fictional-shop'
        }
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
            key={e.title}
            title={e.title} 
            tags={e.tags} 
            description={e.description} 
            img={e.img} pack={e.packages} 
            url={e.url} github={e.github}
            h1Color={e.h1Color}
          /> )
        }
      </>
    );
    }
  }
  
  export default FrontPage;