import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {TextField,FormControl,InputLabel,Select,MenuItem} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import UploadIcon from '@mui/icons-material/Upload';
import "./Modal.css";
import {useState}from 'react';
import axios from "axios";
import { newconfig } from './Filter';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.black',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [age, setAge] = React.useState('');
  const [value, setValue] = React.useState(null);
  const [videoData,setVideoData]=useState({ videoLink:"",
  imageLink:'',
  videoTitle:'',
  genre:'',
  contentRating:'',
  releaseDate:'',})

  const genre = [
 
    { genre: "Eduction" },
    { genre: "Sports" },
    { genre: "Comedy" },
    { genre: "Lifestyle" },
  ];
  const contentRating = [
    
    { rating: "7" },
    { rating: "12" },
    { rating: "16" },
    { rating: "18" },
  ];

 

  const handleChange = (event) => {
    const [key, value]=[event.target.name,event.target.value];
    setVideoData({ ...videoData, [key]: value })
    setAge(event.target.value);
  };

  const handleChanges = (event) => {
    const [key, value]=[event.target.name,event.target.value];
    setVideoData({ ...videoData, [key]: value })
    setAge(event.target.value);
  };

  const uploadVideo=async (videoData)=>{
    try {
      await axios.post(newconfig.endpoint);
      handleClose()
    } catch (error) {
      console.log(error)
    }
      }


  return (
    <div >
      <Button variant="contained" startIcon={<UploadIcon />} onClick={handleOpen}>Upload</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box  className='colorclass' sx={style}>
          <Typography id="modal-modal-videolink" variant="h6" component="h2">
          <TextField fullWidth label="videoLink" id="videoLink" />
          </Typography>
          <Typography id="modal-modal-thumbnail" sx={{ mt: 2 }}>
          <TextField fullWidth label="Thumbnail Image Link" id="fullWidth" />
          </Typography>

          <Typography id="modal-modal-title" sx={{ mt: 2 }}>
          <TextField fullWidth label="Titile" id="fullWidth" />
          </Typography>
          <Typography id="modal-modal-category" sx={{ mt: 2 }}>
          <FormControl fullWidth>

         
  <InputLabel id="demo-simple-select-label">Genre</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
    onChange={handleChange}
  >
    <MenuItem value={10}>Education</MenuItem>
    <MenuItem value={20}>Sports</MenuItem>
    <MenuItem value={30}>Lifestyle</MenuItem>
  </Select>
 
</FormControl>
</Typography>

<Typography id="modal-modal-agegroup" sx={{ mt: 2 }}>
          <FormControl fullWidth>

         
  <InputLabel id="demo-simple-select-label">Sutaible age group for the clip</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
    onChange={handleChanges}
  >
    <MenuItem value={7}>7+</MenuItem>
    <MenuItem value={14}>14+</MenuItem>
    <MenuItem value={16}>16+</MenuItem>
    <MenuItem value={18}>18+</MenuItem>
    
  </Select>
 
</FormControl>
</Typography>
<Typography id="modal-modal-rdate" sx={{ mt: 2 }}>
<LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Release Date" value={value} onChange={(newValue) => setValue(newValue)} />
      </DemoContainer>
    </LocalizationProvider>
    </Typography>
    <Typography id="modal-modal-rdate" sx={{ mt: 2}}>
    <Button variant="contained" onClick={uploadVideo}>Upload Video</Button> 
    <Button sx={{ ml: 2}} onClick={handleClose}>CANCEL</Button>
    </Typography>
        </Box>
      </Modal>
    </div>
  );
}