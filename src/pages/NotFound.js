import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return ( 
        <div className='not-found'>
            <h2>This URL does not exist.</h2>
            <Link to="/">Back to Home page</Link>
        </div>
     );
}
 
export default NotFound;