import React from 'react';
import FillerText from './FillerText.js';

class Webpage extends React.Component{
  render(){
    return(
        <div>
          <h1>Webpage </h1>
          <p>The world's coolest webpage </p>
          <FillerText />
          <FillerText />
        </div>
    )
  }
}

export default Webpage;
