import React from 'react';
import PropTypes from 'prop-types';

const GifGridItem = ({img}) => {

    const {url, title} = img;

    return ( 
        <div className="card">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    );
}

GifGridItem.propTypes = {
    img: PropTypes.object.isRequired
}
 
export default GifGridItem;