import React from 'react';
import {Route} from 'react-router-dom';
import Welcome from './Welcome'
import Numbers from './Numbers'

function Routes (props) {
  return (
      <div>
      <Route exact path = '/' component = {Welcome}/>
      <Route path = '/numbers' component = {Numbers}/>
      </div>
  );
}

export default Routes;
