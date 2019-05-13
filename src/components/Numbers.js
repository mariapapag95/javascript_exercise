import React from 'react'
import NumberButton from './NumberButton'
import {Link} from 'react-router-dom';

function Numbers(props) {
    return (
        <div>
        <div>
            <div>
                <Link className= "home-button" to = '/'>Return Home</Link>
            </div>
              <p>Click for the numbers</p>
              <NumberButton/>
        </div>
        </div>
    )
}

export default Numbers; 