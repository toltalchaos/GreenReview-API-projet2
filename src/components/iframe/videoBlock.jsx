import React from 'react';
import Iframe from 'react-iframe';

const youtubeBlock = (props) => {
    return ( 
        <iframe width="560" 
        height="315" 
        src={props.link} 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>

        </iframe>
        
     );
}
 
export default youtubeBlock;