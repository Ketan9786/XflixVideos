import React from 'react';
import './VideoCard.css';
import {Link} from 'react-router-dom';
import { config } from '../App';
import VideopageUrl from "./LandingPage" 
// {
//     "votes": {
//         "upVotes": 0,
//         "downVotes": 0
//     },
//     "previewImage": "https://i.ytimg.com/vi/nx2-4l4s4Nw/mqdefault.jpg",
//     "viewCount": 83,
//     "_id": "60331f421f1d093ab5424489",
//     "videoLink": "youtube.com/embed/nx2-4l4s4Nw",
//     "title": "Consumed by the Apocalypse",
//     "genre": "Movies",
//     "contentRating": "12+",
//     "releaseDate": "18 Jan 2021"
// },
const VideoCard = ({previewImage, title, releaseDate,handleVideolink}) => {

  
  
    return (
        <>
      <div onClick={handleVideolink}>
       <Link to="/videopage" className="link" >
        <div className='videocard'>
          <img className='videocard__image' src={previewImage} alt='' />
            <div className="videocard__text">
              <h4>{title}</h4>
               <p>{releaseDate}</p> 
               
            </div> 
          </div>
          
          </Link>
          </div>
        </>
        
       
    )
}

export default VideoCard;