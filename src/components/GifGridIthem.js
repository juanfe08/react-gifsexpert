import React from 'react'

export const GifGridIthem = ( {id, title, url} ) => {

    return (
        <div className="card animate__animated animate_bounce">
            <img src= { url } alt= { title }/>
            <p>{ title }</p>
        </div>
    )
}
