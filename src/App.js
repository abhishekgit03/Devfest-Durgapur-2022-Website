import Banner from "./component/banner";
import WhatIs from "./component/whatIs";
import styles from "./App.module.scss";
import Sponsors from "./component/sponsors";
import Countdown from "./component/countdown";
import Team from "./component/Team";
import FAQ from "./component/FaqSection";
import Footer from "./component/footer";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Scroll from "react-scroll"

const drawerWidth = 240;
const navItems = ["Home", "About", "Sponsors", "Speakers", "Team","FAQ"];


function scrolltobottom(){
    var scroll=Scroll.animateScroll;
    scroll.scrollToBottom();

}

function scrolltoTeam(){
  var scroll=Scroll.animateScroll;
  scroll.scrollTo(1800);

}

function scrolltoSponsor(){
  var scroll=Scroll.animateScroll;
  scroll.scrollTo(1000);

}

function scrolltoAbout(){
  var scroll=Scroll.animateScroll;
  scroll.scrollTo(500);

}

function scrolltobottomM(){
  var scroll=Scroll.animateScroll;
  scroll.scrollToBottom();

}

function scrolltoTeamM(){
var scroll=Scroll.animateScroll;
scroll.scrollTo(3000);

}

function scrolltoSponsorM(){
var scroll=Scroll.animateScroll;
scroll.scrollTo(1700);

}

function scrolltoAboutM(){
var scroll=Scroll.animateScroll;
scroll.scrollTo(600);

}


function scrolltoHome(){
  var scroll=Scroll.animateScroll;
  scroll.scrollTo(0);
  
  }









function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img
        src="https://docs.google.com/drawings/d/e/2PACX-1vTuQ9uh4LtAozgty1TBGtQo3vl77_XGMSRAulJxpFQyqxbZvXk42ECcCWVskGFno3_wUH3Gl48xOfWb/pub?w=1920&amp;h=1080"
        style={{ width: "12vh" }}
      />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} 
               onClick={()=>{
                if(item==="About")
                {
                   scrolltoAboutM()
                }
                else if(item==="Sponsors")
                {
                     scrolltoSponsorM()
                }
                else if(item==="Team")
                {
                   scrolltoTeamM()
                }
                else if(item==="FAQ")
                {
                     scrolltobottomM()
                }
                else if(item==="Home")
                {
                  scrolltoHome()
                }


               }}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" sx={{ backgroundColor: "white", color: "black" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <img
            src="https://docs.google.com/drawings/d/e/2PACX-1vTuQ9uh4LtAozgty1TBGtQo3vl77_XGMSRAulJxpFQyqxbZvXk42ECcCWVskGFno3_wUH3Gl48xOfWb/pub?w=1920&amp;h=1080"
            alt=""
            className={styles.logo}
          />
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: "#202124",
                  marginRight: "20px",
                }}
                onClick={()=>{
                 if(item==="About")
                 {
                    scrolltoAbout()
                 }
                 else if(item==="Sponsors")
                 {
                      scrolltoSponsor()
                 }
                 else if(item==="Team")
                 {
                    scrolltoTeam()
                 }
                 else if(item==="FAQ")
                 {
                      scrolltobottom()
                 }
                 else if(item==="Home")
                 {
                   scrolltoHome()
                 }
 


                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

function App() {
  return (
    
    <div className={styles.body}>
      <DrawerAppBar />
      <Banner />
      {/* <Countdown /> */}
      <WhatIs className="whatIs" />
      <Sponsors />
      <Team />
      <FAQ />
      <Footer/>
     
    </div>
  );
}

export default App;
