import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../App.css';

type AppProps = {
  title: string;
  description: string;
  imagePath: string;
  githubLink: string;
  deployLink: string;
  skills: string;
  button1_text?: string;
  button2_text?: string;
};

export default function MediaCard({ title, description, imagePath, githubLink, deployLink, skills, button1_text, button2_text }: AppProps) {
  return (
    <Card className="media-card" sx={{ width: { xs: 0.90, md: 0.45  }, margin: '20px 5px'}}>
      <CardMedia
        sx={{ height: '300px' }}
        image={imagePath}
        title="na"
      />
      <CardContent sx={{'min-height': {xs: '100px', sm:'100px', md:'300px'}}}>
        <Typography gutterBottom variant="h5" component="div"><strong>{title}</strong></Typography>
        <Typography variant="body2" color="text.secondary" sx={{padding: 2}}>{skills}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{padding: 2}}>{description}</Typography>
      </CardContent>
      <CardActions className="button-container">
        {
          button1_text ? (
            <Link href={githubLink}>
              <Button variant="contained" size="small">{button1_text}</Button>
            </Link>
          ) : <Box>&nbsp;</Box>
        }
        {
          button2_text ? (
            <Link href={deployLink}>
              <Button variant="contained" size="small">{button2_text}</Button>
            </Link>
          ) : null
        }
      </CardActions>
    </Card>
  );
}