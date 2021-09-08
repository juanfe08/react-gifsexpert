import React, { Fragment } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridIthem } from './GifGridIthem';

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );



    return (
        <Fragment>
        <h3> { category }</h3>

        { loading && <p>loading</p> }

        {       
         <div className="card-grid">
            {
                images.map( img => (
                    <GifGridIthem 
                        key={ img.id }
                        { ...img } 
                    />
                ))
             }
         </div>
        }
        </Fragment>
    )
}
