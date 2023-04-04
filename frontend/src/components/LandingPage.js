import React, {useEffect, useState} from 'react';
import VideoCard from './VideoCard';
// import { Link } from 'react-router-dom';
// import {config} from "../App"
import {videofiltereurl} from"./Filter"
import axios from 'axios';
import {
  CircularProgress,
  Grid,
} from "@mui/material";
// import Alert from '@material-ui/lab/Alert';
import Filter from './Filter';
import './LandingPage.css';
// import Headers from "./Header";
// import VideoPage from "./VideoPage";

export const videoframeobj= {videourl:"",videotitle:"",videoview:"",videogener:"",videoredate:"",videoid:""};
export let VideopageUrl = `/videopage`;


const LandingPage = () => {
  const [state , setState] = useState(true);
  
    const[videoCards, setVideoCards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const[furl,setFurl]=useState("");
    const [prevent,setPrevent]=useState(true);
    useEffect(() => {
      setState(false);
      setFurl(videofiltereurl.url);
     console.log(furl,"furl");
     if(prevent==true) {
      axios
        .get(furl)
        .then(response => {
          console.log(response.data,"Test")
          createVideoCards(response.data.videos);
          setPrevent(false);
        })
        .catch(error => {
          console.log(error);
          setIsError(true);
          setPrevent(true);
        })
     } 
    })

    // ({previewImage, title, genre, viewCount, contentRating, releaseDate})
    
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
    async function createVideoCards(videoItems) {
      let newVideoCards = [];
      for (const videos of videoItems) {
        const videoId = videos._id;
        
        // const response = await axios
        //                       .get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
    
        const title = videos.title;
        const previewImage = videos.previewImage;
        const viewCount = videos.viewCount;
        // const releaseDate = DateTime.fromISO(videos.releaseDate).toRelative();
        const releaseDate = videos.releaseDate;
        const genre = videos.genre;
        const videoLink=videos.videoLink;
        const _id= videos._id;

        newVideoCards.push({
        videoId,
        previewImage,
          title,
          viewCount,
          releaseDate,
          genre,
          videoLink,
          _id
        });
      };
      setVideoCards(newVideoCards);
      setIsLoading(false);
    }

    const generateVideolink =(e)=>{
      console.log(e,"objjject");
      //https://www.youtube.com/embed/hGrRg8aoBMU
      videoframeobj.videourl =`https://www.${e.videoLink}`;
      
      videoframeobj.videoid = e._id;
      videoframeobj.videotitle= e.title;
      videoframeobj.videoredate=e.releaseDate;
      videoframeobj.videorating= e.contentRating;
      videoframeobj.videoview=e.viewCount;
      console.log(videoframeobj.title);
      VideopageUrl +=e._id;
      setState(false);
    return videoframeobj;
    
    }
    const handelfilter=()=>{
      setFurl(videofiltereurl.url);
      setPrevent(true);
    }
 

    if(isError) {
   
      // return <Alert severity="error" className='loading'>No Results found!</Alert>
    } 

   
    
  
    return (
      <>


        <div onClick={handelfilter}>
        
        <Filter />
      </div>

     
        <div className='LandingPagevideos'>
            { isLoading ? <CircularProgress className='loading' color='secondary' /> : null }
            <div className="LandingPagevideos__videos">
                {
                  videoCards.map(item => {
                    return (
                      <>
                    
                      <Grid item md={3} xs={6} key={`${item.videoId}+"k"`}>
                                           <VideoCard key={item.videoId}
                            title={item.title}
                            previewImage={item.previewImage}
                            viewCount={item.viewCount}
                            releaseDate={item.releaseDate}
                            
                            handleVideolink={event => generateVideolink(item)}
                        />
                        </Grid>

                        {/* {state ?  <VideoPage key={item.videoId}
                            title={item.title}
                            previewImage={item.previewImage}
                            viewCount={item.viewCount}
                            releaseDate={item.releaseDate}
                            videoLink={item.videoLink}
                            handleVideolink={event => generateVideolink(item.videoLink)}
                        /> :null
                        } */}
                        </>     
                    )
                  })
                }
            </div>
        </div>

     
        </>
    )
}

export default LandingPage;