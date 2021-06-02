import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories, setSpinner}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) =>{
        setInputValue(e.target.value)
    }

    const handleSubmit = e => { 
        e.preventDefault(); 

        //validacion 
        if(inputValue.trim().length > 2){

            setSpinner(true);

            setTimeout(() => {
                setCategories([inputValue]);
                setInputValue('');
                setSpinner(false);
            }, 2000);
        }
    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >
            <input 
                type="text" 
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
    setSpinner: PropTypes.func.isRequired
}
 
export default AddCategory;