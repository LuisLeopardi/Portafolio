import React from 'react';

export const Projects = ({ title, tags, description, img, pack, url, github, h1Color }) => {
return (
    <article className='project'>
        <img src={img} alt="thumbnail"/>
        <div className='projectWrap'>
            <h1> {title} </h1>
            <section>
                {tags.map(e=> 
                <p 
                key={title + Math.random()*10000}
                style={ 
                    e==='react'? {backgroundColor:'rgb(0, 85, 197)'} : 
                    e==='express'? {backgroundColor:'rgb(0, 150, 12)'} : 
                    e==='sass'? {backgroundColor:'rgb(177, 0, 147)'} :
                    e==='mongoDB'? {backgroundColor:'rgb(0, 17, 255)'} : 
                    e==='css'? {backgroundColor:'rgb(252, 122, 0)'} : 
                    {backgroundColor:'rgb(0, 0, 0)'}}
                className='tag'> 
                    {e} 
                </p> 
                )}
            </section>
            <section>
                <p style={pack?{display:'block'}:{display:'none'}} className='dep'>packages:</p> 
                  { pack? pack.map(e=> <p key={pack + Math.random()*100000} className='dep'> {e} </p> ): false}
            </section>
            <p className='description'> {description} </p>
        </div>
        <div className='projectFooter'>
            <a href={url} className='view online' target='_blank' rel="noopener noreferrer"> view online </a>
            <a style={github?{display:'block'}:{display:'none'}} className='view github' target='_blank' rel="noopener noreferrer" href={github}> view on github </a>
        </div>
    </article>
)}