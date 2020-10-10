import React from 'react';
import YouTube from 'react-youtube';



export default function Youtube() {
    const opts = {
        playerVars: {
            autoplay: 0,
        },
    };

    return <YouTube videoId="IkMXMEplOIo" opts={opts} />;

}