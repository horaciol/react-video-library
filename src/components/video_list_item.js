/**
 * Created by horaciolopez on 03/07/2017.
 */

import React from 'react';

const VideoListItem = ({video,onVideoSelect}) =>
{
    //const video = props.video; same as putting it in the paramenters
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>

                    <div className="media-body">
                        <div className="media-heading">{video.snippet.title}</div>
                    </div>
                </div>
            </div>
        </li>
    );
};


export default VideoListItem;