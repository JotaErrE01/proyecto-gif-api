import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
import Spinner from './components/Spinner';

const App = () => {

    const [categories, setCategories] = useState([]);

    //spinner
    const [spinner, setSpinner] = useState(false);

    return ( 
        <>
            <h2>Gif Expert App</h2>
            <AddCategory 
                setCategories={setCategories}
                setSpinner={setSpinner}
            />
            <hr />
            {spinner ? 
                <Spinner /> : 
                <ol>
                    {
                        categories.map(category => (
                            <GifGrid 
                                key={category}
                                category={category}
                            />
                        ))
                    }
                </ol>
            }   
        </>
    );
}
 
export default App;