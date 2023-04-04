import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import React, {useEffect} from 'react';
import LandingPage ,{videoframeobj, VideopageUrl}from "./LandingPage";
import "./VideoPage.css";
import axios from 'axios';
import {useState} from 'react';

import {  useSnackbar,enqueueSnackbar } from 'notistack'
import Dashboard ,{videoframeobjs}from "./Dashboard";
import moment from 'moment'
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localeEn from "dayjs/locale/en"; // With a custom alias for the locale object


// const VideoCard = ({previewImage, title, releaseDate,videoLink}) => {
//     return (
//         <>
//         <a href='https://www.youtube.com/watch?v=QxwUt-GHok0'>
//         <div className='videocard'>
//           <img className='videocard__image' src={previewImage} alt='' />
//             <div className="videocard__text">
//               <h4>{title}</h4>
//                <p>{releaseDate}</p> 
               
//             </div> 
//           </div>
//           </a>
//         </>

const  VideoPage=() => {
 

  // const [title, setTitle]=useState("");
  const [videolink, setVideolink]=useState("");
  const [titles, setTitles]=useState("");
  
  const [releaseDates, setReleaseDates]= useState("");
  const [rating, setRating]= useState(" ");
  const[view,setView]=useState(" ");

  
  console.log(videoframeobj.videotitle,"titlelngkd")
  useEffect(() => {
    setVideolink(videoframeobj.videourl);
    
    setTitles(videoframeobj.videotitle);
    setReleaseDates(videoframeobj.videoredate);
   
    setRating(videoframeobj.videorating)
    setView(videoframeobj.videoview)
    
  },[])
  // async function generateVideolink() {

  //   try {
    
  //      const response = await axios.get(config.endpoint.videoLink)    
  //      const videoU = response.data;
  //      console.log(videoU);
       
  //      setVideourl(videoU);
  //   } catch(error) {
  //     if (error.response) {
  //       // RETURN API ERROR
  //       enqueueSnackbar(error.response.statusText, { variant: 'error' });
  //     } else {
  //       // IF BACKEND IS NOT RUNNING
  //       enqueueSnackbar("Something went wrong!", { variant: 'error' });
  //     }  }
      
  // }

  const handleVideolinks=()=>{
  

    // videolink = url;

    setVideolink(videoframeobjs.videourl);
    
    setTitles(videoframeobjs.videotitle);
    setReleaseDates(videoframeobjs.videoredate);
    setRating(videoframeobjs.videorating)
    setView(videoframeobjs.videoview)
  }
  
  const daysago = (postDate) => { 
    dayjs.extend(relativeTime).locale(localeEn) 
    var fromNowOn = dayjs(postDate).fromNow(); 
    return(fromNowOn)
 };
 const dateago= daysago(`${releaseDates}`)



  return (
    <>
    <header>
    <div className='header'>
          <div className="header__left">
          <Link to="/" className="link">
              <img 
                className='header__logo'
                src='./logo/X.svg'
                alt='no Im logo'
              />
           
           </Link>
          </div>
          </div>
    </header>

      <div>
        <div className="VideoPage">
          <div className="VideoPageFrmae">
          {/* `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}` */}
          <iframe src={videolink} className="VideoPageFrmae" />

          {/* <iframe className="VideoPageFrmae"  src="https://www.youtube.com/embed/hGrRg8aoBMU"/> */}
          <div className="Videodetails">
          <h4>{titles}</h4>
            <div>
            

            <button>
<i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
</button>
            <button>
<i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
</button>
</div>
           
          </div>
          
          <div className="Videodetails2">
          <h5>{rating}</h5>
            <h5>{view}</h5>
            <h5>{dateago}</h5>
            
</div>
          
          </div> 
        </div>
        
        </div>

        <div onClick={handleVideolinks}>
          <Dashboard />
        </div>
      
    </>
  );
}

export default VideoPage;
