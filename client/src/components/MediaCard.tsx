import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../App.css';

type AppProps = {
  title: string;
  description: string;
  imagePath: string;
};

export default function MediaCard({ title, description, imagePath }: AppProps) {
  return (
    <Card className="media-card" sx={{ width: { xs: 0.90, md: 0.40  }, margin: '25px'}}>
      <CardMedia
        sx={{ height: '200px' }}
        image={imagePath}
        title="na"
      />
      <CardContent sx={{'min-height': {xs: '100px', sm:'100px', md:'265px'}}}>
        <Typography gutterBottom variant="h5" component="div">{title}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{padding: 2}}>{description}</Typography>
      </CardContent>
      <CardActions className="button-container">
        <Button variant="contained" size="small">Github</Button>
        <Button variant="contained" size="small">Demo</Button>
      </CardActions>
    </Card>
  );
}