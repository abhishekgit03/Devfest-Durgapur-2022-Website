import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from "./speakers.module.scss";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function MediaCard() {
  return (
    <div className={styles.maincontainer}>
        <h1>Speakers</h1>
        <p>For applying as a speaker drop your proposal at hello@gdgdurgapur.in</p>
    <div className={styles.container}>
    <Card sx={{ width:"50vh"}}>
      <CardMedia 
        component="img"
        height="200"
        image="https://st3.depositphotos.com/3581215/18899/v/600/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg"
        alt="green iguana"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          Speaker
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Coming Soon
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><LinkedInIcon/></Button>
        <Button size="small"><TwitterIcon/></Button>
        <Button size="small"><InstagramIcon/></Button>
      </CardActions>
    </Card>

    <Card sx={{ width:"50vh"  }}>
      <CardMedia
        component="img"
        height="200"
        image="https://st3.depositphotos.com/3581215/18899/v/600/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Speaker
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Coming Soon
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small"><LinkedInIcon/></Button>
      <Button size="small"><TwitterIcon/></Button>
      <Button size="small"><InstagramIcon/></Button>
      </CardActions>
    </Card>

    <Card sx={{width:"50vh"  }}>
      <CardMedia
        component="img"
        height="200"
        image="https://st3.depositphotos.com/3581215/18899/v/600/depositphotos_188994514-stock-illustration-vector-illustration-male-silhouette-profile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Speaker
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Coming Soon
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><LinkedInIcon/></Button>
        <Button size="small"><TwitterIcon/></Button>
        <Button size="small"><InstagramIcon/></Button>
      </CardActions>
    </Card>


    

   
    </div>
    </div>




    

    
  );
}
