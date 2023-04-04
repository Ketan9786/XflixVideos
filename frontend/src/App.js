
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewLandingPage from './components/NewLandingPage';
import LandingPage ,{videoframeobj,VideopageUrl} from './components/LandingPage';
import VideoPage from './components/VideoPage';
import { useEffect,useState } from 'react';

export  const config = {
  // endpoint: `https://bd8e60d8-6f41-4cbe-b8b3-03ccc7c567d6.mock.pstmn.io/v1/videos`
  // endpoint:`http://192.168.0.104:3000/vidoes`
};


console.log(videoframeobj);

function App() {

  const [videopageUrl,setVideourl]=useState("")
  
  useEffect(() => {
    setVideourl(VideopageUrl);
    console.log(videopageUrl);
    
  })

 console.log(videoframeobj.videoid);
  return (
    <Router>
    <div>
      {/* TODO: CRIO_TASK_MODULE_LOGIN - To add configure routes and their mapping */}
      
      <Switch>
      
        <Route  path="/videopage">
          <VideoPage />
        </Route>

{/* <Route path="/videopage" element={<VideoPage />} /> */}
        <Route exact path="/">
          <NewLandingPage />
        </Route>
       </Switch>
    </div>
  </Router>
  );
}

export default App;
