import React from 'react';
import YouTube from 'react-youtube';

const Videolink = ({videoId}) => {
    return (
        <div>
          <YouTube
            videoId={videoId}
          />
        </div>
    )
}

export default Videolink;