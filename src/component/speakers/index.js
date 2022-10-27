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
    <Card sx={{ width:"40vh"}}>
      <CardMedia 
        component="img"
        height="250"
        image="https://img.freepik.com/premium-vector/conference-icon-with-speaker-stage-vector_116137-3108.jpg?w=2000"
        alt="green iguana"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
         
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif" width="40vh"/>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"><LinkedInIcon/></Button>
        <Button size="small"><TwitterIcon/></Button>
        <Button size="small"><InstagramIcon/></Button>
      </CardActions>
    </Card>

    <Card sx={{ width:"40vh"  }}>
      <CardMedia
        component="img"
        height="250"
        image="https://static.vecteezy.com/system/resources/previews/002/040/867/original/conference-icon-with-speaker-on-stage-eps-vector.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif" width="40vh"/>
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small"><LinkedInIcon/></Button>
      <Button size="small"><TwitterIcon/></Button>
      <Button size="small"><InstagramIcon/></Button>
      </CardActions>
    </Card>

    <Card sx={{width:"40vh"}}>
      <CardMedia
        component="img"
        height="250"
        image="https://img.freepik.com/premium-vector/conference-icon-with-speaker-stage-vector_116137-3108.jpg?w=2000"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif" width="40vh"/>
          
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
