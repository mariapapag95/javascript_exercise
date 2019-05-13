import React from 'react'
import {Link} from 'react-router-dom';

function Welcome(props) {
    return (
        <div>
              Welcome to this 
              <br></br>
              <div className= "fancy">G O R G E O U S</div>
              website
              <br></br>
              <br></br>
              <br></br>
              <Link className= "button" to = '/numbers'>Go To Numbers Page</Link>
        </div>
    )
}

export default Welcome; 