import Container from '@mui/material/Container';
import MediaCard from './components/MediaCard';
import MainNavBar from './components/MainNavBar';
import JobList from './components/JobList';
import IntroductionCard from './components/IntroductionCard';
import imgUrlBusiness from './assets/business.jpeg';
import imgUrlCliff from './assets/cliff.jpg';
import imgUrlComputer from './assets/computer.jpg';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import axios from 'axios';
import React, { useState } from 'react';
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
            <div>
              <IntroductionCard />
          <Container sx={{mb:10}}>
            <JobList />
          </Container>
          <Container sx={{mb:10}}>
            <Typography variant="h5" component="div" align="left" sx={{'font-family': 'Roboto Mono', ml:'4%'}} gutterBottom>03. My Work </Typography>
            <MediaCard title={"Finanical Tracking Web App"} description={"Desc 1"} imagePath= {(imgUrlComputer)} />
            <MediaCard title={"Temperature Plot Generator GUI"} description={"Desc 2"} imagePath={imgUrlBusiness} />
            <MediaCard title={"Machine Learning"} description={"Desc 3"} imagePath={imgUrlCliff}/>
          </Container>
          </div>
        </ThemeProvider>
    </div>
  );
}