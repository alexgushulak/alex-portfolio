import Container from '@mui/material/Container';
import MediaCard from './components/MediaCard';
import MainNavBar from './components/MainNavBar';
import JobList from './components/JobList';
import IntroductionCard from './components/IntroductionCard';
import imgUrlBusiness from './assets/business.jpeg';
import imgUrlCliff from './assets/cliff.jpg';
import imgUrlComputer from './assets/computer.jpg';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#75e8a5',
      main: '#64ffd8',
      dark: '#64ffd8',
      contrastText: '#000'
      
    }
  },
});

export default function App() {
  return (
    <div>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <MainNavBar />
          <Fade in={true} timeout={500}>
            <div>
              <IntroductionCard />
          <Container sx={{mb:10}}>
            <JobList />
          </Container>
          <Container sx={{mb:10}}>
            <MediaCard title={"Portfolio Project"} description={"Desc 1"} imagePath= {(imgUrlComputer)} />
            <MediaCard title={"Machine Learning Project"} description={"Desc 2"} imagePath={imgUrlBusiness} />
            <MediaCard title={"Thermal Tracker GUI"} description={"Desc 3"} imagePath={imgUrlCliff}/>
          </Container>
          </div>
          </Fade>
        </ThemeProvider>
    </div>
  );
}