import React from 'react'
import me from '../img/me.png'
import instagram from '../img/instagram.svg'
import linkedin from '../img/linkedin.svg'
export const Header = () => {
return (
    <header className='header'>
        <img src={me} alt="me"/>
        <div>
            <h1> Hi i'm Luis </h1>
            <h2> Full Stack Web Developer </h2>
            <p> Specialized in <b>React</b> and <b>Node</b>  </p>

            <section>
                <a href="https://www.instagram.com/luisleopardi_nano/" target='_blank' rel="noopener noreferrer">
                    <img src={instagram} alt="instagram"/>
                </a>
                <a href="https://www.linkedin.com/in/luis-amadeo-l-34b152119/" target='_blank' rel="noopener noreferrer">
                    <img src={linkedin} alt="linkedin"/>  
                </a>   
                
            </section>
        </div>
       
    </header>
)}