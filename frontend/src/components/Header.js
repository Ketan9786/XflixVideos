import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
// import VideoCallIcon from '@material-ui/icons/VideoCall';
// import AppsIcon from '@material-ui/icons/Apps';
// import NotificationsIcon from '@material-ui/icons/Notifications';
import UploadIcon from '@mui/icons-material/Upload';
import {Link} from 'react-router-dom';
import './Header.css';
import BasicModal from "./Modal"
import Button from '@mui/material/Button';
function Header () {
 const [Logo,setLogo]=useState("./logo/X.png")
    return (
      <>
      
      <div className='header'>
          <div className="header__left">
          <Link to="/" className="link">
          <img src="https://i.ibb.co/7QS01c6/X-1.png" alt="X-1" border="0" />
          <img src="https://i.ibb.co/Q9SZz0R/Flix-1.png" alt="Flix-1" border="0"/>
           </Link>
          </div>
          <div className="header__center">
            <input type='text' className="inputheader__search"/>
            <Button variant="outlined" startIcon={<SearchIcon />}>
              </Button>
          </div>

          <div className='header__right'>
        
          <BasicModal />
              
         
          
          </div>

          
          </div>
          </>
    )
}

export default Header;