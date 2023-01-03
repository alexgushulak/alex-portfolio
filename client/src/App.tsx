import Container from '@mui/material/Container';
import MediaCard from './components/MediaCard';
import MainNavBar from './components/MainNavBar';
import JobList from './components/JobList';
import Divider from '@mui/material/Divider';
import IntroductionCard from './components/IntroductionCard';
import imgUrlBusiness from './assets/business.jpeg';
import imgUrlCliff from './assets/cliff.jpg';
import imgUrlComputer from './assets/computer.jpg';
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

  React.useEffect(() => {gatherInfo();}, []);

  return (
    <div>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
            <MainNavBar />
            {info}
            <div className="website-container">
              <IntroductionCard />
              <Container sx={{mb:10}}>
                <Typography id="about-me" className="section-title" variant="h5" component="div" align="left" sx={{'font-family': 'Roboto Mono', ml:'0%'}} gutterBottom>About Me </Typography>
                <Divider variant="fullWidth" />
                <AboutMe />
              </Container>
            <Container sx={{mb:10}}>
              <Typography id="work-experience" className="section-title" variant="h5" component="div" align="left" sx={{'font-family': 'Roboto Mono', pl:'0%'}} gutterBottom>Work Experience </Typography>
              <Divider variant="fullWidth" />
              <JobList />
            </Container>
            <Container sx={{mb:10}}>
              <Typography id="projects" className="section-title" variant="h5" component="div" align="left" sx={{'font-family': 'Roboto Mono', ml:'0%'}} gutterBottom>Projects </Typography>
              <Divider variant="fullWidth"/>
              <MediaCard
                title={"Finanical Tracking Web App"}
                description={"I created a financial tracking app featuring budgeting tools, bill reminders, personalized spending reports, and bank integration. Users can also set and track financial goals. Take control of your finances with this convenient app."}
                imagePath={(imgUrlComputer)} />
              <MediaCard title={"Temperature Plot Generator GUI"} description={"Desc 2"} imagePath={imgUrlBusiness} />
              <MediaCard title={"Machine Learning"} description={"Desc 3"} imagePath={imgUrlCliff}/>
            </Container>
            <Footer />
            </div>
        </ThemeProvider>
    </div>
  );
}