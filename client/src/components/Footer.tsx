import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Footer() {
    return (
        <div>
        <Divider variant="fullWidth" />
        <Box sx={{ display: 'flex', width: '35  0px', 'margin': '0 auto', height: '50px' }}>
            <Typography variant="body2" sx={{ color: "#fff", m: 1.5, 'font-size': '14px', width: '150px', 'padding-top': '2px'}}>Built in Boston.</Typography>
            <Container sx={{mt: 0.4, display: 'inherit', 'max-width': 150, 'justify-content': 'right!important'}}>
                <Button sx={{display: 'inline-block'}} href="https://www.linkedin.com/in/alex-g-33039513b/">
                <LinkedInIcon  sx={{ color: "#fff", fontSize: 20, m: 0.5 }} />
                </Button>
                <Button sx={{display: 'inline-block'}} href="https://github.com/alexgushulak">
                <GitHubIcon sx={{ color: "#fff", fontSize: 20, m: 0.5 }} />
                </Button>
                <Button sx={{display: 'inline-block'}} href="mailto: alex.gushulak@gmail.com">
                <EmailIcon sx={{ color: "#fff", fontSize: 20, m: 0.5 }} />
                </Button>
            </Container>
        </Box>
        </div>
    )
}