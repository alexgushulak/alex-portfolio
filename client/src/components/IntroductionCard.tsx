import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import '../App.css';

export default function IntroductionCard() {
  return (
    <div>
    <Container className="main-page-container" maxWidth="md" sx={{'margin-top': {xs: 25, sm: 100}, 'margin-bottom': {xs: 75, sm: 125}}}>
        <Typography className="main-page-hello" variant="h6" component="div" gutterBottom>
          My name is
        </Typography>
          <Box display="flex">
            <Typography className="main-page-title" variant="h1" component="div">Alex Gushulak.</Typography>
          </Box>
        <Typography className="main-page-title" color="#b7e7da" variant="h1" component="div" gutterBottom>I Like To Write Code.</Typography>
        <Typography className="main-page-description" color="#dadada" variant="h6" component="div" gutterBottom>
        As a mechanical engineer turned software engineer, I have a unique blend of technical skills and problem-solving abilities. 
        I'm passionate about building clean and performant full-stack web applications. 
        </Typography>
        <Box mt={3} display="flex" justifyContent="flex-start" alignItems="flex-start">
          <Button className="main-page-button" variant="outlined">Check Out My Latest Project</Button>
        </Box>
    </Container>
    </div>
  );
}