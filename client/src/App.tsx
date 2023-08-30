import Container from '@mui/material/Container';
import MediaCard from './components/MediaCard';
import MainNavBar from './components/MainNavBar';
import JobList from './components/JobList';
import Divider from '@mui/material/Divider';
import Hero from './components/Hero';
import imgUrlBusiness from './assets/ipod.png';
import imgUrlComputer from './assets/finapp_website.png';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Button, Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import axios from 'axios';
import React, { useState } from 'react';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import { orange } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import Text from '@mui/components/Text';
import RainbowTesla from './assets/rainbow_tesla.png'
import Tsunami from './assets/tsunami.png'
import Box from '@mui/material/Box';
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";



const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#75e8a5',
      main: '#64ffd8',
      dark: '#64ffd8',
      contrastText: '#000'

    },
    secondary: {
      light: '#da1e19',
      main: '#da1e19',
      dark: '#da1e19',
      contrastText: '#da1e19'
    },
    background: {
      default: '#101212',
    }
  },
});

export default function App() {
  const navigate = useNavigate();

  const [info, setInfo] = useState([]);
  const [thumbnailText, setThumbnailText] = useState('');

  const gatherInfo = () => {
    axios.get('https://alex-portfolio-production.up.railway.app/info').then((res) => {
      setInfo(res.data.name);
    });
  }

  React.useEffect(() => { 
  }, []);

  const trackClick = () => {
    axios.post('https://alex-portfolio-production.up.railway.app/submit',
              {message: thumbnailText}
    ).then((res) => {
      // do nothing
    });
    navigate("/submit")
  }

  const handleOnChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target
    setThumbnailText(value)
  }

  return (
    <div>
      {/* <ThemeProvider> */}
      
        <CssBaseline />
        <Routes>
          <Route path="/submit" element={<p>Loading</p>} />
          <Route path="/" element={''} />
        </Routes>
          <Container sx={{ mb: 5, mt: 15 }}>
          <Typography 
            variant="h3"
            component="h3"
            sx={{ display: 'block', 'text-align': 'center', margin: '0 auto', mt: 1}}>
            AI Thumbnail Generator
          </Typography>
          <TextField
            fullWidth={true}
            value={thumbnailText}
            onChange={handleOnChange}
            id="outlined-multiline-flexible"
            placeholder='A Rainbow Colored Tesla Model 3 Driving Through the Mountains'
            multiline
            maxRows={1}
          />
          <Button
            sx={{ display: 'block', 'text-align': 'center', margin: '0 auto', mt: 1}}
            variant="contained"
            onClick={trackClick}>
            GENERATE THUMBNAIL
          </Button>
          </Container>
          <Container sx={{ display: 'block', margin: '25px auto', 'text-align': 'center'}}>
            <Box
              component="img"
              sx={{
                height: 225,
                width: 400,
                display: 'inline-block',
                margin: '0 auto',
                padding: '10px'
              }}
              alt="The house from the offer."
              src={RainbowTesla}
            />
            <Box
              component="img"
              sx={{
                height: 225,
                width: 400,
                display: 'inline-block',
                margin: '0 auto',
                padding: '10px'
              }}
              alt="The house from the offer."
              src={Tsunami}
            />
          </Container>
      {/* </ThemeProvider> */}
      {/* <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <MainNavBar />
        {info}
        <div className="website-container">
          <Hero />
          <Container sx={{ mb: 10 }}>
            <Typography id="about-me" className="section-title" variant="h5" component="div" align="left" sx={{ 'font-family': 'Roboto Mono', ml: '0%' }} gutterBottom>About Me </Typography>
            <Divider variant="fullWidth" />
            <AboutMe />
          </Container>
          <Container sx={{ mb: 10 }}>
            <Typography id="work-experience" className="section-title" variant="h5" component="div" align="left" sx={{ 'font-family': 'Roboto Mono', pl: '0%' }} gutterBottom>Work Experience </Typography>
            <Divider variant="fullWidth" />
            <JobList />
          </Container>
          <Container sx={{ mb: 10 }}>
            <Typography id="projects" className="section-title" variant="h5" component="div" align="left" sx={{ 'font-family': 'Roboto Mono', ml: '0%' }} gutterBottom>Projects </Typography>
            <Divider variant="fullWidth" />
            <MediaCard
              title={"Finanical Tracker Web Application"}
              description={`I am building a financial tracking application for users to track
              and categorize their expenses. The main functionality that is working right now is the login
              and registration system=, which is built using Node.js, Express.js, and MongoDB.`}
              imagePath={(imgUrlComputer)}
              githubLink={"https://github.com/alexgushulak/NodeAuthApp"}
              deployLink={"https://master--transcendent-babka-f0fe4e.netlify.app/"} />
            <MediaCard title={"Online Video to MP3 Service"}
              description={"Under Construction"}
              imagePath={imgUrlBusiness}
              githubLink={"#"}
              deployLink={"#"} />
          </Container>
          <Footer />
        </div>
      </ThemeProvider> */}
    </div>
  )
}
