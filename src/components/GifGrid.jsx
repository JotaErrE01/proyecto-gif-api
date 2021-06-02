import React, { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';
import PropTypes from 'prop-types';
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category)
            .then(setImages);
    }, [category]);

    return ( 
        <>
            <h3>{category}</h3>

            <div className="contenedor-imagenes">
                {
                    images.map(img => (
                        <GifGridItem 
                            key={img.id} 
                            img={img}
                        />
                    ))
                }
            </div>
        </>
    );
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
 
export default GifGrid;