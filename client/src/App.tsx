import Container from '@mui/material/Container';
import MediaCard from './components/MediaCard';
import MainNavBar from './components/MainNavBar';
import JobList from './components/JobList';
import Divider from '@mui/material/Divider';
import Hero from './components/Hero';
import imgUrlBusiness from './assets/ipod.png';
import imgUrlComputer from './assets/finapp_website.png';
import imgUrlClickgen from './assets/clickgenio.png'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import axios from 'axios';
import React, { useState } from 'react';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import { orange } from '@mui/material/colors';

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

  const [info, setInfo] = useState([]);

  const gatherInfo = () => {
    axios.get('https://alex-portfolio-production.up.railway.app/info').then((res) => {
      setInfo(res.data.name);
    });
  }

  React.useEffect(() => { gatherInfo(); }, []);

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <MainNavBar />
        {info}
        <div className="website-container">
          <Hero />
          <Container sx={{ mb: 10 }}>
            <Typography
              id="about-me"
              className="section-title"
              variant="h5"
              component="div"
              align="left"
              sx={{ 'font-family': 'Roboto Mono', ml: '0%' }} gutterBottom>
                About Me 
            </Typography>
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
              title={"Stock Vesting Calculator"}
              description={"I built a simple web application for users to calculate how much the value of their vested stocks have grown since they've vested"}
              imagePath={(imgUrlComputer)}
              githubLink={"https://github.com/alexgushulak/NodeAuthApp"}
              deployLink={"https://master--transcendent-babka-f0fe4e.netlify.app/"} />
            <MediaCard title={"AI Youtube Thumbnail Generator"}
              description={`
               I developed a SaaS product that enables content creators to generate YouTube thumbnails using Stable Diffusion XL 1.0. Users have created more than 1,000 YouTube thumbnails using the service, and I have leveraged customer data to enhance usability and boost conversion rates. On the frontend, I am utilizing React and Material UI, while on the backend, I rely on Express running on a Node.js server with a PostgreSQL database to store user and image data.
              `}
              imagePath={imgUrlClickgen}
              githubLink={"#"}
              deployLink={"https://clickgen.io/"} />
          </Container>
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  );
}
