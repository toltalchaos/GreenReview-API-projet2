import React from 'react';
import Iframe from 'react-iframe';

const youtubeBlock = (props) => {
    return ( 
        <iframe width="560" 
        height="315" 
        src={props.link} 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>

        </iframe>
        
     );
}
 
export default youtubeBlock;