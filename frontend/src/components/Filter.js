import { ClassNames } from "@emotion/react";
import * as React from 'react';
import { Box, Chip,Select,MenuItem, FormControl,InputLabel} from "@mui/material";
import {useState,useEffect} from "react"
import "./Filter.css"
import {config} from "../App"
import LandingPage from "./LandingPage";
import { ThemeProvider, createTheme,MuiThemeProvider} from '@mui/material/styles';

export const videofiltereurl={url:`https://68c54a95-d9a3-4ce3-86e6-6e58bb58d6fd.mock.pstmn.io/v1/videos`}

export  let newconfig = {
  endpoint: `https://68c54a95-d9a3-4ce3-86e6-6e58bb58d6fd.mock.pstmn.io/v1/videos`
  // endpoint:`http://192.168.0.104:3000/vidoes`
};


function Filter() {
  const [age, setAge] = React.useState('');
 
  // useEffect(() => {
  //   videofiltereurl.url=newconfig.endpoint
  // })
  const [clickedChip, setClickedChip] = useState(newconfig.endpoint);
  function chipFilter(item) {
    if(item == 1){
      videofiltereurl.url = `${newconfig.endpoint}`
    }else
    videofiltereurl.url = `${newconfig.endpoint}?genres=${item}`
  }
  function chipFilter2(item) {
    if(item == 1){
      videofiltereurl.url = `${newconfig.endpoint}`

    }
    videofiltereurl.url = `${newconfig.endpoint}?contentRating=${item}%2B`

    // https://68c54a95-d9a3-4ce3-86e6-6e58bb58d6fd.mock.pstmn.io/v1/videos?contentRating=12%2B
  }
  const handleChange = (event) => {
    setAge(event.target.value);
  };
 
  return (
    <>

   
<Box
        display="flex"
       
        justifyContent="center"
        alignItems="center"
        
        sx={{
          gap: 2,
          display: "flex",
          "& > *": {
            m: 2,
          },
        }}
      >
        <Chip
          selected="selected"
          variant="filled "
          color="default"
          label="All"
          id="1"
          onClick={(event) => {
            chipFilter(event.currentTarget.id);
            
          }}
        


        />
        <Chip
          variant="outlined"
          color="default"
          label="Education"
          id="Education"
          onClick={(event) => {
            chipFilter(event.currentTarget.id);
          }}
        />
        <Chip
          variant="outlined"
          color="default"
          label="Sports"
          id="Sports"
          onClick={(event) => {
            chipFilter(event.currentTarget.id);
          }}
        />
        <Chip
          variant="outlined"
          color="default"
          label="Comedy"
          id="Comedy"
          onClick={(event) => {
            chipFilter(event.currentTarget.id);
          }}
        />
        <Chip
          variant="outlined"
          color="default"
          label="Lifestyle"
          id="Lifestyle"
          onClick={(event) => {
            chipFilter(event.currentTarget.id);
          }}
        />


 <FormControl className="widthforsort">
 <InputLabel id="demo-simple-select-label">Sort By upload Date</InputLabel>
<Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Sort By upload Date"
    onChange={handleChange}
  >
    <MenuItem value={10}>
   <Chip
          variant="outlined"
          color="default"
          label="Sort By upload Date"
          id="sort"
          onClick={(event) => {
            chipFilter(event.currentTarget.id);
          }}
        ></Chip>
        </MenuItem>
        <MenuItem value={10}>
        <Chip
          variant="outlined"
          color="default"
          label="Sort By View Count"
          id="sort"
          onClick={(event) => {
            chipFilter(event.currentTarget.id);
          }}
        ></Chip>
   </MenuItem>
    
  </Select>
  </FormControl>
  
     </Box>

      <Box
        display="flex"
        m={2}
        justifyContent="center"
        alignItems="center"
        
        sx={{
          display: "flex",
          "& > *": {
            m: 2,
          },
        }}
      >
        {/* <Chip label="Clickable"  onClick={()=>{console.log("Ketan")}} />
<Chip label="Clickable" variant="outlined" onClick={()=>{console.log("Ketan")}}/> */}

        <Chip
          variant="filled"
          color="default"
          label="Any age group"
          id="1"
          onClick={(event) => {
            chipFilter(event.currentTarget.id);
          }}
        />
        
        <Chip
          variant="outlined"
          color="default"
          label="7+"
          id="7"
          onClick={(event) => {
            chipFilter(event.currentTarget.id);
          }}
        />
        <Chip
          variant="outlined"
          color="default"
          label="12+"
          id="12"
          onClick={(event) => {
            chipFilter2(event.currentTarget.id);
          }}
        />
        <Chip
          variant="outlined"
          color="default"
          label="16+"
          id="16"
          onClick={(event) => {
            chipFilter2(event.currentTarget.id);
          }}
        />
        <Chip
          variant="outlined"
          color="default"
          label="18+"
          id="18"
          onClick={(event) => {
            chipFilter2(event.currentTarget.id);
          }}
        />
        
     
      </Box>
      
    </>
  );
}

export default Filter;
