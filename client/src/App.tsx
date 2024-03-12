import Container from '@mui/material/Container';
import MediaCard from './components/MediaCard';
import MainNavBar from './components/MainNavBar';
import JobList from './components/JobList';
import Divider from '@mui/material/Divider';
import Hero from './components/Hero';
import imgUrlClickgen from './assets/clickgenio.png'
import imgUrlToaster from './assets/toaster.png';
import imgUrlStm32 from './assets/stm32.png';
import imgUrlWheelchair from './assets/baseball.webp';
import imgUrlEngine from './assets/rocket.png';
import imgUrlVercel from './assets/vercel.webp';
import urlCapstone from './assets/Baseball_Capstone_Final_Presentation.pdf';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import axios from 'axios';
import React, { useState } from 'react';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

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

const cardData = [
  {
    title: "Vercel Clone",
    description: "I created a Vercel clone that allows a user to deploy a temporary react application to the web. The service I have created handles file storage, build and deployment, and provides a unique URL for the user to access their application.",
    skills: 'Docker, Node.JS, Typescript, Redis, AWS S3',
    imagePath: imgUrlVercel,
    githubLink: "https://github.com/alexgushulak/vercel-clone",
    deployLink: "#",
    button1_text: "GitHub",
  },
  {
    title: "Senior Capstone: Adaptive Control of a Baseball Pitching Machine",
    description: "Capstone proj ect to allow a father, who is quadrpelaic, to play baseball with his son by controlling a baseball pitching machine by using the subtle motion of his head and wrist. The project was developed using a Raspberry Pi, Arduino, and a custom-built wheelchair.",
    skills: 'React, Material UI, Express, Node.js, PostgreSQL',
    imagePath: imgUrlWheelchair,
    githubLink: urlCapstone,
    deployLink: "#",
    button1_text: "Presentation",
  },
  {
    title: "Youtube Thumbnail Generator SaaS",
    description: "I developed a SaaS product that enables content creators to generate YouTube thumbnails using Stable Diffusion XL 1.0. Users have created more than 1,000 YouTube thumbnails using the service, and I have leveraged customer data to enhance usability and boost conversion rates. On the frontend, I am utilizing React and Material UI, while on the backend, I rely on a Node.js server running Express connected to a PostgreSQL database to store user and image data.",
    skills: "React, Material UI, Express, Node.js, PostgreSQL",
    imagePath: imgUrlClickgen,
    githubLink: "#",
    deployLink: "https://clickgen.io/",
    button1_text: "GitHub",
    button2_text: "Website"
  },
  {
    title: "Custom STM32 NeoPixel LED PCB",
    skills: "KiCAD, STM32 Board Design, STM32CubeIDE, Neopixel Driver Development, Direct Memory Access",
    description: "I designed a custom PCB to control 16 NeoPixel LEDs using an STM32 microcontroller. The board is designed to be daisy-chained to other boards to create larger LED displays. The board is controlled using a custom driver that I developed using the STM32CubeIDE. The driver uses direct memory access to control the LEDs, which allows for smooth animations and fast refresh rates.",
    imagePath: imgUrlStm32,
    githubLink: "#",
    deployLink: "https://clickgen.io/",
    button1_text: "",
    button2_text: ""
  },
  {
    title: "SharkNinja Flip Toaster",
    description: "At SharkNinja, I was the lead R&D engineer developing a new heated consumer product called the 'flip toaster'. It is a toaster and toaster oven in one small footprint. Flip up for toaster mode and flip down for oven mode.",
    skills: "C Programming, Mechanical Teardowns, Supply Chain, Prototyping, High Volume Manufacturing, UL/IEC",
    imagePath: imgUrlToaster,
    githubLink: "#",
    deployLink: "https://clickgen.io/",
  },
  {
    title: "Liquid Rocket Engine",
    description: "Performed the high level design and thermodynamic analysis of a liquid rocket engine. The engine was designed to be a 3D printed, regeneratively cooled, and run on liquid oxygen and JET-A1 fuel",
    skills: 'Rocket Engine Design, Heat Transfer Modeling, 3D Modeling',
    imagePath: imgUrlEngine,
    githubLink: "",
    deployLink: "",
  }
];

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
            {cardData.map((card, index) => (
              <MediaCard
                key={index}
                title={card.title}
                description={card.description}
                skills={card.skills}
                imagePath={card.imagePath}
                githubLink={card.githubLink}
                deployLink={card.deployLink}
                button1_text={card.button1_text}
                button2_text={card.button2_text}
              />
            ))}
          </Container>
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  );
}
