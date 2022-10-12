import { useState, useEffect } from 'react';

import './Homepage.css';
import GridBox from '../../components/GridBox';

function Homepage() {
    const [rendered, setRendered] = useState(false);
    const [variant, setVariant] = useState({ grid: true, column: false });

    useEffect(() => {
        setTimeout(() => {
            setRendered(true)
        }, 1000)
    }, []);


    function changeLayout() {
       setVariant({ ...variant, column: !variant.column })
    }
    
    return (
        <main className='container'>
            {rendered && <button onClick={changeLayout} className='btn'>
                Change layout</button>
            }
            <GridBox variant={variant} />
        </main>
    )
}

export default Homepage;