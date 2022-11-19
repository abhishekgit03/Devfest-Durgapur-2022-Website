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
import Anubhav from  "../../assets/Anubhav.jpg"
import Manish from  "../../assets/Manish.jpg"
import Sourav from  "../../assets/Sourav.jpg"
import Jyoti from  "../../assets/Jyoti.png"
import Rishiraj from  "../../assets/Rishiraj.JPG"
import Eshaan from  "../../assets/eshaan.jfif"
import Ayush from  "../../assets/ayush.png"
import Usha from  "../../assets/usha.jpeg"


export default function MediaCard() {
  return (
    <div className={styles.maincontainer}>
        <h1>Speakers</h1>
        <p>For applying as a speaker drop your proposal at hello@gdgdurgapur.in</p>
    <div className={styles.container}>
    
    
    <Card sx={{width:"40vh"}}>
      <CardMedia
        component="img"
        height="250"
        image={Ayush}
        alt="Ayush Sekhar"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Ayush Shekhar
        </Typography>
        <Typography variant="h7" color="text.secondary">
        GDE-Flutter and Dart,Engineer-FrontRow
          
        </Typography>
      </CardContent>
    </Card>
  
    <Card sx={{ width:"40vh"}}>
      <CardMedia 
        component="img"
        height="250"
        image={Anubhav}
        alt="green iguana"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div" >
         Anubhav Singh
        </Typography>
        <Typography variant="h7" color="text.secondary">
        CTO & Co-founder,Dynopii Inc.
        </Typography>
      </CardContent>
    </Card>

    <Card sx={{ width:"40vh"  }}>
      <CardMedia
        component="img"
        height="250"
        image={Manish}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Manish Kumar Barnwal
        </Typography>
        <Typography variant="h7" color="text.secondary">
        Co-founder, GemsDAO & Building, Insure 
        </Typography>
      </CardContent>
    </Card>

    <Card sx={{width:"40vh"}}>
      <CardMedia
        component="img"
        height="250"
        image={Sourav}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Sourav Tiwari
        </Typography>
        <Typography variant="h7" color="text.secondary">
        Senior Associate @PwC, Lead Organizer - Flutter Kolkata
          
        </Typography>
      </CardContent>
    </Card>

    <Card sx={{width:"40vh"}}>
      <CardMedia
        component="img"
        height="250"
        image={Jyoti}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Jyoti Mishra
        </Typography>
        <Typography variant="h7" color="text.secondary">
          SDE,Evertz Microsystems
          
        </Typography>
      </CardContent>
    </Card>

    <Card sx={{width:"40vh"}}>
      <CardMedia
        component="img"
        height="250"
        image={Eshaan}
        alt="Eshaan"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Eshan Chattaraj
        </Typography>
        <Typography variant="h7" color="text.secondary">
        Principal Software Engineer,Google India
          
        </Typography>
      </CardContent>
    </Card>

    <Card sx={{width:"40vh"}}>
      <CardMedia
        component="img"
        height="250"
        image={Rishiraj}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Rishiraj Acharya
        </Typography>
        <Typography variant="h7" color="text.secondary">
        Machine Learning Engineer,Dynopii Inc.
          
        </Typography>
      </CardContent>
   
    </Card>

    <Card sx={{width:"40vh"}}>
      <CardMedia
        component="img"
        height="250"
        image={Usha}
        alt="Usha Rengaraju"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Usha Rengaraju
        </Typography>
        <Typography variant="h7" color="text.secondary">
        Head of Data Science Research,
          
        </Typography>
      </CardContent>
   
    </Card>


   
    </div>
    </div>




    

    
  );
}
