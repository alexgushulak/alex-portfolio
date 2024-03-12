import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import '../App.css';

export default function Hero() {
  return (
    <Container sx={{'min-height': '550px', 'height': {xs: '90vh', sm:'90vh'}, 'line-height': {xs: '25px', sm: '40px'},'margin-top': {xs: 0, sm: 0}, 'margin': '0 auto', 'margin-bottom': {xs: 0, sm: 0}, 'width': {xs: '90vw', sm: '75vw', md: '55vw',}}} >
    <Container
      className="main-page-container"
      sx={{'vertical-align': 'middle', 'display': 'inline'}}
    >
        <Typography className="main-page-hello" variant="h5" component="div" gutterBottom>
          My name is
        </Typography>
          <Box display="flex">
            <Typography className="main-page-title" variant="h1" component="div" sx={{'font-size': {xs:'10vw  !important',sm:'6vw!important', md:'4vw!important'}}}>Alex Gushulak. 🚀</Typography>
          </Box>
        <Typography
          className="main-page-title"
          color="#b7e7da"
          variant="h1"
          component="div"
          gutterBottom
          sx={{'font-size': {xs:'10vw!important',sm:'6vw!important', md:'4vw!important'}}}>
            Multidisciplinary Engineer
        </Typography>
        <Typography className="main-page-description" color="#dadada" variant="h6" component="div" gutterBottom>
        I'm a multidisciplinary engineer experienced in <u><strong>consumer</strong></u> and <u><strong>biotechnology</strong></u> product development.
        I have lead products from concept to production and can work at a low level on every aspect of the technology stack:&nbsp;
        <span className="quip">R&D Prototypes</span>, ‎
        <span className="quip">Mechanical Design</span>, ‎
        <span className="quip">Electrical Design</span>, ‎
        <span className="quip">Microprocessor Firmware</span>, ‎
        <span className="quip">Performant Frontend SW</span>, and ‎
        <span className="quip">Distributed Services</span>.
        </Typography>
        <Box mt={3} display="flex" justifyContent="flex-start" alignItems="flex-start">
          <Button href="#projects" className="main-page-button" variant="outlined">Check Out My Latest Work</Button>
        </Box>
        <a href="#about-me">
          <div className="chevron-container">
            <div className="chevron"></div>
            <div className="chevron"></div>
            <div className="chevron"></div>
          </div>
        </a>
    </Container>
    </Container>
  );
}