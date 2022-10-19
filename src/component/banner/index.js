import React from "react";
import styles from "./banner.module.scss";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlaceIcon from "@mui/icons-material/Place";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.leftSection}>
        <img
          src="https://docs.google.com/drawings/d/e/2PACX-1vQyJFEg4MpTlbPVrTldkylMDgysybTa8DchFP1RDsFiuMnzIAPNdPZsfWH_4kxErECkyaX6Z2Ra_vuF/pub?w=1920&amp;h=1080"
          alt=""
          className={styles.logo}
        />
        
        <h1 className={styles.title}>GDG Durgapur</h1>
        <h4 className={styles.details}>
          DevFests are community-led, developer events hosted by GDG
          <br /> chapters around the globe focused on community building and
          <br />
          learning about Google’s technologies.
        </h4>
        <div className={styles.venue}>
          <div className={styles.venueItem}>
            <CalendarMonthIcon />
            <h4>Nov 27, 2022</h4>
          </div>
          <div className={styles.venueItem}>
            <AccessTimeIcon />
            <h4>9:00 AM to 5:00 PM IST</h4>
          </div>
          <div className={styles.venueItem}>
            <PlaceIcon />
            <h4>TBD, Durgapur</h4>
          </div>
        </div>
        <div className={styles.btn}>Registrations will start on 1st November</div>
        <div className={styles.hashtag}>
          <h3 className={styles.hash}>#DevFestDurgapur</h3>
          <h3 className={styles.hash}>#GDGDurgapur</h3>
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.video}>
          <img
            src="https://i.ibb.co/cN408sR/Dev-Fest22-Intro-01-Adobe-Express.gif"
            alt="Dev-Fest22-Intro-01-Adobe-Express"
            border="0"
            className={styles.gif}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
