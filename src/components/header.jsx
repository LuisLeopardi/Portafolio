import React from 'react'
import me from '../img/me.png'
import instagram from '../img/instagram.svg'
import linkedin from '../img/linkedin.svg'
export const Header = () => {
return (

    <>

    <div className='decoration-wrap'>
        <div className='line'> <p>PORT</p> </div>
        <div className='circle'></div>
        <div className='line'> <p>FOLIO</p> </div>
    </div>

    <header className='header'>

        <img src={me} alt="me"/>
        <div>
            <h1> Hi i'm Luis </h1>
            <h2> Full Stack Web Developer </h2>
            <p> Specialized in <h3>React</h3> and <h3>Express</h3>  </p>

            <section>
                <a href="https://www.instagram.com/luisleopardi_nano/" target='_blank' rel="noopener noreferrer">
                    <img src={instagram} alt="instagram"/>
                </a>
                <a href="https://www.linkedin.com/in/luis-amadeo-l-34b152119/" target='_blank' rel="noopener noreferrer">
                    <img src={linkedin} alt="linkedin"/>  
                </a>   
                
            </section>
        </div>

        <span>supernano1998@gmail.com</span>   
       
    </header>

    </>
)}