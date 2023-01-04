import { Typography } from '@mui/material';
import Container from '@mui/material/Container';

export default function AboutMe() {
    return (
        <Container
            className="main-page-container"
            maxWidth="md"
            sx={{'margin-top': {xs: 25, sm: 25}, 'margin-bottom': {xs: 75, sm: 100}}}
        >
            <Typography variant="body1" align="left" component="div" sx={{'max-width':700, textAlign:'left'}} gutterBottom>
            Hi there, my name is Alex Gushulak and I am a software engineer with a background in mechanical engineering. 
            I received my degree from Northeastern University and have since focused on full stack web development, 
            specializing in React, Node, and Express. I am constantly looking to learn and grow as a developer, 
            and am excited to bring my diverse skill set to any project I work on.
            </Typography>
        </Container>
    )   
}