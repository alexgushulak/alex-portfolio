import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import '../App.css';

export default function IntroductionCard() {
  return (
    <div>
    <Container className="main-page-container" maxWidth="md">
        <Typography className="main-page-hello" variant="h6" component="div" gutterBottom>
          My name is
        </Typography>
        <Typography className="main-page-title" variant="h1" component="div">Alex Gushulak.</Typography>
        <Typography className="main-page-title" color="#b7e7da" variant="h1" component="div" gutterBottom>I Like To Write Clean Code.</Typography>
        <Typography className="main-page-description" color="#dadada" variant="h6" component="div" gutterBottom>
        As a mechanical engineer turned software engineer, I have a unique blend of technical skills and problem-solving abilities. 
        I'm passionate about building clean and performant full-stack web applications (MERN). 
        </Typography>
        <Button className="main-page-button" variant="outlined">Check Out My Favorite Project</Button>
    </Container>
    </div>
  );
}