import React from "react";
import SponsorCard from "../../micro-component/SponsorCard/SponsorCard";
import styles from "./sponsors.module.scss";

const Sponsors = () => {
  return (
    <div className={styles.background}>
      <div className={styles.head}>
        <h1 className={styles.title}>Our Sponsors</h1>
      </div>
      <div className={styles.sponsorRow}>
        <SponsorCard
         
          url="https://developers.google.com/site-assets/images/home/developers-social-media.png"
          sponsor="Title Sponsor"
        />
        <SponsorCard
        
          url="https://i.ibb.co/WKjcHVd/left-image1.png"
          sponsor="Gold Sponsor"
        />
        <SponsorCard
        
          url="https://developers.google.com/site-assets/images/home/developers-social-media.png"
          sponsor="Silver Sponsor"
        />
      </div>
    </div>
  );
};

export default Sponsors;
